import { rand } from './core';
import { data } from './city-suffix.i18n.json';

export function citySuffix() {
  return rand(data);
}
