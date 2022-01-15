import seedRandom from 'seedrandom';

let prng = seedRandom();

/**
 * Generate a random random.
 *
 * @category general
 *
 * @example
 *
 * randRandom()
 *
 * @example
 *
 * randRandom({ length: 10 })
 *
 */
export function random() {
  return prng();
}

export function seed(value?: string) {
  prng = seedRandom(value);
}
