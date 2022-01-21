import { randBrand } from '../lib/brand';

describe('brand', () => {
  it('should create one brand', () => {
    expect(typeof randBrand()).toBe('string');
  });
});
