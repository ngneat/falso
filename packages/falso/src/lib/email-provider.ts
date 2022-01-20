import { FakeOptions, fake } from './core/core';
import { data } from './email-provider.json';

/**
 * Generate a random email provider.
 *
 * @category Email
 *
 * @example
 *
 * randEmailProvider()
 *
 * @example
 *
 * randEmailProvider({ length: 10 })
 *
 */
export function randEmailProvider<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
