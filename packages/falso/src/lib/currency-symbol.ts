import { rand } from './core';
import { data } from './currency-symbol.json';

export function currencySymbol() {
  return rand(data);
}
