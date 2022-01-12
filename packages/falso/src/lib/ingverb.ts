import { rand } from './core';
import { data } from './ingverb.json';

export function ingverb() {
  return rand(data);
}
