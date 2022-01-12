import { rand } from './core';
import { data } from './ip.i18n.json';

export function ip() {
  return rand(data);
}
