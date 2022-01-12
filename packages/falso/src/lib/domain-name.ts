import { rand } from './core';
import { data } from './domain-name.i18n.json';

export function domainName() {
  return rand(data);
}
