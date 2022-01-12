import { rand } from './core';
import { data } from './cat.i18n.json';

export function cat() {
  return rand(data);
}
