import { rand } from './core';
import { data } from './bird.json';

export function bird() {
  return rand(data);
}
