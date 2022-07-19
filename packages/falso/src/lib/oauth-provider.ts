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
 *
 * @automaticallyGeneratedExamples
 */

export function randOAuthProvider<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
