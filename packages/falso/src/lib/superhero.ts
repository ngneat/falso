import { fake, FakeOptions } from './core/core';
import { data } from './superhero.json';
import { randUuid } from '@ngneat/falso';

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
 * @category entity
 *
 * @example
 *
 * randSuperhero()
 *
 * @example
 *
 * randSuperhero({ company: 'Marvel' })
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
