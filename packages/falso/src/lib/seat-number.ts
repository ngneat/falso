import { FakeOptions, fake, getRandomInRange } from './core/core';
import { rand } from './rand';

/**
 * Generate a random seat number.
 *
 * @category flight
 *
 * @example
 *
 * randSeatNumber()
 *
 * @example
 *
 * randSeatNumber({ length: 10 })
 *
 */
export function randSeatNumber<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    return `${getRandomInRange({ min: 1, max: 33 })}${rand([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ])}`;
  };

  return fake(factory, options);
}
