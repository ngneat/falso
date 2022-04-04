import { objectIsUnique } from '../../lib/core/core';
import { randUser, User } from '../../lib/user';
import { randUuid } from '../../lib/uuid';
import { randFirstName } from '../../lib/first-name';

describe('objectIsUnique', () => {
  describe("keys contains a key that doesn't exist", () => {
    let array: User[];
    let newItem: User;
    let keys: string[];

    beforeEach(() => {
      array = randUser({ length: 3 });
      newItem = randUser();
      keys = ['id', 'noExistentKey', 'firstName'];
    });

    it('should throw error', () => {
      expect(() =>
        objectIsUnique(newItem, array, keys)
      ).toThrowErrorMatchingSnapshot();
    });
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

    describe('passed item matches and array item have 1 matching key value', () => {
      let sharedId: string;

      beforeEach(() => {
        sharedId = randUuid();
        newItem.id = sharedId;
        array[1].id = sharedId;
      });

      it('should return true', () => {
        const result = objectIsUnique(newItem, array, keys);

        expect(result).toEqual(true);
      });
    });

    describe('passed item matches and array item have 0 matching key values', () => {
      beforeEach(() => {
        array[0].id = randUuid() + '0';
        array[1].id = randUuid() + '1';
        array[2].id = randUuid() + '2';
        newItem.id = randUuid() + '3';
      });

      it('should return true', () => {
        const result = objectIsUnique(newItem, array, keys);

        expect(result).toEqual(false);
      });
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

    describe('passed item matches and array item have 1 matching key value', () => {
      let sharedFirstName: string;

      beforeEach(() => {
        sharedFirstName = randFirstName();
        newItem.firstName = sharedFirstName;
        array[1].firstName = sharedFirstName;
      });

      it('should return true', () => {
        const result = objectIsUnique(newItem, array, keys);

        expect(result).toEqual(true);
      });
    });

    describe('passed item matches and array item have 0 matching key values', () => {
      beforeEach(() => {
        array[0].id = randUuid() + '0';
        array[0].firstName = randFirstName() + '0';
        array[1].id = randUuid() + '1';
        array[1].id = randFirstName() + '1';
        array[2].id = randUuid() + '2';
        array[2].id = randFirstName() + '2';
        newItem.id = randUuid() + '3';
        newItem.id = randFirstName() + '3';
      });

      it('should return true', () => {
        const result = objectIsUnique(newItem, array, keys);

        expect(result).toEqual(false);
      });
    });
  });
});
