import { rand } from './core';
import { data } from './direction.json';

export function direction() {
  return rand(data);
}
