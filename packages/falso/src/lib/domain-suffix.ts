import { rand } from './core';
import { data } from './domain-suffix.json';

export function domainSuffix() {
  return rand(data);
}
