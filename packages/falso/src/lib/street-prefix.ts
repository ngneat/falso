import { rand } from './core';
import { data } from './street-prefix.i18n.json';

export function streetPrefix() {
  return rand(data);
}
