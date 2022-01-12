import { rand } from './core';
import { data } from './common-file-name.i18n.json';

export function commonFileName() {
  return rand(data);
}
