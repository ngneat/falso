import { rand } from './core';
import { data } from './dog.json';

export function dog() {
  return rand(data);
}
