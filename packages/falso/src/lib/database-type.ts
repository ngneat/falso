import { FakeOptions, fake } from './core';
import { data } from './database-type.json';

export function databaseType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
