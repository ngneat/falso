import { fake, FakeOptions } from './core';
import { randomSequence } from './random-sequence';

export function bitcoinAddress<Options extends FakeOptions>(options?: Options) {
  return fake(() => randomSequence({ size: 33 }), options);
}
