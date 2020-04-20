const fs = require('fs');

module.exports =  function directoryExistsSync(directoryPath) {
  return fs.existsSync(directoryPath);
}