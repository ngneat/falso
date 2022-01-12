import { rand } from './core';
import { data } from './file-ext.i18n.json';

export function fileExt() {
  return rand(data);
}
