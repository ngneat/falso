import { rand } from './core';
import { data } from './img-cats.i18n.json';

export function imgCats() {
  return rand(data);
}
