import { rand } from './core';
import { data } from './product-name.i18n.json';

export function productName() {
  return rand(data);
}
