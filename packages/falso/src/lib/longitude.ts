import { rand } from './core';
import { data } from './longitude.i18n.json';

export function longitude() {
  return rand(data);
}
