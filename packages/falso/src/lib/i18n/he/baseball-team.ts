import { FakeOptions, fake } from '../../core/core';
import { data } from './baseball-team.18n.json';

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
 */
export function randBaseballTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
