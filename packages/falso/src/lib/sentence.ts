import { rand } from './core';
import { data } from './sentence.i18n.json';

export function sentence() {
  return rand(data);
}
