import { FakeOptions, fake } from './core';
import { data } from './vehicle.json';

export function vehicle<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
