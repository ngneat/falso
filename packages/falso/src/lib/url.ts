import { rand } from './core';
import { data } from './url.i18n.json';

export function url() {
  return rand(data);
}
