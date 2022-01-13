import { FakeOptions, fake } from './core';
import { data } from './catch-phrase-descriptor.json';

export function catchPhraseDescriptor<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
