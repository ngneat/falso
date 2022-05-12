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
 * @example
 *
 * randBasketballTeam({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randBasketballTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
