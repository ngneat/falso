import { rand } from './core';
import { data } from './img-food.i18n.json';

export function imgFood() {
  return rand(data);
}
