import { rand } from './core';
import { data } from './insect.i18n.json';

export function insect() {
  return rand(data);
}
