import { rand } from './core';
import { data } from './amount.i18n.json';

export function amount() {
  return rand(data);
}
