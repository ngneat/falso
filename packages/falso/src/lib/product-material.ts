import { rand } from './core';
import { data } from './product-material.json';

export function productMaterial() {
  return rand(data);
}
