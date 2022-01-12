import { rand } from './core';
import { data } from './bs-adjective.json';

export function bsAdjective() {
  return rand(data);
}
