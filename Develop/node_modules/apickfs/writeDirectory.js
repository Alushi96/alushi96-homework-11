const fsp = require('fs').promises;
const directoryExists = require('./directoryExists');
const deleteDirectory = require('./deleteDirectory')

module.exports = async function writeDirectory( directoryPath ) {
  if (!directoryPath) {
    return {
      success: false,
      message: `A valid directoryPath is required to writeDirectory.`
    }
  }

  const directory_exists = await directoryExists(directoryPath);

  if (!directory_exists) {
    try {
      await fsp.mkdir(directoryPath, { recursive: true });
      return { success: true, message: `SUCCESS: ${ directoryPath} created.` };
    } catch (error) {
      return { success: false, message: error.toString() };
    } }
    else  {
    try {
        await deleteDirectory(directoryPath);
        await fsp.mkdir(directoryPath, {
          recursive: true
        })
      return {
        success: true,
        message: `SUCCESS: ${directoryPath} updated/overwritten.`
      };
    } catch (error) {
      return { success: false, message: error.toString() };
    }
  }
};
