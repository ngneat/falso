import { rand } from './core';
import { data } from './product-description.i18n.json';

export function productDescription() {
  return rand(data);
}
