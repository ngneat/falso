import { appendFileSync, copyFileSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { BUILD_TARGET } from './constants';
import { EchoExecutorOptions } from './options';

export function addBuildTargets(
  options: EchoExecutorOptions,
  projectJSONPath: string
) {
  const projectJSONContent = JSON.parse(
    readFileSync(projectJSONPath, { encoding: 'utf-8' })
  );

  for (const language of options.languages) {
    projectJSONContent.targets[`build-translate-${language}`] = JSON.parse(
      BUILD_TARGET.replace(new RegExp('LANGUAGE', 'g'), language)
    );
  }

  writeFileSync(projectJSONPath, JSON.stringify(projectJSONContent, null, 2), {
    encoding: 'utf-8',
  });
}
