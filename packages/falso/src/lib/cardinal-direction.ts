import { rand } from './core';
import { data } from './cardinal-direction.i18n.json';

export function cardinalDirection() {
  return rand(data);
}
