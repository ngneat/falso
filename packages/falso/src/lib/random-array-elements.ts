import { rand } from './core';
import { data } from './random-array-elements.json';

export function randomArrayElements() {
  return rand(data);
}
