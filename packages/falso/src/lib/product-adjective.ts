import { rand } from './core';
import { data } from './product-adjective.i18n.json';

export function productAdjective() {
  return rand(data);
}
