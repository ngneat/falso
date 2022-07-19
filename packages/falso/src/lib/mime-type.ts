import { FakeOptions, fake } from './core/core';
import { data } from './mime-type.json';

/**
 * Generate a random mime type.
 *
 * @category system
 *
 * @example
 *
 * randMimeType()
 *
 * @example
 *
 * randMimeType({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'application/vnd.lotus-approach'
 * 'application/vnd.wv.csp+wbxml'
 * 'application/font-tdpfr'
 */

export function randMimeType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
