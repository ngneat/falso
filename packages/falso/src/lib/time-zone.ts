import { FakeOptions, fake } from './core';
import { data } from './time-zone.json';

export function timeZone<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
