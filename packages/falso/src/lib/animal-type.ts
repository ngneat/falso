import { rand } from './core';
import { data } from './animal-type.i18n.json';

export function animalType() {
  return rand(data);
}
