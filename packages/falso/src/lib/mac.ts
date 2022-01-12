import { rand } from './core';
import { data } from './mac.i18n.json';

export function mac() {
  return rand(data);
}
