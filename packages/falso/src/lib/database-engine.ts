import { FakeOptions, fake } from './core';
import { data } from './database-engine.json';

export function databaseEngine<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
