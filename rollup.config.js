import json from '@rollup/plugin-json';

export default [
  {
    input: 'dist/out-tsc/packages/falso/src/i18n/es/index.js',
    output: {
      file: 'dist/packages/falso/i18n/es/index.cjs.js',
      format: 'cjs',
    },
    plugins: [json()],
  },
  {
    input: 'dist/out-tsc/packages/falso/src/i18n/es/index.js',
    output: {
      file: 'dist/packages/falso/i18n/es/index.esm.js',
      format: 'esm',
    },
    plugins: [json()],
  },
  {
    input: 'dist/out-tsc/packages/falso/src/i18n/ru/index.js',
    output: {
      file: 'dist/packages/falso/i18n/ru/index.cjs.js',
      format: 'cjs',
    },
    plugins: [json()],
  },
  {
    input: 'dist/out-tsc/packages/falso/src/i18n/ru/index.js',
    output: {
      file: 'dist/packages/falso/i18n/ru/index.esm.js',
      format: 'esm',
    },
    plugins: [json()],
  },
];
