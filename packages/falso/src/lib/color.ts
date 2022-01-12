import { rand } from './core';
import { data } from './color.json';

export function color() {
  return rand(data);
}
