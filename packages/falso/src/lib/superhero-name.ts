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
export function randSuperheroName<Options extends SuperheroOptions = never>(
  options?: Options
) {
  const factory: () => string = () => {
    const heroes: Superhero[] = options?.company
      ? data.filter(({ company }) => company === options.company)
      : data;

    return rand(heroes).alterEgo;
  };

  return fake(factory, options);
}
