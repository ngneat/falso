import { rand } from './core';
import { data } from './sentence.json';

export function sentence() {
  return rand(data);
}
