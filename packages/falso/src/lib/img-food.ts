import { rand } from './core';
import { data } from './img-food.json';

export function imgFood() {
  return rand(data);
}
