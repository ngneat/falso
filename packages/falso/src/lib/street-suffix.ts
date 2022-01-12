import { rand } from './core';
import { data } from './street-suffix.json';

export function streetSuffix() {
  return rand(data);
}
