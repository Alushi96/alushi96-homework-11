/**
 * Create new file and overwrite it if it exists.
 * Takes in directoryPath, fileName, and optionally file data.
 */

const fsp = require('fs').promises;
const path = require('path');
const fileOrFolderExists = require('./fileOrFolderExists');

const directoryExists = require('./directoryExists');
const fileExists = require('./fileExists');

module.exports = async function writeFile(directoryPath, fileName, fileData=''){

  if (!directoryPath || !fileName){
    return {
      success: false,
      message: 'ERROR: both directoryPath and fileName are required.'
    }
  }

  if (fileData) {
    if (typeof fileData === 'object') {
      fileData = JSON.stringify(fileData);
    }
  }

  let directory_exists = await directoryExists(directoryPath);

  if (!directory_exists){
    try {
      await fsp.mkdir(directoryPath, {recursive: true});
    } catch (error) {
      return {
        success: false,
        message: error.toString()
      }
    }
  }

  try {
    await fsp.writeFile(path.join(directoryPath,fileName),fileData);
    return {
      success: true,
      message: `Success: ${path.join(directoryPath,fileName)} successfully created/overwritten.`
    }
  } catch (error) {
    return {
      success: false,
      message: error.toString()
    }
  }
}
