import { rand } from './core';
import { data } from './street-suffix.i18n.json';

export function streetSuffix() {
  return rand(data);
}
