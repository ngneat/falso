import { FakeOptions, fake } from './core/core';
import { data } from './integrations.json';

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
 */
export function randIntegration<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
