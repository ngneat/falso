import { fake, FakeOptions } from './core/core';
import { randDomainSuffix } from './domain-suffix';
import { randWord } from './word';

/**
 * Generate a random url.
 *
 * @category internet
 *
 * @example
 *
 * randUrl()
 *
 * @example
 *
 * randUrl({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randUrl<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    return `${fake(['http', 'https'])}://${randWord()}.${randDomainSuffix()}`;
  }, options);
}
