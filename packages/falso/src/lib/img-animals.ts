import { rand } from './core';
import { data } from './img-animals.json';

export function imgAnimals() {
  return rand(data);
}
