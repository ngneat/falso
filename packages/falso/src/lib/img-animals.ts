import { rand } from './core';
import { data } from './img-animals.i18n.json';

export function imgAnimals() {
  return rand(data);
}
