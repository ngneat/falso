import { rand } from './core';
import { data } from './suffixes.i18n.json';

export function suffixes() {
  return rand(data);
}
