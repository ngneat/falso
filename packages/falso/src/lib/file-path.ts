import { rand } from './core';
import { data } from './file-path.json';

export function filePath() {
  return rand(data);
}
