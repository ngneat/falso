export const UNICODE_REGEXP = /\\u([\d\w]{4})/gi;
export const COMMENT = `// THIS FILE IS AUTO-GENERATED THROUGH \`npm run translate\``;
export const TYPE_SCRIPT_FILE_EXTENSION = '.ts';
export const JSON_FILE_EXTENSION = '.json';
export const BUILD_TARGET = JSON.stringify({
  executor: '@nrwl/web:rollup',
  outputs: ['{options.outputPath}'],
  options: {
    outputPath: 'dist/packages/falso/i18n/LANGUAGE',
    tsConfig: 'packages/falso/i18n/LANGUAGE/tsconfig.lib.json',
    project: 'packages/falso/i18n/LANGUAGE/package.json',
    entryFile: 'packages/falso/i18n/LANGUAGE/src/index.ts',
    format: ['esm', 'cjs'],
  },
});
export const LANGUAGE_PACKAGE_JSON = JSON.stringify({
  name: '@ngneat/falso/i18n/LANGUAGE',
});
export const TSCONFIG_JSON = JSON.stringify({
  extends: '../../../../tsconfig.base.json',
  files: [],
  include: [],
  references: [
    {
      path: './tsconfig.lib.json',
    },
  ],
  compilerOptions: {
    forceConsistentCasingInFileNames: true,
    strict: true,
    noImplicitReturns: true,
    noFallthroughCasesInSwitch: true,
  },
});
export const TSCONFIG_LIB_JSON = JSON.stringify({
  extends: './tsconfig.json',
  compilerOptions: {
    outDir: '../../../../dist/out-tsc',
    declaration: true,
    types: [],
  },
  include: ['**/*.ts'],
});
