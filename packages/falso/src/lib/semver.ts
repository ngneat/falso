import { FakeOptions, fake } from './core/core';
import { randNumber } from './number';

export interface SemverOptions extends FakeOptions {
  prefix?: string;
}

/**
 * Generate a random semantic version.
 *
 * @category internet
 *
 * @example
 *
 * randSemver()
 *
 * @example
 *
 * randSemver({ prefix: 'v' })
 *
 * @example
 *
 * randSemver({ length: 10 })
 *
 * @example
 *
 * randSemver({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randSemver<Options extends SemverOptions = never>(
  options?: Options
) {
  return fake(() => {
    const version = Array.from({ length: 3 }, () =>
      randNumber({ min: 0, max: 20 })
    ).join('.');

    return `${options?.prefix || ''}${version}`;
  }, options);
}
