import { rand } from './core';
import { data } from './bear.i18n.json';

export function bear() {
  return rand(data);
}
