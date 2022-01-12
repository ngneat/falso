import { rand } from './core';
import { data } from './latitude.i18n.json';

export function latitude() {
  return rand(data);
}
