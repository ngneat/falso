import { rand } from './core';
import { data } from './country.i18n.json';

export function country() {
  return rand(data);
}
