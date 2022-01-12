import { rand } from './core';
import { data } from './random-image.json';

export function randomImage() {
  return rand(data);
}
