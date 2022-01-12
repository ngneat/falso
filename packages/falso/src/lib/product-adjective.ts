import { rand } from './core';
import { data } from './product-adjective.json';

export function productAdjective() {
  return rand(data);
}
