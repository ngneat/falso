import { rand } from './core';
import { data } from './user-name.i18n.json';

export function userName() {
  return rand(data);
}
