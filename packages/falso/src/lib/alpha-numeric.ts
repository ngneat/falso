import { FakeOptions, fake } from './core/core';
import { randBoolean } from './boolean';
import { randAlpha } from './alpha';
import { randNumber } from './number';

/**
 * Get a random alpha or numeric.
 *
 * @category text
 *
 * @example
 *
 * randAlphaNumeric()
 *
 * @example
 *
 * randAlphaNumeric({ length: 3 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * o
 * e
 * 9
 */

export function randAlphaNumeric<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(
    () => (randBoolean() ? randAlpha() : randNumber({ min: 0, max: 9 })),
    options
  );
}
