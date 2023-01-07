import { fake, FakeOptions, randElement } from './core/core';
import { data } from './sports.json';
import { rand } from './rand';

export type Category = 'olympic' | 'winterOlympic' | 'outdoor';

export interface SportCategories extends FakeOptions {
  // This categories can be extended in the future
  category?: Category;
}

/**
 * Generate a random sports.
 *
 * @category sports
 *
 * @example
 *
 * randSports()
 *
 * @example
 *
 * randSports({ category : 'olympic' })
 *
 * @example
 *
 * randSports({ length: 10 })
 *
 */
export function randSports<Options extends SportCategories = never>(
  options?: Options
) {
  const category =
    options?.category ?? rand(['olympic', 'outdoor', 'winterOlympic'] as const);

  const factory = () => randElement(data[category]);

  return fake(factory, options);
}
