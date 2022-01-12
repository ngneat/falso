import { rand } from './core';
import { data } from './bs-noun.json';

export function bsNoun() {
  return rand(data);
}
