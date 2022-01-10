import { rand } from './core';
import { data } from './random-alpha-numeric.json';

export function randomAlphaNumeric() {
  return rand(data);
}
