import { rand } from './core';
import { data } from './cow.json';

export function cow() {
  return rand(data);
}
