import { rand } from './core';
import { data } from './street-prefix.json';

export function streetPrefix() {
  return rand(data);
}
