import { randSubscriptionPlan } from '../lib/subscription-plan';

describe('subscriptionPlan', () => {
  it('should create', () => {
    expect(typeof randSubscriptionPlan()).toBe('string');
  });
});
