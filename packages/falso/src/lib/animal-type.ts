import { rand } from './core';
import { data } from './animal-type.json';

export function animalType() {
  return rand(data);
}
