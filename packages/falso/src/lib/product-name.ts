import { rand } from './core';
import { data } from './product-name.json';

export function productName() {
  return rand(data);
}
