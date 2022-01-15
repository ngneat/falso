import { FakeOptions, fake } from './core/core';
import { data } from './paragraphs.json';

// TODO - generate programmatically
export function randParagraphs<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
