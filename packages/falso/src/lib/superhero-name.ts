import { fake } from './core/core';
import { data } from './superhero.json';
import { rand } from './rand';
import { Superhero, SuperheroOptions } from './superhero';

/**
 * Generate a random superhero name.
 *
 * @category comic book
 *
 * @example
 *
 * randSuperheroName()
 *
 * @example
 *
 * randSuperhero({ company: 'Marvel' })
 *
 * @example
 *
 * randSuperheroName({ length: 10 })
 *
 */
export function randSuperheroName<Options extends SuperheroOptions>(
  options?: Options
) {
  const factory: () => string = () => {
    const heroes = data
      .filter((hero: Superhero) =>
        options?.company ? hero.company === options.company : true
      )
      .map((hero: Superhero) => hero.alterEgo);

    return rand(heroes);
  };

  return fake(factory, options);
}
