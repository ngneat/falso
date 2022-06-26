import { fake, FakeOptions, getRandomInRange } from './core/core';

export interface AccountOptions extends FakeOptions {
  accountLength?: number;
}

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
 * randAccount({ accountLength: 12 }) // default is 9
 *
 * @example
 *
 * randAccount({ length: 10 })
 *
 */
export function randAccount<Options extends AccountOptions = never>(
  options?: Options
) {
  const accountLength: number = options?.accountLength ?? 9;

  const factory: () => string = () => {
    return Array(accountLength)
      .fill('#')
      .join('')
      .replace(/#/g, () => {
        return getRandomInRange({ min: 0, max: 9 }).toString();
      });
  };

  return fake(factory, options);
}
