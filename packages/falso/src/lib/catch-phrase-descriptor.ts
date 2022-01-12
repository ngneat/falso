import { rand } from './core';
import { data } from './catch-phrase-descriptor.json';

export function catchPhraseDescriptor() {
  return rand(data);
}
