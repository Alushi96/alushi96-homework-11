const fsp = require('fs').promises;
const path = require('path');
const fileOrFolderExists = require('./fileOrFolderExists');

module.exports = async function removeStorage(
  directoryPath,
  fileName = null,
  recursive = false
) {
  let directoryExists = false;
  let fileExists = false;

  directoryExists = await fileOrFolderExists(directoryPath);

  if (fileName) {
    fileExists = await fileOrFolderExists(path.join(directoryPath, fileName));
  }

  if (directoryPath) {
    if (directoryExists) {
      if (fileName && fileExists) {
        try {
          await fsp.unlink(path.join(directoryPath, fileName));
          return {
            success: true,
            message: `FILE deleted: ${path.join(directoryPath, fileName)}`
          };
        } catch (error) {
          return { success: false, message: error.toString() };
        }
      } else {
        try {
          await fsp.rmdir(directoryPath, { recursive: recursive });
          return {
            success: true,
            message: `DIRECTORY deleted : ${directoryPath}`
          };
        } catch (e) {
          return { success: false, message: e.toString() };
        }
      }
    } else {
      return {
        success: false,
        message: 'Error: Directory doesnot exist. nothing to remove.'
      };
    }
  } else {
    return {
      success: false,
      message: 'Error: A valid directory path is required.'
    };
  }
};
