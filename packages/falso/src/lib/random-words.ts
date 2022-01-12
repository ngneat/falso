import { rand } from './core';
import { data } from './random-words.json';

export function randomWords() {
  return rand(data);
}
