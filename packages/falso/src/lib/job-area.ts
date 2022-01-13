import { FakeOptions, fake } from './core';
import { data } from './job-area.json';

export function jobArea<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
