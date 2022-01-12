import { rand } from './core';
import { data } from './bs.json';

export function bs() {
  return rand(data);
}
