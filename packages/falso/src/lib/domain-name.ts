import { rand } from './core';
import { data } from './domain-name.json';

export function domainName() {
  return rand(data);
}
