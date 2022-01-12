import { rand } from './core';
import { data } from './phrase.i18n.json';

export function phrase() {
  return rand(data);
}
