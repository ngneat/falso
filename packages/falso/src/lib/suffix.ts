import { rand } from './core';
import { data } from './suffix.json';

export function suffix() {
  return rand(data);
}
