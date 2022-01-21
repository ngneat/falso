import { randShape } from '../lib/shape';

describe('shapes', () => {
  it('should create', () => {
    expect(typeof randShape()).toBe('string');
  });
});
