import { randClothingSize } from '../lib/clothing-size';

describe('clothingSize', () => {
  it('should create', () => {
    expect(randClothingSize).toBeTruthy();
  });
  it('should create one clothing size', () => {
    expect(randClothingSize()).toBeTruthy();
  });
});
