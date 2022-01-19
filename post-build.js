const json = require('json-update');
const { execSync } = require('child_process');

async function buildTranslationEntryPoints() {
  execSync(`npx tsc --project packages/falso/tsconfig.lib.json`);
  execSync(`npx rollup --config rollup.config.js`);
}

json
  .update('dist/packages/falso/package.json', { main: './index.cjs.js' })
  .then(() => {
    console.log('Changed falso/project.json main umd to cjs\n');
    buildTranslationEntryPoints()
      .then(() =>
        console.log('Created cjs and esm js files for all translations.')
      )
      .catch((e) => console.error(e));
  });
