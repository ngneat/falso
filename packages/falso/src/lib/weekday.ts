import { fake, FakeOptions } from './core';
import { data } from './weekday.json';

export function weekday<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
