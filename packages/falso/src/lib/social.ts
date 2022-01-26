import { FakeOptions, fake } from './core/core';
import { data } from './social.json';

/**
 * Generate random social network
 *
 * @category internet
 *
 * @example
 *
 * randSocial()
 *
 * @example
 *
 * randSocial({ length: 2 })
 *
 *
 */

export function randSocial<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
