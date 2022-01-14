import { FakeOptions, fake } from './core';
import { data } from './user-agent.json';

// TODO - generate programmatically
export function userAgent<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
