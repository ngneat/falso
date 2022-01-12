import { rand } from './core';
import { data } from './currency-code.json';

export function currencyCode() {
  return rand(data);
}
