import { rand } from './core';
import { data } from './currency-code.i18n.json';

export function currencyCode() {
  return rand(data);
}
