import { FakeOptions, fake } from './core';
import { data } from './crocodilia.json';

export function crocodilia<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
