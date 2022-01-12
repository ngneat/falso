import { rand } from './core';
import { data } from './file-name.i18n.json';

export function fileName() {
  return rand(data);
}
