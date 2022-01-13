import { FakeOptions, fake } from './core';

export function randomBoolean<Options extends FakeOptions>(options?: Options) {
  return fake([true, false], options);
}
