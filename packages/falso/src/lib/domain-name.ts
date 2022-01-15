import { fake, FakeOptions } from './core/core';
import { randDomainSuffix } from './domain-suffix';
import { randWord } from './word';

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
  return fake(() => `${randWord()}.${randDomainSuffix()}`, options);
}
