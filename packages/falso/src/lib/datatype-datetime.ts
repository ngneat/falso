import { FakeOptions, fake } from './core';
import { data } from './datatype-datetime.json';

export function datatypeDatetime<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
