import { rand } from './core';
import { data } from './bs-buzz.json';

export function bsBuzz() {
  return rand(data);
}
