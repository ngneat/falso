import { FakeOptions, fake } from './core/core';
import { data } from './img-data-uri.json';

// TODO - generate programmatically
export function imgDataUri<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
