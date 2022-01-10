import { rand } from './core';
import { data } from './img-nature.json';

export function imgNature() {
  return rand(data);
}
