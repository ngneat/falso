import { rand } from './core';
import { data } from './port.i18n.json';

export function port() {
  return rand(data);
}
