import { rand } from './core';
import { data } from './secondary-address.i18n.json';

export function secondaryAddress() {
  return rand(data);
}
