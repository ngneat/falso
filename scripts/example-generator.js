const fs = require('fs');

const [libDirectoryPath] = process.argv.slice(2);
const GENERATE_INDICATOR = "@automaticallyGeneratedExamples"
// https://regex101.com/r/rlqGTA/1
const regexp = new RegExp(`(${GENERATE_INDICATOR}).*\\/`,"gs");
const errors = [];

console.log('Generating examples...')
const filenames = fs
.readdirSync(libDirectoryPath)
.filter((jsonFilename, index, array) => jsonFilename.includes(".json") && array.find(tsFilename => tsFilename.replace('ts','json') === jsonFilename))

filenames.forEach(filename => {
    try {
      const tsFilepath = `${libDirectoryPath}${filename.replace('json','ts')}`
      const tsFileContent = fs.readFileSync(tsFilepath).toString();
      if(!tsFileContent.includes(GENERATE_INDICATOR)) {
        console.log(`file is missing '${GENERATE_INDICATOR}' and will be ignored ${filename.replace('json','ts')}`);
        return;
      }
      const jsonFilepath = `${libDirectoryPath}${filename}`
      const jsonFileContent = JSON.parse(fs.readFileSync(jsonFilepath));
      if(jsonFileContent.data === undefined) {
        throw Error(`missing data field in file: ${filename}`);
      }
      if(!(jsonFileContent.data instanceof Array)) {
        throw Error(`invalid data field, must be an array: ${filename}`);
      }
      fs.writeFileSync(tsFilepath, tsFileContent.replace(regexp, `${GENERATE_INDICATOR}\n * @example\n${jsonFileContent.data.slice(0,3).map(example => ` * ${example}\n`).join('')} */`));
    } catch(error) {
      errors.push({filename, error});
    }
  });

  if(errors.length > 0) {
    console.log(errors);
  }
  console.log(`Generating examples finished ${filenames.length - errors.length}/${filenames.length}`);
