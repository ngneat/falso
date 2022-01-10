import * as seedRandom from 'seedrandom';

let prng = seedRandom();

export function random() {
  return prng();
}

export function seed(value?: string) {
  prng = seedRandom(value);
}
