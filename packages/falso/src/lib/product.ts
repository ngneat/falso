import { rand } from './core';
import { data } from './product.json';

export function product() {
  return rand(data);
}
