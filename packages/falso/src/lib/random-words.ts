import { rand } from './core';
import { data } from './random-words.i18n.json';

export function randomWords() {
  return rand(data);
}
