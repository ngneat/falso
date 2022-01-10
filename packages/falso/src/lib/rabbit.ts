import { rand } from './core';
import { data } from './rabbit.json';

export function rabbit() {
  return rand(data);
}
