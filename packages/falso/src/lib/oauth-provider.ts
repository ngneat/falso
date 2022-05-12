import { FakeOptions, fake } from './core/core';
import { data } from './oauth-provider.json';

/**
 * Generate a random OAuth provider.
 *
 * @category Internet
 *
 * @example
 *
 * randOAuthProvider()
 *
 * @example
 *
 * randOAuthProvider({ length: 10 })
 *
 * @example
 *
 * randOAuthProvider({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randOAuthProvider<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
