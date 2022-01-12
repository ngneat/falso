import { rand } from './core';
import { data } from './currency-symbol.i18n.json';

export function currencySymbol() {
  return rand(data);
}
