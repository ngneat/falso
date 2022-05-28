import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';

interface BetweenOptions extends FakeOptions {
  from: Date | string;
  to: Date | string;
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
 */
export function randBetweenDate<Options extends BetweenOptions = never>(
  options: Options
) {
  const from = new Date(options.from).getTime();
  const to = new Date(options.to).getTime();

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

  return fake(generator, options);
}
