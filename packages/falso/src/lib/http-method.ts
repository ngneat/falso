import { FakeOptions, fake } from './core/core';
import { data } from './http-method.json';

/**
 * Generate a random http method.
 *
 * @category internet
 *
 * @example
 *
 * randHttpMethod()
 *
 * @example
 *
 * randHttpMethod({ length: 10 })
 *
 */
export function randHttpMethod<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
