const fs = require('fs');

const [directoryPath, generateIndicator] = process.argv.slice(2);
// https://regex101.com/r/qxpfyX/1
const regexp = new RegExp(`(${generateIndicator}).*[*]\\/`,"gs");
const directoryUniqueFilenames = fs.readdirSync(directoryPath)
  .map(filename => filename.split('.')[0])
  .filter((filename, index, filenames) => filenames.indexOf(filename) === index);
const ERRORS = {
  missingIndicatorProperty: `'${generateIndicator}' is missing in jsdoc`,
  tsFileDoesNotExists: `corresponding ts file does not exists`,
  missingJsonDataField: `'json.data' field is missing`,
  jsonDataFieldValueMustBeArray: "'json.data' field value is not array",
  jsonDataMustNotBeEmptyArray: "'json.data' field value is empty array",
  tsFileDoesNotContainRandFunction: "ts file must contain function which name starts with 'rand'"
};

const functions = {
  getFileContent: (filepath) => {
    try {
      return fs.readFileSync(filepath).toString()
    } catch(error) {
      if(error.message.startsWith("ENOENT")) {
        return null;
      }
      throw error;
    }
  },
  getExamplesFromJson: (json) => {
    if(json.data === undefined) {
      return [null, ERRORS.missingJsonDataField];
    }
    if(false === (json.data instanceof Array)) {
      return [null, ERRORS.jsonDataFieldValueMustBeArray]
    }
    if(json.data.length === 0) {
      return [null, ERRORS.jsonDataMustNotBeEmptyArray]
    }
    return [json.data.slice(0,3), null];
  },
  getExamplesFromTs: (tsContent) => {
    const [,randFunction] = Object.entries(tsContent).find(([key]) => key.startsWith('rand'));
    if(randFunction === undefined || typeof randFunction !== 'function') {
      return [null, ERRORS.tsFileDoesNotContainRandFunction]
    }
    return [Array.from({ length: 3 }, randFunction), null]
  },
  generateExamples: (acc, filename) => {
    const basePath = `${directoryPath}${filename}`
    const filePath = {
      ts: `${basePath}.ts`,
      json: `${basePath}.json`,
    };
    const tsFileContent = functions.getFileContent(filePath.ts);
    if(tsFileContent === null) {
      acc[ERRORS.tsFileDoesNotExists].push(filename);
      return acc;
    }
    if(false === tsFileContent.includes(generateIndicator)) {
      acc[ERRORS.missingIndicatorProperty].push(filename);
      return acc;
    }
    const jsonFileContent = functions.getFileContent(filePath.json);
    const [examples, error] = jsonFileContent === null
      ? functions.getExamplesFromTs(require(`../${basePath}`))
      : functions.getExamplesFromJson(JSON.parse(jsonFileContent));
    if(error !== null) {
      acc[error].push(filename);
      return acc;
    }
    const replacement = `${generateIndicator}\n * @example\n${examples.map(example => ` * ${example}\n`).join('')} */`
    fs.writeFileSync(`${basePath}.ts`, tsFileContent.replace(regexp, replacement));
    return acc;
  },
};

console.log('Generating examples...')
const errors = directoryUniqueFilenames.reduce(functions.generateExamples,  Object.values(ERRORS).reduce((acc, errorText) => ({...acc, [errorText]: []}), {}));
console.log(Object.entries(errors).reduce((acc, [key, value]) => `${acc}--> ${value.length} - ${key}:\n   [${value.join(', ')}]\n` ,'<<-- Generator Errors -->>\n'));
console.log(`<<-- Generator Result -->>
--> generated: ${directoryUniqueFilenames.length - Object.values(errors).flat().length}
--> files: ${directoryUniqueFilenames.length}`);

