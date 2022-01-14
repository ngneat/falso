import seedRandom from 'seedrandom';

let prng = seedRandom();

/**
 * Generate a random random.
 *
 * @category TBD
 *
 * @example
 *
 * random()
 *
 * @example
 *
 * random({ length: 10 })
 *
 */
export function random() {
  return prng();
}

export function seed(value?: string) {
  prng = seedRandom(value);
}
