import { rand } from './core';
import { data } from './department.i18n.json';

export function department() {
  return rand(data);
}
