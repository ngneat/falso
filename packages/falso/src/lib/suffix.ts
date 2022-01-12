import { rand } from './core';
import { data } from './suffix.i18n.json';

export function suffix() {
  return rand(data);
}
