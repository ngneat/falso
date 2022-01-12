import { rand } from './core';
import { data } from './ip.json';

export function ip() {
  return rand(data);
}
