import { rand } from './core';
import { data } from './noun.json';

export function noun() {
  return rand(data);
}
