import { rand } from './core';
import { data } from './price.json';

export function price() {
  return rand(data);
}
