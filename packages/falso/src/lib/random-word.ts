import { rand } from './core';
import { data } from './random-word.i18n.json';

export function randomWord() {
  return rand(data);
}
