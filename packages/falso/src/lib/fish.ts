import { rand } from './core';
import { data } from './fish.i18n.json';

export function fish() {
  return rand(data);
}
