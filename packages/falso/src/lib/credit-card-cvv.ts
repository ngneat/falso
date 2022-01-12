import { rand } from './core';
import { data } from './credit-card-cvv.i18n.json';

export function creditCardCVV() {
  return rand(data);
}
