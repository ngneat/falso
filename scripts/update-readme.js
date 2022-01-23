const fs = require('fs');
const {execSync} = require('child_process');

const exportedFunctions = fs.readFileSync('packages/falso/src/index.ts').toString('utf8');
const readme = fs.readFileSync('README.md').toString('utf8');
const updated = readme.replace(/\d+ Functions/, `${exportedFunctions.match(/rand\w+/g).length} Functions`);
if (updated !== readme) {
  fs.writeFileSync('README.md', updated);
  execSync('git add README.md');
}
