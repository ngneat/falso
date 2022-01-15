import { FakeOptions, fake } from './core/core';
import { data } from './semver.json';
import { rand } from './rand';

export interface SemverOptions extends FakeOptions {
  prefix?: string;
  // TODO add ranges
}

/**
 * Generate a random sem version.
 *
 * @category internet
 *
 * @example
 *
 * randSemver()
 *
 * @example
 *
 * randSemver({ length: 10 })
 *
 */
export function randSemver<Options extends SemverOptions>(options?: Options) {
  return fake(() => `${options?.prefix || ''}${rand(data)}`, options);
}
