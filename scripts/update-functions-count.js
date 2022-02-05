const fs = require('fs');
const {execSync} = require('child_process');

function readFile(path) {
  return fs.readFileSync(path).toString('utf8');
}

const exportedFunctions = readFile('packages/falso/src/index.ts');
const functionsCount = exportedFunctions.match(/rand\w+/g).length;

for (const path of ['README.md', 'docs/docs/getting-started.mdx']) {
  const file = readFile(path);
  const updated = file.replace(/\d+ Functions/, `${functionsCount} Functions`);
  if (updated !== file) {
    fs.writeFileSync(path, updated);
    execSync(`git add ${path}`);
  }
}
