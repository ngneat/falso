import { copyFileSync, mkdir, mkdirSync } from 'fs';
import { join } from 'path';
import { EchoExecutorOptions } from './options';

export function copyCoreFiles(
  options: EchoExecutorOptions,
  projectLibPath: string
) {
  const coreTSFilePath = join(projectLibPath, 'core', 'core.ts');
  const randTSFilePath = join(projectLibPath, 'rand.ts');
  const randomTSFilePath = join(projectLibPath, 'random.ts');
  for (const language of options.languages) {
    const outSRCPath = join(options.output, language, 'src');
    const ourSRCCorePath = join(outSRCPath, 'core');
    mkdirSync(ourSRCCorePath, { recursive: true });
    copyFileSync(coreTSFilePath, join(ourSRCCorePath, 'core.ts'));
    copyFileSync(randTSFilePath, join(outSRCPath, 'rand.ts'));
    copyFileSync(randomTSFilePath, join(outSRCPath, 'random.ts'));
  }
}
