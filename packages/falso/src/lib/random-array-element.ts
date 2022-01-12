import { rand } from './core';
import { data } from './random-array-element.json';

export function randomArrayElement() {
  return rand(data);
}
