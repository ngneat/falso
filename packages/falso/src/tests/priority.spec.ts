import { randPriority } from '../lib/priority';

describe('priority', () => {
  it('should create one priority', () => {
    expect(typeof randPriority()).toBe('string');
  });
});
