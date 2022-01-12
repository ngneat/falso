import { rand } from './core';
import { data } from './random-array-elements.i18n.json';

export function randomArrayElements() {
  return rand(data);
}
