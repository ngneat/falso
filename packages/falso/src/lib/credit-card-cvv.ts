import { rand } from './core';
import { data } from './credit-card-cvv.json';

export function creditCardCVV() {
  return rand(data);
}
