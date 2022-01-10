import { rand } from './core';
import { data } from './cat.json';

export function cat() {
  return rand(data);
}
