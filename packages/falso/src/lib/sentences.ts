import { rand } from './core';
import { data } from './sentences.json';

export function sentences() {
  return rand(data);
}
