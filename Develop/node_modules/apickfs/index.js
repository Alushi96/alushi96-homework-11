const storageHander = require('./storageHandler');
const writeStorage = require('./writeStorage');
const removeStorage = require('./removeStorage');
const readStorage = require('./readStorage');
const fileOrFolderExists = require('./fileOrFolderExists');
const removeStorageRecursively = require('./removeStorageRecursively');
const getLinesCount = require('./getLinesCount');
const readByLineNumbers = require('./readByLineNumbers');
const writeLines = require('./writeLines');
const fileExists = require('./fileExists');
const directoryExists = require('./directoryExists');
const fileExistsSync = require('./fileExistsSync');
const directoryExistsSync = require('./directoryExistsSync');
const openDirectory = require('./openDirectory');
const openFile = require('./openFile');
const writeFile = require('./writeFile');
const deleteFile = require('./deleteFile');
const deleteDirectory = require('./deleteDirectory');
const writeDirectory = require('./writeDirectory');
const getDirectoryEntries = require('./getDirectoryEntries');

const apickStorageManager = require('./apickFS');

module.exports = apickStorageManager // whole apickFS

//Exporting individual functions for supporting treeShaking. Prefer importing individual 

//Async
//Files specific
module.exports.fileExists = fileExists
module.exports.openFile = openFile //it will create new file but never overwrite existing file.
module.exports.writeFile = writeFile; // writeFile will create new file; but overwirte it if it exists
module.exports.deleteFile = deleteFile; // deleteFile will delete the file if it exists
module.exports.writeLines = writeLines
module.exports.getLinesCount = getLinesCount
module.exports.readByLineNumbers = readByLineNumbers

//Directory specific
module.exports.directoryExists = directoryExists
module.exports.openDirectory = openDirectory
module.exports.deleteDirectory = deleteDirectory 
module.exports.getDirectoryEntries = getDirectoryEntries
module.exports.writeDirectory = writeDirectory

// Low level 
module.exports.storageHander = storageHander
module.exports.fileOrFolderExists = fileOrFolderExists
module.exports.removeStorageRecursively = removeStorageRecursively
module.exports.removeStorage = removeStorage
module.exports.writeStorage = writeStorage
module.exports.readStorage = readStorage


//Sync
module.exports.directoryExistsSync = directoryExistsSync
module.exports.fileExistsSync = fileExistsSync