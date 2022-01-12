import { rand } from './core';
import { data } from './domain-word.json';

export function domainWord() {
  return rand(data);
}
