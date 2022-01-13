import { FakeOptions, fake } from './core';
import { data } from './datatype-uuid.json';

export function datatypeUuid<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
