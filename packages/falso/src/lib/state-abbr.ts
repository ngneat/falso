import { FakeOptions, fake } from './core';
import { data } from './state-abbr.json';

export function stateAbbr<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
