import { rand } from './core';
import { data } from './img-city.i18n.json';

export function imgCity() {
  return rand(data);
}
