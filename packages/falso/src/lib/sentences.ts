import { FakeOptions, fake } from './core/core';
import { data } from './sentences.json';

// TODO - generate programmatically
export function randSentences<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
