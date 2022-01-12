import { rand } from './core';
import { data } from './domain-suffix.i18n.json';

export function domainSuffix() {
  return rand(data);
}
