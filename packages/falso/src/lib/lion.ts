import { rand } from './core';
import { data } from './lion.json';

export function lion() {
  return rand(data);
}
