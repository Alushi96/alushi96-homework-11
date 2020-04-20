/**
 * library to read store and edit data
 */

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
const getDirectoryEntries = require('./getDirectoryEntries');
const writeDirectory = require('./writeDirectory');

const apickJsonDb = {};

/**
 * Writes a line or several lines to the end of the file.
 * @param {string} directoryPath full path to the directory.
 * @param {string} fileName Name of the file with extension.
 * @param <data or array of data> data can be a string, an object or an array. If its an object or an array, it will be parasd to a valid json. else it will be stored as a string.
 */
apickJsonDb.writeLines = writeLines;

/**
 * returns a promise that resolves into total number of lines in the file.
 * @param {string} directoryPath full path to the directory.
 * @param {string} fileName Name of the file with extension.
 */
apickJsonDb.getLinesCount = getLinesCount;

/**
 * returns a promise that resolves into an object with following items:
 * success: true/fase.
 * message: a freidly success/failure message.
 * data: array of lines.
 * @param {string} directoryPath full path to the directory.
 * @param {string} fileName Name of the file with extension.
 * @param {array} lineNumbers Array of line numbers that we want to read.
 */
apickJsonDb.readByLineNumbers = readByLineNumbers;

/**
 * returns a promise that resolves into true if it exists and false if it doesnot exist.
 * @param {string} storagePath full path to the file or directory. if file please include extension.
 */
apickJsonDb.fileOrFolderExists = fileOrFolderExists;

/**
 * returns a promise that resolves into a object with two fields exists and type
 * exists will be true if it exists
 * type will be 'file' for file or 'directory' for directory else null.
 * @param {string} storagePath full path to the file or directory. if file please include extension.
 */
apickJsonDb.storageHander = storageHander;

/**
 * if filename is provided and it exists then data sent is null then the file will made empty.
 * dont send filename or set it to null if you dont want to touch the file
 * @param {string} directoryPath full path to directory
 * @param {string} fileName filename with extension; optional; default null
 * @param {any} fileData file data; optional; default null
 *
 * Example :
 * writeStorage(path.join(__dirname, 'zoo4'), 'copy4_1.txt', JSON.stringify({hello:'world'}))
 * .then(data => {
 *   console.log(data);
 * })
 * .catch(e => {
 *   console.log(e);
 * });
 *
 * ** NOTE ** : if you are trying to store JSON, you must use JSON.stringify to stringify the JSON DATA else it will be coerced to [object object]
 *
 */
apickJsonDb.writeStorage = writeStorage;

/**
 * @param {string} storagePath full path of directory or file including extension for files
 * @param {boolean} recursive optional. set to true if we need to delete recursively.
 * returns a promise
 * example usage:
 * removeStorage(path.join(__dirname, 'zoo copy 5'), true)
 *   .then(data => {
 *     console.log(data);
 *   })
 *   .catch(e => {
 *     console.log(e);
 *   });
 */
apickJsonDb.removeStorage = removeStorage;

/**
 * The directory and its content will be deleted recursively.
 * @param {*} directoryPath full path to directory.
 */
apickJsonDb.removeStorageRecursively = removeStorageRecursively;

/**
 * @param {*} directoryPath full path to directory.
 * @param {*} fileName filename with extension.
 *
 * readStorage(path.join(__dirname), 'post.json')
 * .then(d => {
 *   console.log(d.data.topping);
 * })
 * .catch(e => {
 *   console.log(e);
 * });
 */

apickJsonDb.readStorage = readStorage; // depriciated and will be removed in favour of readFile. the name readStorage is a bit confusing.
apickJsonDb.readFile = readStorage;

apickJsonDb.fileExistsSync = fileExistsSync; // just returns true or false
apickJsonDb.directoryExistsSync = directoryExistsSync; // just returns true or fase

apickJsonDb.fileExists = fileExists; // promise resolves to true or false
apickJsonDb.directoryExists = directoryExists; // promise resolves to true or false

apickJsonDb.openDirectory = openDirectory; // if exists returns success:true, else creates one and returns success:ture with a user friendly message.
apickJsonDb.openFile = openFile;

apickJsonDb.writeFile = writeFile;
apickJsonDb.deleteFile = deleteFile;

apickJsonDb.deleteDirectory = deleteDirectory;
apickJsonDb.getDirectoryEntries = getDirectoryEntries;
apickJsonDb.writeDirectory = writeDirectory;

module.exports = apickJsonDb;
