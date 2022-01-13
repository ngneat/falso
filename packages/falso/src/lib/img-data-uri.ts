import { FakeOptions, fake } from './core';
import { data } from './img-data-uri.json';

export function imgDataUri<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
