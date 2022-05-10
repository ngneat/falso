import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';
import { dateIsUnique } from './core/unique-validators';

interface BetweenOptions extends FakeOptions {
  from: Date;
  to: Date;
}

/**
 * Generate a random date between ranges.
 *
 * @category date
 *
 * @example
 *
 * randBetweenDate({ from: new Date('10/07/2020'), to: new Date() })
 *
 * @example
 *
 * randBetweenDate({ from: new Date('10/07/2020'), to: new Date(), length: 10 })
 *
 * @example
 *
 * randBetweenDate({ from: new Date('10/07/2020'), to: new Date(), length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randBetweenDate<Options extends BetweenOptions = never>(
  options: Options
) {
  const from = options.from.getTime();
  const to = options.to.getTime();

  if (from >= to) {
    throw new Error('From must be before to');
  }

  const generator = () => {
    return new Date(
      randNumber({
        min: from,
        max: to,
      })
    );
  };

  return fake(generator, options, { uniqueComparer: dateIsUnique });
}
