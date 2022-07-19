import { FakeOptions, fake } from './core/core';
import { data } from './skill.json';

/**
 * Generate a random skill.
 *
 * @category Person
 *
 * @example
 *
 * randSkill()
 *
 * @example
 *
 * randSkill({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randSkill<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
