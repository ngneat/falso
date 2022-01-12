import { rand } from './core';
import { data } from './ordinal-direction.i18n.json';

export function ordinalDirection() {
  return rand(data);
}
