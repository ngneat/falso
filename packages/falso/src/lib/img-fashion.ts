import { rand } from './core';
import { data } from './img-fashion.json';

export function imgFashion() {
  return rand(data);
}
