import { rand } from './core';
import { data } from './mask.json';

export function mask() {
  return rand(data);
}
