import { rand } from './core';
import { data } from './catch-phrase-adjective.i18n.json';

export function catchPhraseAdjective() {
  return rand(data);
}
