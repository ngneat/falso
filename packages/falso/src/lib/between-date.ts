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
 * randBetweenDate({ from: new Date('10/07/1988'), to: new Date('10/07/1989') })
 *
 * @example
 *
 * randBetweenDate({ from: new Date('10/07/1988'), to: new Date('10/07/1989'), length: 10 })
 *
 */
export function randBetweenDate<Options extends BetweenOptions = never>(
  options: Options
) {
  // TODO: RS - For now I have added default dates to fix the docs. We should look into ways to use the examples from the JSDocs for LIVE EDITOR functions
  const from = options?.from?.getTime() ?? new Date('10/07/1988').getTime();
  const to = options?.to?.getTime() ?? new Date('11/07/1989').getTime();

  if (!from) {
    throw new Error('From date must be passed');
  }

  if (!to) {
    throw new Error('To date must be passed');
  }

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
