import { randAmericanFootballTeam } from './american-football-team';
import { randBaseballTeam } from './baseball-team';
import { randBasketballTeam } from './basketball-team';
import { fake, FakeOptions, randElement } from './core/core';
import { randFootballTeam } from './football-team';
import { randIceHockeyTeam } from './ice-hockey-team';

/**
 * Generate a random sports team.
 *
 * @category sports
 *
 * @example
 *
 * randSportsTeam()
 *
 * @example
 *
 * randSportsTeam({ length: 10 })
 *
 * @example
 *
 * randSportsTeam({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randSportsTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  const teamNameFunctions = [
    randAmericanFootballTeam(),
    randBaseballTeam(),
    randBasketballTeam(),
    randFootballTeam(),
    randIceHockeyTeam(),
  ];

  return fake(() => randElement(teamNameFunctions), options);
}
