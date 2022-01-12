import { rand } from './core';
import { data } from './random-word.json';

export function randomWord() {
  return rand(data);
}
