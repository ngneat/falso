import { rand } from './core';
import { data } from './currency-name.json';

export function currencyName() {
  return rand(data);
}
