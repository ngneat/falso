import { rand } from './core';
import { data } from './img-technics.json';

export function imgTechnics() {
  return rand(data);
}
