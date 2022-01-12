import { rand } from './core';
import { data } from './first-name.i18n.json';

export function firstName() {
  return rand(data);
}
