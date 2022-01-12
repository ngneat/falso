import { rand } from './core';
import { data } from './ipv6.i18n.json';

export function ipv6() {
  return rand(data);
}
