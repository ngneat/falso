import { appendFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import {
  LANGUAGE_PACKAGE_JSON,
  TSCONFIG_JSON,
  TSCONFIG_LIB_JSON,
} from './constants';
import { EchoExecutorOptions } from './options';

export function createConfigFiles(options: EchoExecutorOptions) {
  for (const language of options.languages) {
    const outDirPath = join(options.output, language);
    const packageJSONPath = join(outDirPath, 'package.json');
    writeFileSync(
      packageJSONPath,
      LANGUAGE_PACKAGE_JSON.replace(new RegExp('LANGUAGE', 'g'), language)
    );
    const tsconfigPath = join(outDirPath, 'tsconfig.json');
    writeFileSync(tsconfigPath, TSCONFIG_JSON);
    const tsconfigLibPath = join(outDirPath, 'tsconfig.lib.json');
    writeFileSync(tsconfigLibPath, TSCONFIG_LIB_JSON);
  }
}
