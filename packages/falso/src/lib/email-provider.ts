import { FakeOptions, fake } from './core/core';
import { data } from './email-provider.json';

/**
 * Generate a random email provider.
 *
 * @category Internet
 *
 * @example
 *
 * randEmailProvider()
 *
 * @example
 *
 * randEmailProvider({ length: 10 })
 *
 * @example
 *
 * randEmailProvider({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randEmailProvider<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
