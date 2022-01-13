import { FakeOptions, fake, getRandomInRange } from './core';

export function latitude<Options extends FakeOptions>(options?: Options) {
  return fake(
    () =>
      getRandomInRange({
        min: -90,
        max: 90,
        fraction: 3,
      }),
    options
  );
}
