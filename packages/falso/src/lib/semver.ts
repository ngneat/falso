import { FakeOptions, fake } from './core/core';
import { data } from './semver.json';
import { rand } from './rand';

export interface SemverOptions extends FakeOptions {
  prefix?: string;
  // TODO add ranges
}

// TODO - generate programmatically
export function randSemver<Options extends SemverOptions>(options?: Options) {
  return fake(() => `${options?.prefix || ''}${rand(data)}`, options);
}
