const fs = require('fs');
const path = require('path');
const readline = require('readline');
const directoryExistsSync = require('./directoryExistsSync');
const fileExistsSync = require('./fileExistsSync');

/**
 * returns a promise that resolves into total number of lines in the file.
 * @param {string} directoryPath full path to the directory.
 * @param {string} fileName Name of the file with extension.
 */
module.exports =  function getLinesCount(directoryPath, fileName) {

  if (!directoryPath || !fileName){
    return {
      success: false,
      message: 'both directory path and filename are required.',
      data: null
    }
  }

  let directoryExists = false;
  let fileExists = false;

  const resultObject = {
    success: false,
    message: '',
    data : null,
  };

  try {
    directoryExists = directoryExistsSync(directoryPath);
  } catch (error) {
      console.error(error)
  }

  try {
    fileExists = fileExistsSync(directoryPath, fileName);
  } catch (error) {
    console.error(error);
  }

  return new Promise(function(resolve,reject){
    
    if (!directoryExists) {
      resolve( {
        success: false,
        message: `Error: ${directoryPath} doesnot exist.`,
        data: null

      });
    } else if (directoryExists && !fileExists) {
      resolve ({
        success: false,
        message: `Error: ${path.join(directoryPath, fileName)} doesnot exist.`,
        data: null
      });
    } else if (directoryExists && fileExists) {

    try {
      const fullFilePath = path.join(directoryPath, fileName);
      // actual reading of line
      const readableStream =  fs.createReadStream(fullFilePath);

      const rl = readline.createInterface({
        input: readableStream,
        crlfDelay: Infinity,
      })

      let index = 0;

      rl.on('line',function(){
        index++;
      });

      rl.on('error', reject)

      readableStream.on('end', function(){
        rl.close()
        readableStream.close()

        resultObject.success = true;
        resultObject.message = `SUCCESS: ${fullFilePath} has total ${index} lines.`  
        resultObject.data = index;

        resolve(resultObject);
      })
    } catch (error) {
      resolve({
        success: false,
        message: `ERROR: ${error.toString()}`,
        data: null
      })
    }
      }
    })
};
