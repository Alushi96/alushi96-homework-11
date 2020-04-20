const fsp = require('fs').promises;
const fileOrFolderExists = require('apickfs/fileOrFolderExists');
const path = require('path');
const directoryExists = require('./directoryExists')


module.exports = async function fileExists(directoryPath,fileName) {
  let storageDataResult = false;
  const directory_exists = await directoryExists(directoryPath);

  if (directory_exists) {
      const fileExists = await fileOrFolderExists(path.join(directoryPath,fileName));
      if (fileExists) {
        const fileType = await fsp.stat(path.join(directoryPath,fileName));
        if(fileType.isFile()){
          storageDataResult = true;
        } else {
          console.log(`fileExists:  ${path.join(directoryPath,fileName)} is not a file.`)
        }
      } else {
        console.log(`fileExists:  ${path.join(directoryPath,fileName)} is doesnot exist.`);
      }
} else {
  console.log(`fileExists: ${directoryPath} doesnot exist...`);
}

return storageDataResult;

}
