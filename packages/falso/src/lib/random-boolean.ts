import { rand } from './core';
import { data } from './random-boolean.json';

export function randomBoolean() {
  return rand(data);
}
