import { FakeOptions, fake } from './core';
import { data } from './paragraphs.json';

export function paragraphs<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
