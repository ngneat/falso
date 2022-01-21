import { randIntegration } from '../lib/integration';

describe('integrations', () => {
  it('should create one integration', () => {
    expect(typeof randIntegration()).toBe('string');
  });
});
