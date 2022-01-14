import { FakeOptions, fake, getRandomInRange } from './core';

export function datatypeNumber<Options extends FakeOptions>(options?: Options) {
  return fake(() => getRandomInRange(), options);
}
