import { rand } from './core';
import { data } from './horse.json';

export function horse() {
  return rand(data);
}
