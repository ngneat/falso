import { rand } from './core';
import { data } from './credit-card-number.json';

export function creditCardNumber() {
  return rand(data);
}
