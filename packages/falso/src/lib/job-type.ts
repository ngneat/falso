import { FakeOptions, fake } from './core';
import { data } from './job-type.json';

export function jobType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
