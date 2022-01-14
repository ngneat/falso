import { FakeOptions, fake, getRandomInRange } from './core';

// TODO - support more options
export function datatypeFloat<Options extends FakeOptions>(options?: Options) {
  return fake(() => getRandomInRange({ fraction: 2 }), options);
}
