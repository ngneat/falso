import { FakeOptions, fake } from './core';
import { data } from './mime-type.json';

export function mimeType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
