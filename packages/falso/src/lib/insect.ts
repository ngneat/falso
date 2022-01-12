import { rand } from './core';
import { data } from './insect.json';

export function insect() {
  return rand(data);
}
