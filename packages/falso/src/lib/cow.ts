import { rand } from './core';
import { data } from './cow.i18n.json';

export function cow() {
  return rand(data);
}
