<h1 align="center">
  ApickFS
</h1>

<h3 align="center">
  Modern File Storage library for Nodejs v12.14.0 and above. 
</h3>
<p align="center">
  ApickFS is a free and open source File System library based on Node's fs.promises() that helps developers ditch callbacks and outdated depencencies.
</p>
<p align="center">
  <a href="https://github.com/apickjs/apickFS/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="apick is released under the MIT license." />
  </a>

  <a href="https://www.npmjs.com/package/apickfs">
    <img src="https://img.shields.io/npm/v/apickfs.svg" alt="Current npm package version." />
  </a>

  <a href="https://www.linkedin.com/in/vivmagarwal/">
    <img src="https://img.shields.io/badge/linkedin-in-blue?label=Follow%20@vivmagarwal" alt="Follow @vivmagarwal" />
  </a>

  <a href="https://twitter.com/intent/follow?screen_name=vivmagarwal">
    <img src="https://img.shields.io/twitter/follow/vivmagarwal.svg?label=Follow%20@vivmagarwal" alt="Follow @apickjs" />
  </a>
</p>
<br>

## 🎓 Learning ApickFS

Full documentation for ApickFS lives [on the website](https://apickjs.github.io/apickFS/#/README).

<br>

## 🧩 Why ApickFS:

- **Based on cutting edge fs.promises**
- **Async Awiat based code**
- **No outdated dependencies**
- **Utilising latest features of Nodejs 12.14.0 Long Term released**
- **Minimal base library**
- **Easy to extend**
- **Easy to read source code**
- **Automatic JSON parsing**
- **Auto Subdirectory creation**

<br>

## 🎰 Available Methods:

*Please click on the below method names to go to the documentation of that function*

**File opeations**

- [fileExists()](https://apickjs.github.io/apickFS/#/README?id=fileexists)
- [fileExistsSync()](https://apickjs.github.io/apickFS/#/README?id=fileexistssync)
- [readByLineNumbers()](https://apickjs.github.io/apickFS/#/README?id=readbylinenumbers)
- [getLinesCount()](https://apickjs.github.io/apickFS/#/README?id=getlinescount)
- [writeLines()](https://apickjs.github.io/apickFS/#/README?id=writelines)
- [deleteFile()](https://apickjs.github.io/apickFS/#/README?id=deletefile)
- [openFile()](https://apickjs.github.io/apickFS/#/README?id=openfile)
- [writeFile()](https://apickjs.github.io/apickFS/#/README?id=writefile)

**Directory operations**

- [directoryExists()](https://apickjs.github.io/apickFS/#/README?id=directoryexists)
- [directoryExistsSync()](https://apickjs.github.io/apickFS/#/README?id=directoryexistssync)
- [getDirectoryEntries()](https://apickjs.github.io/apickFS/#/README?id=getdirectoryentries)
- [deleteDirectory()](https://apickjs.github.io/apickFS/#/README?id=deletedirectory)
- [openDirectory()](https://apickjs.github.io/apickFS/#/README?id=opendirectory)
- [writeDirectory()](https://apickjs.github.io/apickFS/#/README?id=writedirectory)

**Low level functions**

- [fileOrFolderExists()](https://apickjs.github.io/apickFS/#/README?id=fileorfolderexists)
- [readStorage()](https://apickjs.github.io/apickFS/#/README?id=readstorage)
- [removeStorage()](https://apickjs.github.io/apickFS/#/README?id=removestorage)
- [removeStorageRecursively()](https://apickjs.github.io/apickFS/#/README?id=removestoragerecursively)
- [storageHandler()](https://apickjs.github.io/apickFS/#/README?id=storagehandler)
- [writeStorage()](https://apickjs.github.io/apickFS/#/README?id=writestorage)

## Important Notes

- ApickFS requires Node 12.14.0 LTS
- Feel free to create a github issue if required.
- It will be great if every Pull request is accompanied by a github issue.

## Install and Include

**Install the ApickFS file Storage.**

```shell
npm i apickfs

```

**Make sure that you are using Nodejs `v12.14.0` or above.**

Check your node version now:

```shell
node -v
```

In case you need to manage different verions of Node in your system, we strongy reccoment [NVM](https://github.com/nvm-sh/nvm)

**Including required methods in your file**

```javascript
const { writeFile, deleteFile, deleteDirectory, getDirectoryEntries } = require('apickfs');
```

You can just include the name of the method that you need. Incase you prefer to include the whole library you can do that too.

```javascript
const apickFileStorage = require('apickfs');
```

In case you decide to include the whole library, you can use any apickFS method using a **.** (dot)

```javascript
apickFileStorage.writeFile();
apickFileStorage.deleteFile();
apickFileStorage.deleteDirectory();
apickFileStorage.getDirectoryEntries();
```

## **Methods for file operations**

### fileExists()

**Arguments**: directoryPath , fileName
<br/>
**Result**: a promise that resolves into `true` if file exists and `false` if it doesnot exist.
<br/>
**Example**:

```javascript
  { fileExists } = require('apickfs');
```

Inside an Async Function :

```javascript
const {
  const my_file_exists = await fileExists(__dirname, 'my-file.json');
  console.log(my_file_exists);
```

Inside a normal Function :

```javascript
fileExists(__dirname, 'my-file.json')
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

**Why differnt arguments for filename and directory path?**
<br>
At several occassions we need to loop over several files in a particular directory. This approach make it a bit flexible in those use cases. And also we have tried to keep the API consistent.

<br>

### fileExistsSync()

**Arguments**
<br>
directoryPath, fileName

**Result**
<br>
`true` if file exist and `false` if it doesnot exist.

**Examples**
<br>

```javascript
const { fileExistsSync } = require('apickfs');
```

```javascript
const file_exists = fileExistsSync(__dirname, 'my-file.txt');
console.log(file_exists);
```

### readByLineNumbers()

Reads the particular line number from a file. In case it's valid JSON file, its automatically parsed to an Object or an Array. We can provide an array of line numbers to read multiple lines at a time.
**Arguments**
<br>

```javascript
const { readByLineNumbers } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath** required, path to directory
2. **fileName** required, file name
3. **lineNumbers** required, the line number or the array of line numbers you want to read.

**Result**
<br>
**apickFS result object** <br>
**succss**: ture/false <br>
**message**: A descriptive message.
**data**; An array of lines read from the file.

**Examples**
<br>

<!-- tabs:start -->

#### ** Async Function **

```javascript
const myData = await readByLineNumbers(__dirname, 'my-file.txt', 10);
console.log(myData);
```

```javascript
const myData = await readByLineNumbers(__dirname, 'my-file.txt', [1, 3]);
console.log(myData);
```

#### ** Normal Function **

```javascript
readByLineNumbers(__dirname, 'some-file-name.txt', 10)
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

#### ** success response **

```javascript
{
  success: true,
  message: 'SUCCESS: 1 lines successfully read from /Users/vivek/practice-apps/apickdb/my-file.txt.',
  data: [ { hello: 'world' } ]
}
```

```javascript
{
  success: true,
  message: 'SUCCESS: 2 lines successfully read from /Users/vivek/practice-apps/apickdb/my-file.txt.',
  data: [ { hello: 'world' }, { hello: 'world' } ]
}
```

#### ** fail response **

```javascript
{
  success: false,
  message: 'Line number index 10 does not exist in /Users/vivek/practice-apps/apickdb/some-file-name.txt.'
}
```

<!-- tabs:end -->

### getLinesCount()

Returns a promise that resolves into the total number of lines in the provided file.

**Import**
<br>

```javascript
const path = require('path');
const { getLinesCount } = require('apickfs');
```

**Arguments**
<br>

1. **directoryName**: required, string, directory path
2. **fileName**: required, string, filename

**Result**
<br>
A promise that resolves into an integer of total number of lines in the provided file.

**Examples**
<br>

<!-- tabs:start -->

#### ** Async Function **

```javascript
const linesCount = await getLinesCount(path.join(__dirname, 'bigdata'), 'big.txt');
console.log(linesCount);
```

#### ** Normal Function **

```javascript
getLinesCount(path.join(__dirname, 'some-folder'), 'my-file.txt')
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

#### ** Example success response **

```javascript
{
  success: true,
  message: 'SUCCESS: /Users/vivek/practice-apps/apickdb/bigdata/big.txt has total 163845 lines.',
  data: 163845
}
```

#### ** Example fail response **

```javascript
{
  success: false,
  message: 'Error: /Users/vivek/practice-apps/apickdb/bigdataxxx doesnot exist.'
}
```

<!-- tabs:end -->

### writeLines()

Write a line or several lines to the end of the file.

**Import**
<br>

```javascript
const { writeLines } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**: required, string, path to the directory.
2. **fileName**: required, string, filename with extension.
3. **LinesofData**: line of data or an array of lines of data.

**Result**
<br>
**apickFS result object** <br>
**succss**: ture/false <br>
**message**: A descriptive message.

**Examples**
<br>

<!-- tabs:start -->

#### ** Async Function **

Example 1.

```javascript
let writestatus = await writeLines(path.join(__dirname, 'some-folder'), 'my-file.txt', [
  'Hello Javascript',
  { Hello: 'node' }
]);
console.log(writestatus);
```

Example 2.

```javascript
let writestatus = await writeLines(path.join(__dirname), 'my-file.txt', 'Hello Javascript');
console.log(writestatus);
```

Example 3.

```javascript
let writestatus = await writeLines(path.join(__dirname), 'my-file.txt', { hello: 'hello' });
console.log(writestatus);
```

#### ** Normal Function **

```javascript
writeLines(path.join(__dirname), 'my-file.txt', { hello: 'hello' })
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

#### ** Example success response **

```javascript
{
  success: true,
  message: 'SUCCESS: 2 lines successfully written to my-file.txt.'
}
```

#### ** Example fail response **

```javascript
{
  success: false,
  message: 'Error: /Users/vivek/practice-apps/brad-cli/apickdb/my-file.txtxx doesnot exist.'
}
```

<!-- tabs:end -->

### deleteFile()

Deletes the file if it exists.

**Import**
<br>

```javascript
const { deleteFile } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath** required, string, path of the directory.
2. **fileName** required, string, name of the file.

**Result**
<br>
**apickFS result object** <br>
**succss**: ture/false <br>
**message**: A descriptive message.

**Examples**
<br>

<!-- tabs:start -->

#### ** Async Function **

```javascript
let delstat = await deleteFile((__dirname, 'some-folder'), 'my-file.txt');
console.log(delstat);
```

#### ** Normal Function **

```javascript
deleteFile(__dirname, 'todelete.txt')
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

#### ** Example success response **

```javascript
  {
    success: true,
    message: 'FILE deleted: /Users/vivek/practice-apps/brad-cli/apickdb/todelete.txt'
  }
```

#### ** Example fail response **

```javascript
  { success: false, message: 'Directory does not exist: some-folder' }
```

<!-- tabs:end -->

### openFile()

Open file just returns an apickResultObject with success: `true` if the file exists. It created on if
it doesnot exists. It **never overwrites** an existing file.
<br>

On the other hand `writeFile()` creates the file if it doesnot exist, but **overwrites** it in case it exists.

<br>

Unlike node's native open method, apickFS.openFile() doesnot return a fileHandle. We have special methods to like `writeLine` to open and add data to files. In most of the cases, you will be using openFile() most of the times.

**Import**
<br>

```javascript
const { openFile } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**: required, string, path to the directory of the file.
2. **fileName**: required, string, name of the file.

**Result**
<br>
**apickFS result object** <br>
**succss**: ture/false <br>
**message**: A descriptive message.

**Examples**
<br>

<!-- tabs:start -->

#### ** Async Function **

```javascript
let openstat = await openFile(path.join(__dirname), 'my-file1.txt');
console.log(openstat);
```

#### ** Normal Function **

```javascript
openFile(path.join(__dirname), 'my-file1.txt')
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

#### ** Example success response **

```javascript
{
  success: true,
  message: 'SUCCESS: /Users/vivek/practice-apps/brad-cli/apickdb/my-file.txt exists.'
}
```

```javascript
{
  success: true,
  message: 'SUCCESS: /Users/vivek/practice-apps/brad-cli/apickdb/my-file1.txt created.'
}
```

#### ** Example fail response **

```javascript
{
  success: false,
  message: 'ERROR: Both directoryPath and filename are required parameters.'
}
```

<!-- tabs:end -->

### writeFile()

Write file creates a new file if it doesnot exist. It takes in optional data as well.
Incase the file already exists, it complelely **overwrites** it with the new data. In case
new data is not provided, the existing file is **replaced** with an empty new file.

<br>

`writeFile()` acts differently from `openFile()` when the file already exists.
Open file never overwrites data
whereas writeFile file **overwrites** the content of the file.

<br>

Just like most of the apickFS functions, it too parses valid Objects and Arrays to JSON by default.

<br>

**Import**
<br>

```javascript
const { writeFile } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**: required, string, path to the files directory.
2. **fileName**: required, string, filename
3. **fileData**: optional, String/Object/Array, the data for file.

**Result**
<br>
**apickFS result object** <br>
**succss**: ture/false <br>
**message**: A descriptive message.

**Examples**
<br>

<!-- tabs:start -->

#### ** Async Function **

```javascript
let writestat = await writeFile(path.join(__dirname), 'to-overwrite.txt', { hello: 'world' });
console.log(writestat);
```

#### ** Normal Function **

```javascript
writeFile(path.join(__dirname), 'to-overwrite.txt', { hello: 'world' })
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

#### ** Example success response **

```javascript
{
  success: true,
  message: 'Success: /Users/vivek/practice-apps/brad-cli/apickdb/to-overwrite.txt successfully created/overwritten.'
}
```

<!-- tabs:end -->

## **Methods for directory ops**

### directoryExists()

Returns a promise that resolves to true if the directory exists else it resolves to false.

**Import**
<br>

```javascript
const { directoryExists } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**: required, String, path to the directory.

**Result**
<br>
`true`/`false`

**Examples**
<br>

<!-- tabs:start -->

#### ** Async Function **

```javascript
let dirstat = await directoryExists(path.join(__dirname));
console.log(dirstat);
```

#### ** Normal Function **

```javascript
directoryExists(path.join(__dirname))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

#### ** Example success response **

`true`

#### ** Example fail response **

`false`

<!-- tabs:end -->

### directoryExistsSync()

Returns `true` if the directory exists and `false` in case it doesnot exist.

**Import**
<br>

```javascript
const { directoryExistsSync } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**: required, String, Path to the directory

**Result**
<br>
`true`/`false`

**Examples**
<br>

<!-- tabs:start -->

#### ** Normal Function **

```javascript
let dirStat = directoryExistsSync(path.join(__dirname, 'data'));
console.log(dirStat);
```

#### ** Example success response **

`true`

#### ** Example fail response **

`false`

<!-- tabs:end -->

### getDirectoryEntries()

Recursively lists all the directories and files inside the given directory. Provides us output in several formats depending on the options provided.

**Import**
<br>

```javascript
const { getDirectoryEntries } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**: required, String, path to the directory.
2. **options**: optional, Object
   - **maxLevel**: integer, default:0(Unlimited)
   - **listFiles**: boolean, default:`true`
   - **listDirectories**: boolean, default:`true`
   - **getFullPath**:boolean, default:`true`
   - **ignoreEmptyExtension**: boolean, default:`false`
   - **mustHaveExtensions**: Array of String, default:`[]`
   - **mustNotHaveExtensions**: Array of String, default:`[]`
   - **mustStartWith**: Array of String, default:`[]`
   - **mustNotStartWith**: Array of String, default:`[]`
   - **mustInclude**: Array of String, default:`[]`
   - **mustNotInclude**: Array of String, default:`[]`
   - **extraDetails**: boolean, default:`false`

**Result**
<br>
Array of `string` or Array of `Object` depnding on the options provided.

**Examples**
<br>

#### Example to list just files

<!-- tabs:start -->

#### ** Example Code **

```javascript
let direntries = await getDirectoryEntries(__dirname, { listDirectories: false, getFullPath: false });
console.log(direntries);
```

#### ** Example Response **

```javascript
[
  '.DS_Store',
  'index.js',
  'index2.js',
  'my-file.txt',
  'to-overwrite.txt',
  '.data.db',
  'nestedarray.json',
  'nesteobj.json',
  'colors.json',
  'app.js',
  'post.json',
  'fileOrFolderExists.js',
  'big 4.txt',
  'big 2.txt',
  'big 3.txt',
  'big.txt',
  'my-file1.txt'
];
```

<!-- tabs:end -->

#### Example to get full path

<!-- tabs:start -->

#### ** Example Code **

```javascript
let direntries = await getDirectoryEntries(__dirname, { listDirectories: false });
console.log(direntries);
```

#### ** Example Response **

```javascript
[
  '/Users/vivek/practice-apps/brad-cli/apickdb/.DS_Store',
  '/Users/vivek/practice-apps/brad-cli/apickdb/index.js',
  '/Users/vivek/practice-apps/brad-cli/apickdb/index2.js',
  '/Users/vivek/practice-apps/brad-cli/apickdb/my-file.txt',
  '/Users/vivek/practice-apps/brad-cli/apickdb/to-overwrite.txt',
  '/Users/vivek/practice-apps/brad-cli/apickdb/.db-kittens/kittens/.data.db',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/nestedarray.json',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/nesteobj.json',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/colors.json',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/app.js',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/post.json',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/fileOrFolderExists.js',
  '/Users/vivek/practice-apps/brad-cli/apickdb/bigdata/big 4.txt',
  '/Users/vivek/practice-apps/brad-cli/apickdb/bigdata/big 2.txt',
  '/Users/vivek/practice-apps/brad-cli/apickdb/bigdata/big 3.txt',
  '/Users/vivek/practice-apps/brad-cli/apickdb/bigdata/big.txt',
  '/Users/vivek/practice-apps/brad-cli/apickdb/my-file1.txt'
];
```

<!-- tabs:end -->

#### Example to get just Json files

<!-- tabs:start -->

#### ** Example Code **

```javascript
let direntries = await getDirectoryEntries(__dirname, { listDirectories: false, mustHaveExtensions: ['json'] });
console.log(direntries);
```

#### ** Example Response **

```javascript
[
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/nestedarray.json',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/nesteobj.json',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/colors.json',
  '/Users/vivek/practice-apps/brad-cli/apickdb/data/post.json'
];
```

<!-- tabs:end -->

#### Get some Extra details

<!-- tabs:start -->

#### ** Example Code **

```javascript
(async () => {
  let direntries = await getDirectoryEntries(__dirname, {
    listDirectories: false,
    mustHaveExtensions: ['json'],
    extraDetails: true
  });
  console.log(direntries);
```

#### ** Example Response **

```javascript
[
  {
    type: 'file',
    level: 3,
    fullPath: '/Users/vivek/practice-apps/brad-cli/apickdb/data/nestedarray.json',
    extension: 'json',
    parent: '/Users/vivek/practice-apps/brad-cli/apickdb/data'
  },
  {
    type: 'file',
    level: 3,
    fullPath: '/Users/vivek/practice-apps/brad-cli/apickdb/data/nesteobj.json',
    extension: 'json',
    parent: '/Users/vivek/practice-apps/brad-cli/apickdb/data'
  },
  {
    type: 'file',
    level: 4,
    fullPath: '/Users/vivek/practice-apps/brad-cli/apickdb/data/colors.json',
    extension: 'json',
    parent: '/Users/vivek/practice-apps/brad-cli/apickdb/data'
  },
  {
    type: 'file',
    level: 4,
    fullPath: '/Users/vivek/practice-apps/brad-cli/apickdb/data/post.json',
    extension: 'json',
    parent: '/Users/vivek/practice-apps/brad-cli/apickdb/data'
  }
];
```

<!-- tabs:end -->

#### Get whose name starts with '.' or 'big'

<!-- tabs:start -->

#### ** Example Code **

```javascript
let direntries = await getDirectoryEntries(__dirname, {
  listDirectories: false,
  getFullPath: false,
  mustStartWith: ['.', 'big']
});
console.log(direntries);
```

#### ** Example Response **

```javascript
['.DS_Store', '.data.db', 'big 4.txt', 'big 2.txt', 'big 3.txt', 'big.txt'];
```

<!-- tabs:end -->

#### Example to get just directories

<!-- tabs:start -->

#### ** Example Code **

```javascript
let direntries = await getDirectoryEntries(__dirname, {
  listFiles: false,
  getFullPath: false
});
console.log(direntries);
```

#### ** Example Response **

```javascript
['t2', '.db-kittens', 'kittens', 'data', '.data', 'bigdata'];
```

<!-- tabs:end -->

### deleteDirectory()

Recursively deletes a directory and its contents. In case you want to stop it from deleting if the directory has some content the pass `false` as second argument.

**Import**
<br>

```javascript
const { deleteDirectory } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**: required, string
2. **recursive**: optional, boolean, default=`true`

**Result**
<br>
**apickFS result object** <br>
**succss**: ture/false <br>
**message**: A descriptive message.

**Examples**

<!-- tabs:start -->

#### ** Example Code **

```javascript
let dirstat = await deleteDirectory(path.join(__dirname, 't2'));
console.log(dirstat);
```

#### ** Example Response **

```javascript
{
  success: true,
  message: 'Directory deleted: /Users/vivek/practice-apps/brad-cli/apickdb/t2 recursively.'
}
```

<!-- tabs:end -->

### openDirectory()

If the directory exists, it returns apickFsResultObject with success set to true. else creates one. openDirectory
never overwrites existing directory. Unlike node's native `open` it doesnot return any handles.

<br>
This method is useful where you want to create a directory by never want to overwrite it.

**Import**
<br>

```javascript
const { openDirectory } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**, required, String, path of the directory to open

**Result**
<br>
**apickFS result object** <br>
**succss**: ture/false <br>
**message**: A descriptive message.

**Examples**
<br>

<!-- tabs:start -->

#### ** Example Code **

```javascript
let dirstat = await openDirectory(path.join(__dirname, 't2'));
console.log(dirstat);
```

#### ** Example Response **

```javascript
{
  success: true,
  message: 'SUCCESS: /Users/vivek/practice-apps/brad-cli/apickdb/t2 already exists.'
}
```

<!-- tabs:end -->

### writeDirectory()

If directory exist, it overwrites it with an empty new directory. If directory doesnot exist, it creates one.

`writeDirectory` is uselful when you want to make sure that you are starting from an empty foleder. For rest of the cases `openDirectory` is the right choice.

**Import**
<br>

```javascript
const { writeDirectory } = require('apickfs');
```

**Arguments**
<br>

1. **directoryPath**: required, String, path to the directory

**Result**
<br>
**apickFS result object** <br>
**succss**: ture/false <br>
**message**: A descriptive message.

**Examples**
<br>

<!-- tabs:start -->

#### ** Example Code **

```javascript
let dirstat = await writeDirectory(path.join(__dirname, 't2'));
console.log(dirstat);
```

#### ** Example Response **

```javascript
{
  success: true,
  message: 'SUCCESS: /Users/vivek/practice-apps/brad-cli/apickdb/t2 updated/overwritten.'
}
```

<!-- tabs:end -->

## **Low level Methods**

Not to be used most of the times. We have specific mehtods of files and directories.

| Parameter Combinations                        | result                      | Description                                              |
| --------------------------------------------- | --------------------------- | -------------------------------------------------------- |
| `writeStorage(directoryPath)`                 | Success, Messge             | Creates directory                                        |
| `writeStorage(directoryPath , fieName)`       | Success, Messge             | Creates or Truncates file                                |
| `writeStorage(directoryPath , fieName, data)` | Success, Messge             | Creates file. Adds or Overwrites file content with data. |
| `removeStorage(directoryPath)`                | Success, Messge             | Removes directory                                        |
| `removeStorage(directoryPath , fieName)`      | Success, Messge             | removes file                                             |
| `removeStorage(directoryPath,null,true)`      | Success, Messge             | Removes directory recursively                            |
| `removeStorageRecursively(directoryPath)`     | Success, Messge             | Removes directory recursively                            |
| `fileOrFolderExists(<directory/file> path)`   | true/false                  | Checks if a directory or a file exists                   |
| `storageHander(<directory/file> path)`        | true/false , file/directory | Checks if a directory or a file exists and its type.     |

### fileOrFolderExists()

**check if a `file` or a `directory` exists:**

```javascript
apickFileStorage
  .fileOrFolderExists(path.join(__dirname, 'boo'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

It returns `true` or `false`

```
false
```

<br>

**check if a `file` or a `directory` exists:**

```javascript
apickFileStorage
  .fileOrFolderExists(path.join(__dirname, 'boo'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

It takes just one argument and returns `true` or `false`

```
false
```

Example with a file:

```javascript
apickFileStorage
  .fileOrFolderExists(path.join(__dirname, 'data', 'text.txt'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

```
true
```

<br>

### readStorage()

readStorage can be used with three different set of arguments. When just one argument is passed it is treated as a directory path.
the second argument is used as file name. and the third file is used as data for file.

second and third arguments are optional.

### removeStorage()

**Removing `data.json` in the `foo` directory:**

```javascript
apickFileStorage
  .removeStorage(path.join(__dirname, 'foo'), 'data.json')
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

<br>

**Removing the `boo` directory (if it is empty):**

```javascript
apickFileStorage
  .removeStorage(path.join(__dirname, 'boo'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

<br>

There are two way to remove `boo` if it's not empty (recursively)

**Removing the `boo` directory (if it is empty):**

Way 1 : provide a `directory path`, keep filename `null` and pass `true` for allowing recursive deleting

```javascript
apickFileStorage
  .removeStorage(path.join(__dirname, 'boo'), null, true)
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

Way 2 :

```javascript
apickFileStorage
  .removeStorageRecursively(path.join(__dirname, 'boo'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

<br>

### removeStorageRecursively()

`removeStorageRecursively` is same as removeStorage with third argument for `recursive` option set to true.

```javascript
apickFileStorage
  .removeStorageRecursively(path.join(__dirname, 'boo'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

### storageHandler()

check if a `file` or a `directory` exists and also get its type if it exists.

```javascript
apickFileStorage
  .storageHander(path.join(__dirname, 'data', 'text.txt'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

```javascript
{ exists: true, type: 'file' }
```

Example with a folder :

```javascript
apickFileStorage
  .storageHander(path.join(__dirname, 'data'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

```javascript
{ exists: true, type: 'directory' }
```

<br>

### writeStorage()

`writeStorage()` - the selection of this name has a purpose. Its made up of two words = `Write` and `Storage`.
**Write** stands for both _creating_ and _editing_ whereas **Store** stands for both _files_ and _directories_.

**Creating a directory called `foo` in our current directory :**

**Inside an async function :**

```javascript
(async () => {
  try {
    status = await apickFileStorage.writeStorage(path.join(__dirname, 'foo'));
    console.log(status);
  } catch (err) {
    console.log(err);
  }
})();
```

**Outside an async function :**

```javascript
apickFileStorage
  .writeStorage(path.join(__dirname, 'fboo'))
  .then(d => {
    console.log(d);
  })
  .catch(e => {
    console.log(e);
  });
```

Run any one of the above and if all is good you must get a response object similar to it :

```javascript
{
  success: true,
  message: 'SUCCESS: /Users/vivek/practice-apps/temp/fspromises/foo created.'
}
```

You have a `sucess` value to check if the opration was success and you have a `message` that can be logged or shown to the user.

<br>

You may use any one of async/await or then/catch approach.

Again, for most of the use cases, we have specific methods for files and directories.
