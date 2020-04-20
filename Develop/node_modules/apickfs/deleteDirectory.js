/**
 * deletes a directory if it exists.
 * Takes in directoryPath, recursive is true by default.
 */

const fsp = require('fs').promises;
const path = require('path');

const directoryExists = require('./directoryExists');

module.exports = async function deletDirectory(directoryPath,recursive=true){
  if (!directoryPath){
    return {
      success: false,
      message: 'ERROR: directoryPath is required.'
    }
  }

  let directory_exists = await directoryExists(directoryPath);

  if (!directory_exists) {
    return {
      success: false,
      message: `Directory does not exist: ${path.join(directoryPath)}`
    };
  }

  try {
    await fsp.rmdir(directoryPath, { recursive: recursive });
    return {
      success: true,
      message: `Directory deleted: ${path.join(directoryPath)}${recursive ? ' recursively.' : '.'}`
    };
  } catch (error) {
    return { success: false, message: error.toString() };
  }

}