import { rand } from './core';
import { data } from './random-locale.json';

export function randomLocale() {
  return rand(data);
}
