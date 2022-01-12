import { rand } from './core';
import { data } from './img-fashion.i18n.json';

export function imgFashion() {
  return rand(data);
}
