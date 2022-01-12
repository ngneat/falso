import { rand } from './core';
import { data } from './longitude.json';

export function longitude() {
  return rand(data);
}
