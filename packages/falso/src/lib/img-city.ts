import { rand } from './core';
import { data } from './img-city.json';

export function imgCity() {
  return rand(data);
}
