import { FakeOptions, fake } from './core/core';
import { data } from './http-method.json';

/**
 * Generate a random http-method.
 *
 * @category TBD
 *
 * @example
 *
 * httpMethod()
 *
 * @example
 *
 * httpMethod({ length: 10 })
 *
 */
export function httpMethod<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
