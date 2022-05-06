import { primitiveValueIsUnique } from '../../lib/core/unique-validators';
import { randNumber } from '@ngneat/falso';

describe('primitiveValueIsUnique', () => {
  let items: number[];
  let item1: number;
  let item2: number;
  let item3: number;

  beforeEach(() => {
    item1 = randNumber();
    item2 = randNumber();
    item3 = randNumber();
    items = [item1, item2];
  });

  describe('item is unique', () => {
    it('should return true', () => {
      const result = primitiveValueIsUnique(item3, items);

      expect(result).toEqual(true);
    });
  });

  describe('item is not unique', () => {
    it('should return false', () => {
      const result = primitiveValueIsUnique(item2, items);

      expect(result).toEqual(false);
    });
  });
});
