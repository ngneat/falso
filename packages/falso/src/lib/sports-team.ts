import { FakeOptions, fake } from './core/core';
import { rand } from './rand';
import { randAmericanFootballTeam } from './american-football-team';
import { randBaseballTeam } from './baseball-team';
import { randFootballTeam } from './football-team';
import { randIceHockeyTeam } from './ice-hockey-team';
import { randBasketballTeam } from './basketball-team';

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

  return fake(() => rand(teamNameFunctions), options);
}
