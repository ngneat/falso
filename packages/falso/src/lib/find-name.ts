import { rand } from './core';
import { data } from './find-name.json';

export function findName() {
  return rand(data);
}
