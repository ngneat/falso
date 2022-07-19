import { FakeOptions, fake } from './core/core';
import { data } from './domain-suffix.json';

/**
 * Generate a random domain suffix.
 *
 * @category Internet
 *
 * @example
 *
 * randDomainSuffix()
 *
 * @example
 *
 * randDomainSuffix({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'org'
 * 'biz'
 * 'com'
 */

export function randDomainSuffix<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
