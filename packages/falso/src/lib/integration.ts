import { fake, FakeOptions } from './core/core';
import { data } from './integration.json';

/**
 * Generate a random integration.
 *
 * @category internet
 *
 * @example
 *
 * randIntegrations()
 *
 * @example
 *
 * randIntegrations({ length: 10 })
 *
 * @example
 *
 * randIntegrations({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randIntegration<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
