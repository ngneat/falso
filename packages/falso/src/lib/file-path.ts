import { FakeOptions, fake } from './core/core';
import { data } from './file-path.json';

/**
 * Generate a random file path.
 *
 * @category system
 *
 * @example
 *
 * randFilePath()
 *
 * @example
 *
 * randFilePath({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * '/opt/bin/turn_key_bedfordshire_contingency.mts.acu'
 * '/lib/niches_account_springs.w3d.gtm'
 * '/Applications/plains_fresh_hack.s.onepkg'
 */

export function randFilePath<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
