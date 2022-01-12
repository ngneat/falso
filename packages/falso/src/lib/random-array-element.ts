import { rand } from './core';
import { data } from './random-array-element.i18n.json';

export function randomArrayElement() {
  return rand(data);
}
