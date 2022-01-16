import { FakeOptions, fake } from './core/core';
import { data } from './lines.json';

// TODO - generate programmatically
export function randLines<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
