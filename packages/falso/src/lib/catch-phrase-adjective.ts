import { FakeOptions, fake } from './core';
import { data } from './catch-phrase-adjective.json';

export function catchPhraseAdjective<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
