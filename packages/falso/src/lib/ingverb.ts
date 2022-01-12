import { rand } from './core';
import { data } from './ingverb.i18n.json';

export function ingverb() {
  return rand(data);
}
