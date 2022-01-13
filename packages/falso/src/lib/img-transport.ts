import { FakeOptions, fake } from './core';
import { data } from './img-transport.json';

export function imgTransport<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
