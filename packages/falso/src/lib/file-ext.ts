import { rand } from './core';
import { data } from './file-ext.json';

export function fileExt() {
  return rand(data);
}
