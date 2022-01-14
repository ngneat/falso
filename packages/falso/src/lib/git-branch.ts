import { FakeOptions, fake } from './core/core';
import { data } from './git-branch.json';

/**
 * Generate a random git-branch.
 *
 * @category TBD
 *
 * @example
 *
 * gitBranch()
 *
 * @example
 *
 * gitBranch({ length: 10 })
 *
 */
export function gitBranch<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
