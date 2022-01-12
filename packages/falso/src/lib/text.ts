import { rand } from './core';
import { data } from './text.json';

export function text() {
  return rand(data);
}
