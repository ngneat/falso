import { rand } from './core';
import { data } from './catch-phrase-noun.i18n.json';

export function catchPhraseNoun() {
  return rand(data);
}
