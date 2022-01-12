import { rand } from './core';
import { data } from './product.i18n.json';

export function product() {
  return rand(data);
}
