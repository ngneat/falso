import { rand } from './core';
import { data } from './word.i18n.json';

export function word() {
  return rand(data);
}
