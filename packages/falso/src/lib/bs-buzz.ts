import { rand } from './core';
import { data } from './bs-buzz.i18n.json';

export function bsBuzz() {
  return rand(data);
}
