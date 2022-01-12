import { rand } from './core';
import { data } from './zip-code.i18n.json';

export function zipCode() {
  return rand(data);
}
