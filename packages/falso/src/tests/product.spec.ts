import { randProduct } from '../lib/product';

describe('productCategory', () => {
  it('should return a category of product entity (type object)', () => {
    const product = randProduct();

    expect(typeof product).toEqual('object');
    expect(typeof product.id).toEqual('string');
    expect(typeof product.title).toEqual('string');
    expect(typeof product.description).toEqual('string');
    expect(typeof product.price).toEqual('string');
    expect(typeof product.category).toEqual('string');
    expect(typeof product.image).toEqual('string');
    expect(typeof product.rating).toEqual('object');
    expect(typeof product.rating.rate).toEqual('string');
    expect(typeof product.rating.count).toEqual('string');
  });
});
