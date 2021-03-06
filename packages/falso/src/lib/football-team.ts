import { FakeOptions, fake } from './core/core';
import { data } from './football-team.json';

/**
 * Generate a random football team.
 *
 * @category sports
 *
 * @example
 *
 * randFootballTeam()
 *
 * @example
 *
 * randFootballTeam({ length: 10 })
 *
 */
export function randFootballTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
