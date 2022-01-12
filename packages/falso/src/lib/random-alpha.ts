import { rand } from './core';
import { data } from './random-alpha.i18n.json';

export function randomAlpha() {
  return rand(data);
}
