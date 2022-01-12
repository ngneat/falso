import { rand } from './core';
import { data } from './img-cats.json';

export function imgCats() {
  return rand(data);
}
