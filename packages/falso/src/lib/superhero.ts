import { fake, FakeOptions, randElement } from './core/core';
import { data } from './superhero.json';
import { randUuid } from './uuid';

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
 * @category entities, comic book
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
  const heroes: Superhero[] = options?.company
    ? data.filter(({ company }) => company === options.company)
    : data;

  const factory: () => SuperheroEntity = () => {
    return {
      ...randElement(heroes),
      id: randUuid(),
    };
  };

  return fake(factory, options);
}
