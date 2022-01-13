import { FakeOptions, fake } from './core';
import { data } from './job-descriptor.json';

export function jobDescriptor<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
