const path = require('path');
const writeStorage = require('./writeStorage')
const directoryExists = require('./directoryExists')
const fileExists = require('./fileExists')

module.exports = async function openFile(
  directoryPath,
  fileName = null
) {

  if (!directoryPath || !fileName) {
    return {
      success: false,
      message: 'ERROR: Both directoryPath and filename are required parameters.'
    }
  }

  try {
    const dExists = await directoryExists(directoryPath);
    const fExists = await fileExists(directoryPath,fileName);
  
    if (dExists && fExists) {
      return {
        success: true,
        message: `SUCCESS: ${path.join(directoryPath, fileName)} exists.`
      };
    } else {
      await writeStorage( path.join(directoryPath),fileName)
      return { success: true, message: `SUCCESS: ${path.join(directoryPath, fileName)} created.`};
    }
  } catch (error) {
    return { success: false, message: error.toString() };
  }
}