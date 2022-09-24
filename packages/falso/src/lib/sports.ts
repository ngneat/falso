import { fake, FakeOptions, getRandomInRange, randElement } from './core/core';
import { data } from './sports.json';

export interface SportCategories extends FakeOptions {
  // This categories can be extended in the future
  category?: 'olympic' | 'outdoor' | 'winterOlympic';
}

const categoriesCount = Object.keys(data)?.length;

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
 * @example
 *
 * randSports({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randSports<Options extends SportCategories = never>(
  options?: Options
) {
  const sportsData: { [category: string]: string[] } = data;
  const category: string | undefined = options?.category;

  if (!categoriesCount) {
    throw Error('No Sport Categories found');
  }

  if (category && !sportsData[category]) {
    throw `No Sports found for selected category (${category})`;
  }

  const factory: () => string = () => {
    if (category) {
      return randElement(sportsData[category]);
    }

    const randIndex = getRandomInRange({
      min: 0,
      max: categoriesCount - 1,
      fraction: 0,
    });
    const randomOrigin = Object.keys(sportsData)[randIndex];

    return randElement(sportsData[randomOrigin]);
  };

  return fake(factory, options);
}
