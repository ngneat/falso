import { fake, FakeOptions, getRandomInRange, randElement } from './core/core';
import { data } from './food.json';
import { objectKeys } from './utils/objectKeys';

export type FoodOrigin =
  | 'china'
  | 'italy'
  | 'india'
  | 'mexico'
  | 'japan'
  | 'france'
  | 'lebanon'
  | 'thailand'
  | 'greece'
  | 'turkey'
  | 'spain'
  | 'venezuela'
  | 'chile'
  | 'argentina'
  | 'colombia'
  | 'ecuador'
  | 'peru'
  | 'el salvador'
  | 'romania';

export interface FoodOptions extends FakeOptions {
  origin?: FoodOrigin;
}

const totalOrigins = Object.keys(data)?.length;

/**
 * Generate a random food name.
 *
 * @category Food
 *
 * @example
 *
 * randFood()
 *
 * @example
 *
 * randFood({ origin: 'italy' })
 *
 * @example
 *
 * randFood({ length: 10 })
 *
 */
export function randFood<Options extends FoodOptions = never>(
  options?: Options
) {
  const foodData: { [key in FoodOrigin]: string[] } = data;
  const origin: FoodOrigin | undefined = options?.origin;

  if (!totalOrigins) {
    throw 'No foods found';
  }

  if (origin && !foodData[origin]) {
    throw 'No foods found for selected origin';
  }

  const factory: () => string = () => {
    if (origin) {
      return randElement(foodData[origin]);
    }

    const originIndex = getRandomInRange({
      min: 0,
      max: totalOrigins - 1,
    });
    const randomOrigin = objectKeys(foodData)[originIndex];

    return randElement(foodData[randomOrigin]);
  };

  return fake(factory, options);
}
