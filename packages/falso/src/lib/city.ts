import { rand } from './core';
import { data } from './city.i18n.json';

export function city() {
  return rand(data);
}
