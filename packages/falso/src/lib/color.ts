import { rand } from './core';
import { data } from './color.i18n.json';

export function color() {
  return rand(data);
}
