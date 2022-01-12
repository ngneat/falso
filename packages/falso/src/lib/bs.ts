import { rand } from './core';
import { data } from './bs.i18n.json';

export function bs() {
  return rand(data);
}
