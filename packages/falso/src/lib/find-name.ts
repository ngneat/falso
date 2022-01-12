import { rand } from './core';
import { data } from './find-name.i18n.json';

export function findName() {
  return rand(data);
}
