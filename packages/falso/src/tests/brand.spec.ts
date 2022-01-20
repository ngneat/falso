import { randBrand } from '../lib/brand';

describe('brand', () => {
  it('should create one brand', () => {
    expect(randBrand()).toBeTruthy();
  });
});
