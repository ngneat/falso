import { FakeOptions, fake } from './core';
import { data } from './job-title.json';

export function jobTitle<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
