import { rand } from './core';
import { data } from './catch-phrase.i18n.json';

export function catchPhrase() {
  return rand(data);
}
