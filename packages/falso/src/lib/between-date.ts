import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';

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
 * randBetweenDate({ from: Date, to: Date })
 *
 * @example
 *
 * randBetweenDate({ from: Date, to: Date, length: 10 })
 *
 */
export function randBetweenDate<Options extends BetweenOptions = never>(
  options: Options
) {
  const from = options.from.getTime();
  const to = options.to.getTime();

  if (from >= to) {
    throw new Error('from must be before to');
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
