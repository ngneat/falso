import { rand } from './core';
import { data } from './ipv6.json';

export function ipv6() {
  return rand(data);
}
