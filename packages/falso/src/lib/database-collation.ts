import { FakeOptions, fake } from './core';
import { data } from './database-collation.json';

export function databaseCollation<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
