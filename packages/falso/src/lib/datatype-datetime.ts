import { FakeOptions, fake } from './core';
import { data } from './datatype-datetime.json';

// TODO - generate programmatically
export function datatypeDatetime<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
