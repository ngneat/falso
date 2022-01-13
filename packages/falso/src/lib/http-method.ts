import { FakeOptions, fake } from './core';
import { data } from './http-method.json';

export function httpMethod<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
