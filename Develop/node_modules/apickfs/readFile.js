const fsp = require('fs').promises;
const path = require('path');
const fileOrFolderExists = require('./fileOrFolderExists');

// @todo - the purpose of this module is just to read files. not folders. so, its better to call it readFile

module.exports = async function readFile(directoryPath, fileName) {
  const directoryExists = await fileOrFolderExists(directoryPath);
  const fileExists = !fileName
    ? null
    : await fileOrFolderExists(path.join(directoryPath, fileName));

  if (!directoryExists) {
    return {
      success: false,
      message: `Error: ${directoryPath} doesnot exist.`
    };
  } else if (directoryExists && !fileExists) {
    return {
      success: false,
      message: `Error: ${path.join(directoryPath, fileName)} doesnot exist.`
    };
  } else if (directoryExists && fileExists) {
    try {
      const fileData = await fsp.readFile(path.join(directoryPath, fileName), {
        encoding: 'utf8'
      });

      return {
        success: true,
        message: `SUCCESS: data successfully read from ${path.join(
          directoryPath,
          fileName
        )}.`,
        data: JSONData(fileData)
      };
    } catch (error) {
      return {
        success: false,
        message: error.toString()
      };
    }
  }
};

function JSONData(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return str;
  }
}
