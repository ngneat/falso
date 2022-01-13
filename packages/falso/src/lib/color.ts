import { FakeOptions, fake } from './core';
import { hex } from './hex';

export function color<Options extends FakeOptions>(options?: Options) {
  return fake(() => hex(), options);
}
