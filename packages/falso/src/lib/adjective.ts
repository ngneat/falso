import { rand } from './core';
import { data } from './adjective.i18n.json';

export function adjective() {
  return rand(data);
}
