import { FakeOptions, fake } from './core';
import { data } from './state.json';

export function state<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
