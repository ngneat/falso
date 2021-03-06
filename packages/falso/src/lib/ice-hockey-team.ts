import { FakeOptions, fake } from './core/core';
import { data } from './ice-hockey-team.json';

/**
 * Generate a random ice hockey team.
 *
 * @category sports
 *
 * @example
 *
 * randIceHockeyTeam()
 *
 * @example
 *
 * randIceHockeyTeam({ length: 10 })
 *
 */
export function randIceHockeyTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
