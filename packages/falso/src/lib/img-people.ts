import { FakeOptions, fake } from './core';
import { data } from './img-people.json';

export function imgPeople<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
