import { rand } from './core';
import { data } from './bear.json';

export function bear() {
  return rand(data);
}
