/**
 * deletes a file if it exists.
 * Takes in directoryPath, fileName.
 */

const fsp = require('fs').promises;
const path = require('path');

const directoryExists = require('./directoryExists');
const fileExists = require('./fileExists');

module.exports = async function deleteFile(directoryPath, fileName){
  if (!directoryPath || !fileName){
    return {
      success: false,
      message: 'ERROR: both directoryPath and fileName are required.'
    }
  }

  let directory_exists = await directoryExists(directoryPath);
  let file_exists = await fileExists(directoryPath,fileName);

  if (!directory_exists) {
    return {
      success: false,
      message: `Directory does not exist: ${path.join(directoryPath)}`
    };
  }

  if (!file_exists) {
    return {
      success: false,
      message: `File does not exist: ${path.join(directoryPath,fileName)}`
    };
  }

  try {
    await fsp.unlink(path.join(directoryPath, fileName));
    return {
      success: true,
      message: `FILE deleted: ${path.join(directoryPath, fileName)}`
    };
  } catch (error) {
    return { success: false, message: error.toString() };
  }

}