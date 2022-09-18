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

  it('should pass when object ids are unique', () => {
    const result = objectWithIdIsUnique(object3, objects);

    expect(result).toEqual(true);
  });

  it('should fail when object ids are not unique', () => {
    const result = objectWithIdIsUnique(object2, objects);

    expect(result).toEqual(false);
  });
});
