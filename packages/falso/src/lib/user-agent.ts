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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Mozilla/5.0 (Windows; U; Windows NT 6.0) AppleWebKit/538.2.0 (KHTML, like Gecko) Chrome/32.0.862.0 Safari/538.2.0'
 * 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 5.2; Trident/4.1; .NET CLR 1.3.78921.4)'
 * 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_9_8 rv:3.0; RU) AppleWebKit/537.2.2 (KHTML, like Gecko) Version/7.1.6 Safari/537.2.2'
 */

export function randUserAgent<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
