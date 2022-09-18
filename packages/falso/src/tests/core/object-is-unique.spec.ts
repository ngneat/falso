import { randUser, User } from '../../lib/user';
import { randUuid } from '../../lib/uuid';
import { randFirstName } from '../../lib/first-name';
import { objectIsUnique } from '../../lib/core/unique-validators';

describe('objectIsUnique', () => {
  it("should throw error when keys contains a key that doesn't exist", () => {
    const array = randUser({ length: 3 });
    const newItem = randUser();
    const keys = ['id', 'noExistentKey', 'firstName'];

    expect(() =>
      objectIsUnique(newItem, array, keys)
    ).toThrowErrorMatchingSnapshot();
  });

  describe('1 key is passed', () => {
    let array: User[];
    let newItem: User;
    let keys: string[];

    beforeEach(() => {
      array = randUser({ length: 3 });
      newItem = randUser();
      keys = ['id'];
    });

    it('should fail when passed item matches and array item have 1 matching key value', () => {
      const sharedId = randUuid();
      newItem.id = sharedId;
      array[1].id = sharedId;

      const result = objectIsUnique(newItem, array, keys);

      expect(result).toEqual(false);
    });

    it('should pass when passed item matches and array item have 0 matching key values', () => {
      array[0].id = randUuid() + '0';
      array[1].id = randUuid() + '1';
      array[2].id = randUuid() + '2';
      newItem.id = randUuid() + '3';

      const result = objectIsUnique(newItem, array, keys);

      expect(result).toEqual(true);
    });
  });

  describe('multiple keys are passed', () => {
    let array: User[];
    let newItem: User;
    let keys: string[];

    beforeEach(() => {
      array = randUser({ length: 3 });
      newItem = randUser();
      keys = ['id', 'firstName'];
    });

    it('should fail when passed item matches and array item have 1 matching key value', () => {
      const sharedFirstName = randFirstName();
      newItem.firstName = sharedFirstName;
      array[1].firstName = sharedFirstName;

      const result = objectIsUnique(newItem, array, keys);

      expect(result).toEqual(false);
    });

    it('should pass when passed item matches and array item have 0 matching key values', () => {
      array[0].id = randUuid() + '0';
      array[0].firstName = randFirstName() + '0';
      array[1].id = randUuid() + '1';
      array[1].id = randFirstName() + '1';
      array[2].id = randUuid() + '2';
      array[2].id = randFirstName() + '2';
      newItem.id = randUuid() + '3';
      newItem.id = randFirstName() + '3';

      const result = objectIsUnique(newItem, array, keys);

      expect(result).toEqual(true);
    });
  });
});
