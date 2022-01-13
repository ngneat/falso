import { FakeOptions, fake } from './core';
import { data } from './database-column.json';

export function databaseColumn<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
