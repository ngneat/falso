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

  it('should pass when item is unique', () => {
    const result = primitiveValueIsUnique(item3, items);

    expect(result).toEqual(true);
  });

  it('should fail when item is not unique', () => {
    const result = primitiveValueIsUnique(item2, items);

    expect(result).toEqual(false);
  });
});
