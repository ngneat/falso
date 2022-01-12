import { rand } from './core';
import { data } from './common-file-type.i18n.json';

export function commonFileType() {
  return rand(data);
}
