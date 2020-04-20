const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * returns a promise that resolves into an object with following items:
 * success: true/fase.
 * message: a freidly success/failure message.
 * data: array of lines.
 * @param {string} directoryPath full path to the directory.
 * @param {string} fileName Name of the file with extension.
 * @param {array} lineNumbers Array of line numbers that we want to read.
 */
module.exports = function readByLineNumbers(
  directoryPath,
  fileName,
  lineNumbers
) {
  let directoryExists = false;
  let fileExists = false;

  if (lineNumbers && !Array.isArray(lineNumbers)) {
    let temp = [];
    temp.push(lineNumbers);
    lineNumbers = temp;
  }

  lineNumbers.sort();
  let lineNumbersLength = lineNumbers.length;
  let largestLineNumber = lineNumbers[lineNumbersLength - 1];

  const resultObject = {
    success: false,
    message: '',
    data: []
  };

  try {
    directoryExists = fs.existsSync(directoryPath);
  } catch (error) {
    return resolve({
      success: false,
      message: error.toString()
    });
  }

  try {
    fileExists =
      !fileName || !directoryExists
        ? false
        : fs.existsSync(path.join(directoryPath, fileName));
  } catch (error) {
    console.error(error);
  }

  return new Promise(function(resolve, reject) {
    if (!directoryExists) {
      resolve({
        success: false,
        message: `Error: ${directoryPath} doesnot exist.`
      });
    } else if (directoryExists && !fileExists) {
      resolve({
        success: false,
        message: `Error: ${path.join(directoryPath, fileName)} doesnot exist.`
      });
    } else if (directoryExists && fileExists) {
      const fullFilePath = path.join(directoryPath, fileName);
      // actual reading of line
      const readableStream = fs.createReadStream(fullFilePath);

      const rl = readline.createInterface({
        input: readableStream,
        crlfDelay: Infinity
      });

      let currentlineNumber = 0;
      let arrayIndex = 0;
      let currentLineNumberToSearch;

      rl.on('line', function(line) {
        currentlineNumber++;
        currentLineNumberToSearch = lineNumbers[arrayIndex];

        if (
          !currentLineNumberToSearch ||
          currentLineNumberToSearch < 0 ||
          currentLineNumberToSearch % 1 !== 0
        ) {
          resolve({
            success: false,
            message: `Error: ${fullFilePath} exists. But the lineNumber is invalid.`
          });
        }

        if (currentlineNumber === currentLineNumberToSearch) {
          resultObject.data.push(JSONData(line));
          arrayIndex++;

          if (currentLineNumberToSearch === largestLineNumber) {
            rl.close();
            readableStream.close();
            resultObject.success = true;
            resultObject.message = `SUCCESS: ${lineNumbersLength} lines successfully read from ${fullFilePath}.`;
            return resolve(resultObject);
          }
        }
      });

      readableStream.on('end', function() {
        resolve(outOfRangeError(fullFilePath, currentLineNumberToSearch));
      });
    }
  });
};

function JSONData(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return str;
  }
}

function outOfRangeError(filepath, lineNumber) {
  return {
    success: false,
    message: `Line number index ${lineNumber} does not exist in ${filepath}.`
  };
}
