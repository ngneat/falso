import { FakeOptions, fake } from './core/core';
import { data } from './basketball-team.json';

/**
 * Generate a random basketball team.
 *
 * @category sports
 *
 * @example
 *
 * randBasketballTeam()
 *
 * @example
 *
 * randBasketballTeam({ length: 10 })
 *
 */
export function randBasketballTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
