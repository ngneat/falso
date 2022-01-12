import { rand } from './core';
import { data } from './amount.json';

export function amount() {
  return rand(data);
}
