const fsp = require('fs').promises;
const fileOrFolderExists = require('apickfs/fileOrFolderExists');

module.exports = async function directoryExists(directoryPath) {
  let storageDataResult = false;
  const storageExists = await fileOrFolderExists(directoryPath);
  if (storageExists) {
    const storageState = await fsp.stat(directoryPath);
    if (storageState.isDirectory()) {
      storageDataResult = true;
    } 
    return storageDataResult;
  } else {
    return storageDataResult;
  }
};
