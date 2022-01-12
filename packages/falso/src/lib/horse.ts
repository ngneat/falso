import { rand } from './core';
import { data } from './horse.i18n.json';

export function horse() {
  return rand(data);
}
