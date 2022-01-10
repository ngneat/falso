import { rand } from './core';
import { data } from './ordinal-direction.json';

export function ordinalDirection() {
  return rand(data);
}
