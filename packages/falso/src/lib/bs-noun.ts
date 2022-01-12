import { rand } from './core';
import { data } from './bs-noun.i18n.json';

export function bsNoun() {
  return rand(data);
}
