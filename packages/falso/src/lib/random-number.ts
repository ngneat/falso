import { rand } from './core';
import { data } from './random-number.json';

export function randomNumber() {
  return rand(data);
}
