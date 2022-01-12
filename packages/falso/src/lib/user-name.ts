import { rand } from './core';
import { data } from './user-name.json';

export function userName() {
  return rand(data);
}
