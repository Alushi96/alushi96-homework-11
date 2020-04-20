const removeStorage = require('./removeStorage');

module.exports = async function removeStorageRecursively(directoryPath) {
  try {
    await removeStorage(directoryPath,null,true)
    return {
      success: true,
      message: `SUCCESS: ${directoryPath} removed successfully.`
    }
  } catch (error) {
    return {
      success: false,
      message: error.toString()
    }
  }
};
