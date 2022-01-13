import { FakeOptions, fake, rand } from './core';
import { data } from './semver.json';

export interface SemverOptions extends FakeOptions {
  prefix?: string;
  // TODO add ranges
}

// TODO use number generator
export function semver<Options extends SemverOptions>(options?: Options) {
  return fake(() => `${options?.prefix || ''}${rand(data)}`, options);
}
