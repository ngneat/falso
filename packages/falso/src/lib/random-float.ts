import { rand } from './core';
import { data } from './random-float.i18n.json';

export function randomFloat() {
  return rand(data);
}
