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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Slack'
 * 'GitHub'
 * 'Jira'
 */

export function randIntegration<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
