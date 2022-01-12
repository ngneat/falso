import { rand } from './core';
import { data } from './currency-name.i18n.json';

export function currencyName() {
  return rand(data);
}
