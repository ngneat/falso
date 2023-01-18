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
 */
export function randSportsTeam<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    const teamNameFunctions = [
      randAmericanFootballTeam,
      randBaseballTeam,
      randBasketballTeam,
      randFootballTeam,
      randIceHockeyTeam,
    ];

    return randElement(teamNameFunctions)();
  };

  return fake(factory, options);
}
