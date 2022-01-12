import { rand } from './core';
import { data } from './lion.i18n.json';

export function lion() {
  return rand(data);
}
