import { fake, FakeOptions, getRandomInRange, randElement } from './core/core';

/**
 * Generate a random account.
 *
 * @category finance
 *
 * @example
 *
 * randAccount()
 *
 * @example
 *
 * randAccount({ length: 10 })
 *
 */
export function randAccount<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory: () => string = () => {
    return '########'.replace(/#/g, () => {
      return getRandomInRange({ min: 0, max: 9 }).toString();
    });
  };

  return fake(factory, options);
}
