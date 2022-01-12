import { rand } from './core';
import { data } from './street-address.i18n.json';

export function streetAddress() {
  return rand(data);
}
