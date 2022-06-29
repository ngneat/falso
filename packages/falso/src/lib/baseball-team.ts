import { FakeOptions, fake } from './core/core';
import { data } from './baseball-team.json';

/**
 * Generate a random baseball team.
 *
 * @category sports
 *
 * @example
 *
 * randBaseballTeam()
 *
 * @example
 *
 * randBaseballTeam({ length: 10 })
 *
 * @example
 *
 * randBaseballTeam({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randBaseballTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
