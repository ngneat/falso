import { FakeOptions, fake } from './core/core';
import { data } from './routing-number.json';

// TODO use get random with 9-10 figures
export function routingNumber<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
