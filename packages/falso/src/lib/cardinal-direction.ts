import { rand } from './core';
import { data } from './cardinal-direction.json';

export function cardinalDirection() {
  return rand(data);
}
