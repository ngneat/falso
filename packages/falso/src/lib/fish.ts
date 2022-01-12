import { rand } from './core';
import { data } from './fish.json';

export function fish() {
  return rand(data);
}
