import { randSlug } from '../lib/slug';

describe('slug', () => {
  it('should create', () => {
    expect(typeof randSlug()).toBe('string');
  });
});
