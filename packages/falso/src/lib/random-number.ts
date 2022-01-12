import { rand } from './core';
import { data } from './random-number.i18n.json';

export function randomNumber() {
  return rand(data);
}
