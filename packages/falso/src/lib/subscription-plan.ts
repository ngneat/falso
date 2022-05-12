import { fake, FakeOptions } from './core/core';
import { data } from './subscription-plan.json';

/**
 * Generate a random subscription plan.
 *
 * @category company
 *
 * @example
 *
 * randSubscriptionPlan()
 *
 * @example
 *
 * randSubscriptionPlan({ length: 10 })
 *
 * @example
 *
 * randSubscriptionPlan({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randSubscriptionPlan<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
