import { randBoolean } from './boolean';
import { fake, FakeOptions } from './core/core';
import { randMovie } from './movie';
import { randMovieCharacter } from './movie-character';
import { randNumber } from './number';
import { randSinger } from './singer';
import { randSnake } from './snake';
import { randUuid } from './uuid';
import { randWord } from './word';
import { randUser } from './user';
import { randAddress } from './address';
import { randProduct } from './product';
import { randFlightDetails } from './flight-details';
import { randCreditCard } from './credit-card';

export interface RandomJSONOptions extends FakeOptions {
  totalKeys?: number;
  minKeys?: number;
  maxKeys?: number;
}

const generateRandomValue = (): any => {
  const availableValuesGenerators = [
    randBoolean(),
    randNumber(),
    randNumber({ length: randNumber({ min: 1, max: 10 }) }),
    randSinger(),
    randSinger({ length: randNumber({ min: 1, max: 10 }) }),
    randMovie(),
    randMovie({ length: randNumber({ min: 1, max: 10 }) }),
    randMovieCharacter(),
    randMovieCharacter({ length: randNumber({ min: 1, max: 10 }) }),
    randWord(),
    randWord({ length: randNumber({ min: 1, max: 10 }) }),
    randSnake(),
    randSnake({ length: randNumber({ min: 1, max: 10 }) }),
    randUser(),
    randUser({ length: randNumber({ min: 1, max: 10 }) }),
    randAddress(),
    randAddress({ length: randNumber({ min: 1, max: 10 }) }),
    randProduct(),
    randProduct({ length: randNumber({ min: 1, max: 10 }) }),
    randFlightDetails(),
    randFlightDetails({ length: randNumber({ min: 1, max: 10 }) }),
    randCreditCard(),
    randCreditCard({ length: randNumber({ min: 1, max: 10 }) }),
  ];

  return availableValuesGenerators[
    randNumber({ min: 0, max: availableValuesGenerators.length - 1 })
  ];
};

/**
 * Generate a random JSON Object.
 *
 * @category Datatype
 *
 * @example
 * randJSON()
 *
 * @example
 *
 * randJSON({ totalKeys: 10 }) // If a fixed number of keys are required
 *
 * @example
 *
 * randJSON({ minKeys: 1, maxKeys: 10 }) // If a random number of keys are required
 *
 * @example
 *
 * randJSON({ length: 10 })
 *
 * @example
 *
 * randJSON({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randJSON<Options extends RandomJSONOptions = never>(
  options?: Options
) {
  const objectSize =
    options?.totalKeys ??
    randNumber({
      min: options?.minKeys || 1,
      max: options?.maxKeys || 99,
    });

  const factory = () => {
    const generatedObject: Record<string, unknown> = {};

    for (let index = 0; index < objectSize; index++) {
      generatedObject[randUuid().replace(/-/g, '')] = generateRandomValue();
    }

    return generatedObject;
  };

  return fake(factory, options, { uniqueComparer: checkUnique });
}

export function checkUnique(item: object, items: object[]): boolean {
  return !items.some((i) => JSON.stringify(i) === JSON.stringify(item));
}
