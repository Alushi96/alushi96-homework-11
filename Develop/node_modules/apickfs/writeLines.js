const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const getLinesCount = require('./getLinesCount');

const directoryExistsSync = require('./directoryExistsSync');
const fileExistsSync = require('./fileExistsSync');

const directoryExists = require('./directoryExists');
const fileExists = require('./fileExists');

/**
 * Writes a line or several lines to the end of the file.
 * @param {string} directoryPath full path to the directory.
 * @param {string} fileName Name of the file with extension.
 * @param <data or array of data> data can be a string, an object or an array. If its an object or an array, it will be parasd to a valid json. else it will be stored as a string.
 */
module.exports = async function writeLines(
  directoryPath,
  fileName,
  data
) {

  if (!directoryPath || !fileName){
    return {
      success: false,
      message: 'Writelines expects both, a valid directory path and a file name.'
    }
  }

  if (!data ) {
    return {
      success: false,
      message: 'No data provided.'
    }
  }

  let arrayOfLinesofData=[];
  if (!Array.isArray(data)){
    arrayOfLinesofData.push(data)
  } else {
    arrayOfLinesofData = [...data]
  }

  let directory_exists = await directoryExists(directoryPath);
  let file_exists = await fileExists(directoryPath,fileName);

  if (!directory_exists) {
    return {
      success: false,
      message: `Error: ${directoryPath} doesnot exist.`
    };
  } 
  
  if (directory_exists && !file_exists) {
    return {
      success: false,
      message: `Error: ${path.join(directoryPath, fileName)} doesnot exist.`
    };
  } 
  

    // let filehandle;
    try {
      const fullFilePath = path.join(directoryPath, fileName);
      // filehandle = await fsp.open(fullFilePath, 'a');

      let linesCount = await getLinesCount(directoryPath, fileName);
      arrayOfLinesofData.forEach( async (data, index) => {
        console.log('data ', data);

        if (linesCount && linesCount.data > 0){
          await fsp.appendFile(fullFilePath, `\r\n${parsedData(data)}`);
        } else {
          if(index === 0){
            await fsp.appendFile(fullFilePath, `${parsedData(data)}`);
          } else {
            await fsp.appendFile(fullFilePath, `\r\n${parsedData(data)}`);
          }
        }
      });
      return {
        success: true,
        message: `SUCCESS: ${arrayOfLinesofData.length} lines successfully written to ${fileName}.`
      };
    } catch (error) {
      return {
        success: false,
        message: error.toString()
      };
    } finally {
      // if (filehandle !== undefined) await filehandle.close();
    }

};

function parsedData(fileData) {
  try {
    if (typeof fileData === 'object') {
      fileData = JSON.stringify(fileData);
    }
    return fileData;
  } catch (error) {
    return fileData;
  }
}
