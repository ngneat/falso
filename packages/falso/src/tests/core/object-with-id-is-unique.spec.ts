import { objectWithIdIsUnique } from '../../lib/core/unique-validators';
import { randFullName, randNumber } from '@ngneat/falso';

describe('objectWithIdIsUnique', () => {
  let objects: any[];
  let object1: any;
  let object2: any;
  let object3: any;

  beforeEach(() => {
    const name = randFullName();
    const age = randNumber({ min: 10, max: 90 });
    object1 = {
      id: '1',
      name,
      age,
    };
    object2 = {
      id: '2',
      name,
      age,
    };
    object3 = {
      id: '3',
      name,
      age,
    };
    objects = [object1, object2];
  });

  describe('object id is unique', () => {
    it('should return true', () => {
      const result = objectWithIdIsUnique(object3, objects);

      expect(result).toEqual(true);
    });
  });

  describe('object id is not unique', () => {
    it('should return false', () => {
      const result = objectWithIdIsUnique(object2, objects);

      expect(result).toEqual(false);
    });
  });
});
