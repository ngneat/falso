import { rand } from './core';
import { data } from './catch-phrase-adjective.json';

export function catchPhraseAdjective() {
  return rand(data);
}
