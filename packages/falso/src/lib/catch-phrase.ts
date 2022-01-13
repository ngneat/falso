import { FakeOptions, fake } from './core';
import { data } from './catch-phrase.json';

export function catchPhrase<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
