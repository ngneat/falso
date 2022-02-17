import { randBoolean } from './boolean';
import { FakeOptions } from './core/core';
import { randMovie } from './movie';
import { randMovieCharacter } from './movie-character';
import { randNumber } from './number';
import { randSinger } from './singer';
import { randSnake } from './snake';
import { randUuid } from './uuid';
import { randWord } from './word';

export interface RandomJSONOptions extends FakeOptions {
  min?: number;
  max?: number;
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
  ];

  return availableValuesGenerators[
    randNumber({ min: 0, max: availableValuesGenerators.length - 1 })
  ];
};

const generateRandomObject = (length: number) => {
  let o = {};

  for (let index = 0; index < length; index++) {
    o = Object.assign(o, {
      [randUuid().replace(/-/g, '')]: generateRandomValue(),
    });
  }

  return o;
};

/**
 * Generate a random JSON Object.
 *
 * @category Datatype
 *
 * @example
 * randJSON()
 *
 * @example If a fixed number of keys are required
 *
 * randJSON({ length: 10 })
 *
 * @example If a random number of keys are required
 *
 * randJSON({ min: 1, max: 10 })
 */
export function randJSON<Options extends RandomJSONOptions = never>(
  options?: Options
) {
  let objectSize = randNumber({
    min: options?.min || 1,
    max: options?.max || 99,
  });

  if (options?.length) objectSize = options.length;

  return generateRandomObject(objectSize);
}
