import { rand } from './core';
import { data } from './credit-card-number.i18n.json';

export function creditCardNumber() {
  return rand(data);
}
