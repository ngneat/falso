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
 * randHsl({ alpha: true }) // default is false
 *
 * @example
 *
 * randHsl({ length: 3 })
 *
 * @example
 *
 * randHsl({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
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
