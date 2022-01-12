import { rand } from './core';
import { data } from './routing-number.i18n.json';

export function routingNumber() {
  return rand(data);
}
