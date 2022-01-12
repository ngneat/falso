import { rand } from './core';
import { data } from './country-code.i18n.json';

export function countryCode() {
  return rand(data);
}
