import { rand } from './core';
import { data } from './sentences.i18n.json';

export function sentences() {
  return rand(data);
}
