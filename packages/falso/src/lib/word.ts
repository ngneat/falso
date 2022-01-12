import { rand } from './core';
import { data } from './word.json';

export function word() {
  return rand(data);
}
