import { fake, FakeOptions } from './core/core';
import { randomNumber } from './random-number';

interface BetweenOptions extends FakeOptions {
  from: Date;
  to: Date;
}

/**
 * Generate a random date between ranges.
 *
 * @category Date
 *
 * @example
 *
 * between()
 *
 * @example
 *
 * between({ from: Date, to: Date })
 *
 * @example
 *
 * between({ length: 10 })
 *
 */
export function between<Options extends BetweenOptions>(options: Options) {
  const from = options.from.getTime();
  const to = options.to.getTime();

  if (from >= to) {
    throw new Error('from must be before to');
  }

  const generator = () => {
    return new Date(
      randomNumber({
        min: from,
        max: to,
      })
    );
  };

  return fake(generator, options);
}
