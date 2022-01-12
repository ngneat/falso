import { rand } from './core';
import { data } from './img.i18n.json';

export function img() {
  return rand(data);
}
