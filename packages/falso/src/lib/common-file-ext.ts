import { rand } from './core';
import { data } from './common-file-ext.i18n.json';

export function commonFileExt() {
  return rand(data);
}
