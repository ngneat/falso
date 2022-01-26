import { fake, FakeOptions } from './core/core';
import { data } from './superhero.json';
import { rand, randUuid } from '@ngneat/falso';

export type ComicBookCompany = 'Marvel' | 'DC';

export interface SuperheroOptions extends FakeOptions {
  company?: ComicBookCompany;
}

export interface Superhero {
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
 * @category entities
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
export function randSuperhero<Options extends SuperheroOptions = never>(
  options?: Options
) {
  const factory: () => SuperheroEntity = () => {
    const heroes: Superhero[] = options?.company
      ? data.filter(({ company }) => company === options.company)
      : data;

    return {
      ...rand(heroes),
      id: randUuid(),
    };
  };

  return fake(factory, options);
}
