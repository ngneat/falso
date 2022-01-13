import { FakeOptions, fake } from './core';
import { data } from './port.json';

export function port<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
