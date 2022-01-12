import { rand } from './core';
import { data } from './file-path.i18n.json';

export function filePath() {
  return rand(data);
}
