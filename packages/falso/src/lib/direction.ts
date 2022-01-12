import { rand } from './core';
import { data } from './direction.i18n.json';

export function direction() {
  return rand(data);
}
