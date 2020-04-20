const fsp = require('fs').promises;
const fs = require('fs');
const path = require('path');
const fileOrFolderExists = require('./fileOrFolderExists');

module.exports = async function getDirectoryEntries(directoryPath, options = {}){
  let {
    maxLevel,
    listFiles,
    listDirectories,
    getFullPath,
    ignoreEmptyExtension,
    mustHaveExtensions,
    mustNotHaveExtensions,
    mustStartWith,
    mustNotStartWith,
    mustInclude,
    mustNotInclude,
    extraDetails
  } = options;

  _maxLevel = maxLevel && Number.isInteger(maxLevel) ? maxLevel : 0;
  _listFiles = typeof listFiles == 'boolean' ? listFiles : true;
  _listDirectories = typeof listDirectories == 'boolean' ? listDirectories : true;
  _fullPath = typeof getFullPath === 'boolean' ? getFullPath : true;
  _ignoreEmptyExtension = typeof ignoreEmptyExtension === 'boolean' ? ignoreEmptyExtension : false;
  _mustHaveExtensions = Array.isArray(mustHaveExtensions) ? mustHaveExtensions : [];
  _mustNotHaveExtensions = Array.isArray(mustNotHaveExtensions) ? mustNotHaveExtensions : [];
  _mustStartWith = Array.isArray(mustStartWith) ? mustStartWith : [];
  _mustNotStartWith = Array.isArray(mustNotStartWith) ? mustNotStartWith : [];
  _mustInclude = Array.isArray(mustInclude) ? mustInclude : [];
  _mustNotInclude = Array.isArray(mustNotInclude) ? mustNotInclude : [];
  _extraDetails = typeof extraDetails == 'boolean' ? extraDetails : false;

  let arrayOfNames = [];
  let arrayOfFullPaths = [];
  let simpleArrayOfNames = [];
  let simpleArrayOfFullPaths = [];

  async function _print(directoryPath, __level) {
    const dir = await fs.promises.opendir(directoryPath);
    for await (const dirent of dir) {
      let fullPath = path.join(directoryPath, dirent.name);
      let entName = dirent.name;
      let extension = cleanExtension(path.extname(dirent.name));
      if (dirent.isDirectory()) {
        lastReadDirName = entName;
        lastReadDirPath = fullPath;
        if (_listDirectories) {
          arrayOfFullPaths.push({
            type: 'directory',
            level: __level,
            fullPath,
            parent: directoryPath
          });
          arrayOfNames.push({ type: 'directory', level: __level, entName, parent: directoryPath });
          simpleArrayOfFullPaths.push(fullPath);
          simpleArrayOfNames.push(entName);
        }
        __level++;
        if (_maxLevel && __level > _maxLevel) {
          break;
        }
        await _print(fullPath, __level);
      } else {
        if (!_listFiles) continue;
        if (_ignoreEmptyExtension && !extension) continue;
        if (_mustHaveExtensions.length && !arrayOfExtensionsHasExtension(_mustHaveExtensions, extension)) continue;
        if (arrayOfExtensionsHasExtension(_mustNotHaveExtensions, extension)) continue;
        if (_mustStartWith.length && !arrayOfStringStartsWithString(_mustStartWith, entName)) continue;
        if (arrayOfStringStartsWithString(_mustNotStartWith, entName)) continue;
        if (_mustInclude.length && !arrayOfStringIncludesString(_mustInclude, entName)) continue;
        if (arrayOfStringIncludesString(_mustNotInclude, entName)) continue;

        arrayOfFullPaths.push({ type: 'file', level: __level, fullPath, extension, parent: directoryPath });
        arrayOfNames.push({
          type: 'file',
          level: __level,
          fileName: entName,
          extension,
          parent: directoryPath
        });
        simpleArrayOfFullPaths.push(fullPath);
        simpleArrayOfNames.push(entName);
      }
    }
  }



  await _print(directoryPath, 0);

  if (_fullPath) {
    if (_extraDetails) {
      return arrayOfFullPaths;
    } else {
      return simpleArrayOfFullPaths;
    }
  } else {
    if (_extraDetails) {
      return arrayOfNames;
    } else {
      return simpleArrayOfNames;
    }
  }
}

function arrayOfStringStartsWithString(arrayOfStr, str) {
  let match = false;
  arrayOfStr.forEach(item => {
    if (
      str
        .toLowerCase()
        .trim()
        .startsWith(item.toLowerCase().trim())
    ) {
      match = true;
    }
    if (match) return true;
  });
  return match;
}

function arrayOfStringIncludesString(arrayOfStr, str) {
  let match = false;
  arrayOfStr.forEach(item => {
    if (
      str
        .toLowerCase()
        .trim()
        .includes(item.toLowerCase().trim())
    ) {
      match = true;
    }
    if (match) return true;
  });
  return match;
}

function arrayOfExtensionsHasExtension(arrayOfExt, ext) {
  let match = false;
  arrayOfExt.forEach(requiredExtension => {
    if (cleanExtension(requiredExtension) == ext) {
      match = true;
    }
    if (match) return true;
  });
  return match;
}

function cleanExtension(extension) {
  return extension.trim().charAt(0) === '.'
    ? extension
        .trim()
        .toLowerCase()
        .substring(1)
    : extension.trim().toLocaleLowerCase();
}