import { readdirSync, writeFileSync } from 'fs';
import { EchoExecutorOptions } from './options';

export function generateRollupConfig(options: EchoExecutorOptions) {
  const languageDirList = readdirSync(options.output);

  let fileText = `import json from '@rollup/plugin-json';

export default `;

  let configList = '[';

  const rollupConfig = `{
    input: 'dist/out-tsc/packages/falso/src/i18n/LANGUAGE/index.js',
    output: {
      file: 'dist/packages/falso/i18n/LANGUAGE/index.cjs.js',
      format: 'cjs',
    },
    plugins: [json()],
  },
  {
    input: 'dist/out-tsc/packages/falso/src/i18n/LANGUAGE/index.js',
    output: {
      file: 'dist/packages/falso/i18n/LANGUAGE/index.esm.js',
      format: 'esm',
    },
    plugins: [json()],
  },`;

  languageDirList.forEach((language) => {
    const config = rollupConfig.replace(new RegExp('LANGUAGE', 'g'), language);

    configList += config;
  });

  configList += '];';

  fileText += configList + '\n';

  writeFileSync('rollup.config.js', fileText, { encoding: 'utf-8' });
}
