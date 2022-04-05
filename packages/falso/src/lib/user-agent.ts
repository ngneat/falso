import { FakeOptions, fake } from './core/core';
import { data } from './user-agent.json';

/**
 * Generate a random user agent.
 *
 * @category internet
 *
 * @example
 *
 * randUserAgent()
 *
 * @example
 *
 * randUserAgent({ length: 10 })
 *
 * @example
 *
 * randUserAgent({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randUserAgent<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
