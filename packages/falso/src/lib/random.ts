import seedRandom from 'seedrandom';

let prng = seedRandom();

/**
 * Create a seed.
 *
 * @category general
 *
 * @example
 *
 * randRandom()
 *
 */
export function random() {
  return prng();
}

export function seed(value?: string) {
  prng = seedRandom(value);
}
