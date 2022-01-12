import { rand } from './core';
import { data } from './gender.i18n.json';

export function gender() {
  return rand(data);
}
