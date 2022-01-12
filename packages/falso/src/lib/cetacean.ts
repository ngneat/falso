import { rand } from './core';
import { data } from './cetacean.i18n.json';

export function cetacean() {
  return rand(data);
}
