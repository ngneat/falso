import { fake, FakeOptions, randElement } from './core/core';
import { data } from './month.json';

export interface MonthOptions extends FakeOptions {
  abbreviation?: boolean;
}

/**
 * Generate a random month.
 *
 * @category date
 *
 * @example
 *
 * randMonth()
 *
 * @example
 *
 * randMonth({ abbreviation: true })
 *
 *
 * @example
 *
 * randMonth({ length: 10 })
 *
 */
export function randMonth<Options extends MonthOptions = never>(
  options?: Options
) {
  const monthData: string[] = data;
  const abbreviation: boolean | undefined = options?.abbreviation;
  const factory: () => string = () => {
    const randMonth: string = randElement(monthData);
    if (abbreviation) {
      return randMonth.slice(0, 3);
    }
    return randMonth;
  };

  return fake(factory, options);
}
