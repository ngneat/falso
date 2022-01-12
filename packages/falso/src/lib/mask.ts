import { rand } from './core';
import { data } from './mask.i18n.json';

export function mask() {
  return rand(data);
}
