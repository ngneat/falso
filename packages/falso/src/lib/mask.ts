import { fake, FakeOptions, getRandomInRange } from './core/core';
import { randAlpha } from './alpha';

interface MaskOptions extends FakeOptions {
  mask?: string;
  char?: string;
  digit?: string;
}

/**
 * Generate a random mask.
 *
 * @category Finance
 *
 * @example
 *
 * randMask()
 *
 * @example
 *
 * randMask({ mask: '@#### @##' })
 *
 * @example
 *
 * randMask({ length: 10 })
 *
 */
export function randMask<Options extends MaskOptions = never>(
  options?: Options
) {
  return fake(() => {
    const [mask, char, digit] = [
      options?.mask ?? '@##@#',
      options?.char ?? '@',
      options?.digit ?? '#',
    ];

    return mask
      .split('')
      .map((item) => {
        if (item === char) return randAlpha();
        else if (item === digit)
          return getRandomInRange({ min: 0, max: 9, fraction: 0 });
        else return item;
      })
      .join('');
  }, options);
}
