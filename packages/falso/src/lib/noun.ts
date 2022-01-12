import { rand } from './core';
import { data } from './noun.i18n.json';

export function noun() {
  return rand(data);
}
