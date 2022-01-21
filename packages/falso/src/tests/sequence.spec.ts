import { randSequence } from '../lib/sequence';

describe('randSequence', () => {
  it('should create one sequence', () => {
    expect(typeof randSequence()).toBe('string');
  });
});
