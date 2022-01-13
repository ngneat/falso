import { FakeOptions, fake } from './core';
import { data } from './catch-phrase-noun.json';

export function catchPhraseNoun<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
