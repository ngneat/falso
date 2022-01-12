import { rand } from './core';
import { data } from './product-material.i18n.json';

export function productMaterial() {
  return rand(data);
}
