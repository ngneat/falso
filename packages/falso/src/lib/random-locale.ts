import { rand } from './core';
import { data } from './random-locale.i18n.json';

export function randomLocale() {
  return rand(data);
}
