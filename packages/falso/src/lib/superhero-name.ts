import { fake, randElement } from './core/core';
import { Superhero, SuperheroOptions } from './superhero';
import { data } from './superhero.json';

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
  const heroes: Superhero[] = options?.company
    ? data.filter(({ company }) => company === options.company)
    : data;
  const factory: () => string = () => {
    return randElement(heroes).alterEgo;
  };

  return fake(factory, options);
}
