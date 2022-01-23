import { FakeOptions, fake } from './core/core';
import { data } from './social.json';

/**
 * Generate random SocialNetwork
 *
 * @category Social
 *
 * @example
 *
 * randSocial()
 *
 * @example
 *
 * randSocial({length: 2})
 *
 * @returns
 *
 * An object, or list of object in format object.name, object.link
 *
 */

export function randSocial<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
