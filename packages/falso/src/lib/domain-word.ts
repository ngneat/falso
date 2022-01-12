import { rand } from './core';
import { data } from './domain-word.i18n.json';

export function domainWord() {
  return rand(data);
}
