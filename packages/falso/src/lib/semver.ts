import { FakeOptions, fake, rand } from './core';
import { data } from './semver.json';

export interface SemverOptions extends FakeOptions {
  prefix?: string;
  // TODO add ranges
}

// TODO - generate programmatically
export function semver<Options extends SemverOptions>(options?: Options) {
  return fake(() => `${options?.prefix || ''}${rand(data)}`, options);
}
