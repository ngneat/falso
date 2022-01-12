import { rand } from './core';
import { data } from './random-alpha-numeric.i18n.json';

export function randomAlphaNumeric() {
  return rand(data);
}
