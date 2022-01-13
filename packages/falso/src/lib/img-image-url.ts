import { FakeOptions, fake } from './core';
import { data } from './img-image-url.json';

export function imgImageUrl<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
