import { FakeOptions, fake } from './core';
import { data } from './directory-path.json';

export function directoryPath<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
