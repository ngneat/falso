import { fake, FakeOptions } from './core/core';
import { data } from './superhero.json';
import { rand, randUuid } from '@ngneat/falso';

export type ComicBookCompany = 'Marvel' | 'DC';

export interface SuperheroOptions extends FakeOptions {
  company?: ComicBookCompany;
}

export interface Superhero {
  id?: string;
  realName: string;
  alterEgo: string;
  company: string;
}

export interface SuperheroEntity extends Superhero {
  id: string;
}

/**
 * Generate a random superhero.
 *
 * @category Superhero
 *
 * @example
 *
 * randSuperhero()
 *
 * @example
 *
 * randSuperhero({ length: 10 })
 *
 */
export function randSuperhero<Options extends SuperheroOptions>(
  options?: Options
) {
  const filteredData: SuperheroEntity[] = data
    .filter((hero) =>
      options?.company ? hero.company === options.company : true
    )
    .map((hero: Superhero) => {
      return {
        ...hero,
        id: randUuid(),
      };
    });

  return fake(filteredData, options);
}

/**
 * Generate a random superhero name.
 *
 * @category Superhero
 *
 * @example
 *
 * randSuperheroName()
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
