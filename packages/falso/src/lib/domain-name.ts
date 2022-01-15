import { FakeOptions, fake } from './core/core';
import { data } from './domain-name.json';

/**
 * Generate a random domain name.
 *
 * @category Internet
 *
 * @example
 *
 * randDomainName()
 *
 * @example
 *
 * randDomainName({ length: 10 })
 *
 */
export function randDomainName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
