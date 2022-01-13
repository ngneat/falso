import { fake, FakeOptions } from './core';
import { data } from './abbreviation.json';

export function abbreviation<O extends FakeOptions>(options?: O) {
  return fake(data, options);
}
