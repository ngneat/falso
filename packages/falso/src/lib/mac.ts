import { rand } from './core';
import { data } from './mac.json';

export function mac() {
  return rand(data);
}
