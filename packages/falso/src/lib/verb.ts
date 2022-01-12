import { rand } from './core';
import { data } from './verb.json';

export function verb() {
  return rand(data);
}
