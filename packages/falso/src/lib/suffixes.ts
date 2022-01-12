import { rand } from './core';
import { data } from './suffixes.json';

export function suffixes() {
  return rand(data);
}
