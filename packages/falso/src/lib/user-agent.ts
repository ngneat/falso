import { FakeOptions, fake } from './core/core';
import { data } from './user-agent.json';

// TODO - generate programmatically
export function randUserAgent<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
