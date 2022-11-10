import { randFloat } from './float';
import { fake, FakeOptions, getRandomInRange } from './core/core';

export interface RGBOptions extends FakeOptions {
  alpha?: boolean;
}

/**
 * Generate a random rgb.
 *
 * @category colors
 *
 * @example
 *
 * randRgb()
 *
 * @example
 *
 * randRgb({ alpha: true }) // default is false
 *
 * @example
 *
 * randRgb({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * rgb(197, 87, 72)
 * rgb(126, 83, 138)
 * rgb(166, 45, 239)
 */

export function randRgb<Options extends RGBOptions = never>(options?: Options) {
  const factory = () => {
    const [r, g, b, a] = [
      getRandomInRange({ min: 0, max: 255 }),
      getRandomInRange({ min: 0, max: 255 }),
      getRandomInRange({ min: 0, max: 255 }),
      randFloat({ min: 0.1, max: 1 }),
    ];

    return options?.alpha
      ? `rgba(${r}, ${g}, ${b}, ${a})`
      : `rgb(${r}, ${g}, ${b})`;
  };

  return fake(factory, options);
}
