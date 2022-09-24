import { FakeOptions, fake } from './core/core';
import { data } from './git-branch.json';

/**
 * Generate a random git branch.
 *
 * @category git
 *
 * @example
 *
 * randGitBranch()
 *
 * @example
 *
 * randGitBranch({ length: 10 })
 *
 * @example
 *
 * randGitBranch({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randGitBranch<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
