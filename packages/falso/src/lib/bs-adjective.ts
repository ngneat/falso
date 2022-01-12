import { rand } from './core';
import { data } from './bs-adjective.i18n.json';

export function bsAdjective() {
  return rand(data);
}
