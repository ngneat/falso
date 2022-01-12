import { rand } from './core';
import { data } from './product-description.json';

export function productDescription() {
  return rand(data);
}
