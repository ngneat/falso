import { FakeOptions, fake } from './core/core';
import { data } from './port.json';

// TODO - generate programmatically
export function port<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
