import { rand } from './core';
import { data } from './rabbit.i18n.json';

export function rabbit() {
  return rand(data);
}
