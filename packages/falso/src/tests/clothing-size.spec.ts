import { randClothingSize } from '../lib/clothing-size';

describe('clothingSize', () => {
  it('should create one clothing size', () => {
    expect(typeof randClothingSize()).toBe('string');
  });
});
