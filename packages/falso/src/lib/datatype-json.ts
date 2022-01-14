import { FakeOptions, fake } from './core/core';
import { data } from './datatype-json.json';

// TODO - generate programmatically
export function datatypeJson<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
