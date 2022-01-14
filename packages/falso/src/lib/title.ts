import { FakeOptions, fake } from './core/core';
import { data } from './title.json';

// TODO job title?
export function title<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
