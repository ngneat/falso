import { FakeOptions, fake, rand } from './core';

export function datatypeBoolean<Options extends FakeOptions>(
  options?: Options
) {
  return fake(() => rand([true, false]), options);
}
