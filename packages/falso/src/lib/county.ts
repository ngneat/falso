import { rand } from './core';
import { data } from './county.i18n.json';

export function county() {
  return rand(data);
}
