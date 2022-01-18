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
 */
export function random() {
  return prng();
}

/**
 * Sets and Resets random seed.
 *
 * @category general
 *
 * @example
 *
 * seed()
 *
 * @example
 *
 * seed('some-constant-seed')
 */
export function seed(value?: string) {
  prng = seedRandom(value);
}
