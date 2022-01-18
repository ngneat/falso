const json = require('json-update');
const { readFileSync } = require('fs');
const { execSync } = require('child_process');

async function buildTranslationEntryPoints() {
  const projectJSONContent = JSON.parse(
    readFileSync('packages/falso/project.json', { encoding: 'utf-8' })
  );

  const targets = projectJSONContent.targets;

  if (targets && Object.keys(targets).length) {
    const builtTranslationTargets = Object.keys(targets).filter((k) =>
      k.includes('build-translate')
    );
    for (const iterator of builtTranslationTargets) {
      const language = iterator.split('-')[iterator.split('-').length - 1];
      const cmd = `nx run falso:${iterator}`;
      console.log(`Executing... ${cmd}`);
      execSync(cmd);
      await json.update(`dist/packages/falso/i18n/${language}/package.json`, {
        main: './index.cjs.js',
      });
      console.log(`Changed i18n/${language}/package.json main umd to cjs\n`);
    }
  }
}

json
  .update('dist/packages/falso/package.json', { main: './index.cjs.js' })
  .then(() => {
    console.log('Changed falso/project.json main umd to cjs\n');
    buildTranslationEntryPoints()
      .then(() => console.log('Changed all translations umd to cjs'))
      .catch();
  });
