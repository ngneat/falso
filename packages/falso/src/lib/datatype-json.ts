import { FakeOptions, fake } from './core';
import { data } from './datatype-json.json';

export function datatypeJson<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
