import { rand } from './core';
import { data } from './month.json';

export function month() {
  return rand(data);
}
