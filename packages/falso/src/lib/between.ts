import { fake, FakeOptions } from './core/core';

interface BetweenOptions extends FakeOptions {
  from: Date;
  to: Date;
}

/**
 * Generate a random between.
 *
 * @category TBD
 *
 * @example
 *
 * between()
 *
 * @example
 *
 * between({ length: 10 })
 *
 */
/**
 * Generate a random date between ranges.
 *
 * @category Date
 *
 * @example
 *
 * month()
 *
 * @example
 *
 * month({ from: Date, to: Date })
 *
 * @example
 *
 * month({ length: 10 })
 *
 */
export function between<Options extends BetweenOptions>(options: Options) {
  if (options.from.getTime() >= options.to.getTime()) {
    throw new Error('from must be before to');
  }

  const data = new Date(
    Math.floor(
      Math.random() * (options.to.getTime() - options.from.getTime())
    ) + options.from.getTime()
  );
  return fake(() => data, options);
}
