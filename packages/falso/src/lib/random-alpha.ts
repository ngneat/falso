import { rand } from './core';
import { data } from './random-alpha.json';

export function randomAlpha() {
  return rand(data);
}
