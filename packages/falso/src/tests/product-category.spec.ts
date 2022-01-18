import { randProductCategory } from '../lib/product-category';

describe('productCategory', () => {
  it('should return a category of product (type string)', () => {
    expect(typeof randProductCategory()).toEqual('string');
  });
});
