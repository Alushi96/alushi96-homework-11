const fsp = require('fs').promises;
const fileOrFolderExists = require('./fileOrFolderExists');

module.exports = async function storageHander(storagePath) {
  const storageDataResult = {
    exists: false,
    type: null
  };
  const storageExists = await fileOrFolderExists(storagePath);
  if (storageExists) {
    storageDataResult.exists = true;
    const storageState = await fsp.stat(storagePath);
    if (storageState.isFile()) {
      storageDataResult.type = 'file';
    } else if (storageState.isDirectory()) {
      storageDataResult.type = 'directory';
    } else {
      storageDataResult.type = null; // not a file or a dictory, sufficient for now.
    }
    return storageDataResult;
  } else {
    return storageDataResult;
  }
};
