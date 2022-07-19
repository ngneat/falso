import seedRandom from 'seedrandom';

let prng = seedRandom();

/**
 * Create a seed.
 *
 * @category general
 *
 * @example
 *
 * random()
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 0.14991954812181882
 * 0.8425426058803052
 * 0.07010227748271382
 */

export function seed(value?: string) {
  prng = seedRandom(value);
}
