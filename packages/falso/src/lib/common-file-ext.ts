import { rand } from './core';
import { data } from './common-file-ext.json';

export function commonFileExt() {
  return rand(data);
}
