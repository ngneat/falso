import { FakeOptions, fake } from './core';
import { data } from './paragraphs.json';

// TODO - generate programmatically
export function paragraphs<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
