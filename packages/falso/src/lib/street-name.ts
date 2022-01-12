import { rand } from './core';
import { data } from './street-name.i18n.json';

export function streetName() {
  return rand(data);
}
