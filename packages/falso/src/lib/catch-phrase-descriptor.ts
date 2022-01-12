import { rand } from './core';
import { data } from './catch-phrase-descriptor.i18n.json';

export function catchPhraseDescriptor() {
  return rand(data);
}
