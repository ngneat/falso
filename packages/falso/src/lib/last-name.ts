import { rand } from './core';
import { data } from './last-name.i18n.json';

export function lastName() {
  return rand(data);
}
