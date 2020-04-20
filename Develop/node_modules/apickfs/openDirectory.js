const writeStorage = require('./writeStorage')
const directoryExists = require('./directoryExists')

// if directory exists then returns true; else creates one and returns true.
module.exports = async function openDirectory(directoryPath) {
  const exists = await directoryExists(directoryPath);

  if (exists) {
    return {
      success: true,
      message: `SUCCESS: ${directoryPath} already exists.`
    };
  } else {
    try {
       const status =  await writeStorage(directoryPath)
       return status;
    } catch (err) {
      return {
        success: false,
        message: err.toString()
      }
    }
  } 
};


