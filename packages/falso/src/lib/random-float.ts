import { rand } from './core';
import { data } from './random-float.json';

export function randomFloat() {
  return rand(data);
}
