import { fake, FakeOptions, getRandomInRange } from './core/core';
import { randFloat } from './float';

export interface HSLOptions extends FakeOptions {
  alpha?: boolean;
}

/**
 * Generate a random hsl color.
 *
 * @category colors
 *
 * @example
 *
 * randHsl()
 *
 * @example
 *
 * randHsl({ length: 3 })
 *
 * @example
 *
 * randHsl({ alpha: true }) // default is false
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * hsl(149, 83%, 83%)
 * hsl(9, 21%, 38%)
 * hsl(327, 32%, 54%)
 */

export function randHsl<Options extends HSLOptions = never>(options?: Options) {
  const factory = () => {
    const [h, s, l, a] = [
      getRandomInRange({ min: 0, max: 359, fraction: 0 }),
      getRandomInRange({ min: 0, max: 100, fraction: 0 }),
      getRandomInRange({ min: 0, max: 100, fraction: 0 }),
      randFloat({ min: 0.1, max: 1 }),
    ];

    return options?.alpha
      ? `hsla(${h}, ${s}%, ${l}%, ${a})`
      : `hsl(${h}, ${s}%, ${l}%)`;
  };

  return fake(factory, options);
}
