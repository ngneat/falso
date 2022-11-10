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
 * @automaticallyGeneratedExamples
 * @example
 * { name: 'Triller', link: 'https://www.triller.co/' }
 * { name: 'Periscope', link: 'https://www.periscope.tv/' }
 * { name: 'Vimeo', link: 'https://vimeo.com/' }
 */

export function randSocial<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
