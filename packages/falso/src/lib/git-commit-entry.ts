import { fake, FakeOptions } from './core/core';
import { randGitCommitSha } from './git-commit-sha';
import { randFullName } from './full-name';
import { randEmail } from './email';
import { randGitCommitMessage } from './git-commit-message';

/**
 * Generate a random git commit.
 *
 * @category git
 *
 * @example
 *
 * randGitCommitEntry()
 *
 * @example
 *
 * randGitCommitEntry({ length: 10 })
 *
 * @example
 *
 * randGitCommitEntry({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randGitCommitEntry<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    return `commit ${randGitCommitSha()}\\r\\nAuthor: ${randFullName()} <${randEmail()}>\\r\\nDate: ${new Date().toString()}\\r\\n\\r\\n${randGitCommitMessage()}`;
  }, options);
}
