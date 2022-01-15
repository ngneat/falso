import { FakeOptions, fake } from './core/core';
import { data } from './port.json';

// TODO - generate programmatically
export function randPort<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
