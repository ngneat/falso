import { rand } from './core';
import { data } from './last-name.json';

export function lastName() {
  return rand(data);
}
