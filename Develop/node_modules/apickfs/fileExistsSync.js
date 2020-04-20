const fs = require('fs');
const path = require('path');

module.exports =  function fileExistsSync(directoryPath, fileName) {
  let directoryExists = fs.existsSync(directoryPath);
  return !fileName || !directoryExists
      ? false
      :  fs.existsSync(path.join(directoryPath, fileName));
}