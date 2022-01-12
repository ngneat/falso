import { rand } from './core';
import { data } from './price.i18n.json';

export function price() {
  return rand(data);
}
