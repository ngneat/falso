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
 */
export function randOAuthProvider<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
