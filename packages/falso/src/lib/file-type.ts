import { rand } from './core';
import { data } from './file-type.i18n.json';

export function fileType() {
  return rand(data);
}
