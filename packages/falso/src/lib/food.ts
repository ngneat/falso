import { fake, FakeOptions, getRandomInRange, randElement } from './core/core';
import { data } from './food.json';

export type FoodOrigin =
  | 'china'
  | 'italy'
  | 'india'
  | 'mexico'
  | 'japan'
  | 'france'
  | 'lebanon'
  | 'thailand'
  | 'romania'
  | 'greece'
  | 'turkey'
  | 'spain'
  | 'venezuela'
  | 'argentina'
  | 'colombia'
  | 'chile'
  | 'peru'
  | 'el salvador'
  | 'ecuador';

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
 * @example
 *
 * randFood({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randFood<Options extends FoodOptions = never>(
  options?: Options
) {
  const foodData: { [origin: string]: string[] } = data;
  const origin: string | undefined = options?.origin;

  if (!totalOrigins) {
    throw new Error('No foods found');
  }

  if (origin && !foodData[origin]) {
    throw Error('No foods found for selected origin');
  }

  const factory: () => string = () => {
    if (origin) {
      return randElement(foodData[origin]);
    }

    const originIndex = getRandomInRange({
      min: 0,
      max: totalOrigins - 1,
    });
    const randomOrigin = Object.keys(foodData)[originIndex];

    return randElement(foodData[randomOrigin]);
  };

  return fake(factory, options);
}
