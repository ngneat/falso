import { NameSeparators, randEmail } from '../lib/email';
import * as firstNameFunctions from '../lib/first-name';
import { randFirstName } from '../lib/first-name';
import * as lastNameFunctions from '../lib/last-name';
import { randLastName } from '../lib/last-name';

describe('email', () => {
  let validEmailRegex: RegExp;
  let randFirstNameSpy: jest.SpyInstance;
  let randLastNameSpy: jest.SpyInstance;

  beforeEach(() => {
    validEmailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    randFirstNameSpy = jest.spyOn(firstNameFunctions, 'randFirstName');
    randLastNameSpy = jest.spyOn(lastNameFunctions, 'randLastName');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should return valid email format', () => {
    const result = randEmail();

    expect(result).toMatch(validEmailRegex);
  });

  describe('firstName', () => {
    describe('firstName is passed', () => {
      let firstName: string;

      beforeEach(() => {
        firstName = randFirstName();
      });

      it('should contain the first name', () => {
        const result = randEmail({ firstName });

        expect(result).toContain(firstName.toLowerCase());
      });
    });

    describe('firstName is not passed', () => {
      it('should call randFirstName without special characters', () => {
        randEmail();

        expect(randFirstNameSpy).toBeCalledWith({ withAccents: false });
      });
    });
  });

  describe('lastName', () => {
    describe('lastName is passed', () => {
      let lastName: string;

      beforeEach(() => {
        lastName = randLastName();
      });

      it('should contain the last name', () => {
        const result = randEmail({ lastName });

        expect(result).toContain(lastName.toLowerCase());
      });
    });

    describe('lastName is not passed', () => {
      it('should call randLastName without special characters', () => {
        randEmail();

        expect(randLastNameSpy).toBeCalledWith({ withAccents: false });
      });
    });
  });

  describe('nameSeparator is passed', () => {
    let nameSeparator: NameSeparators;

    beforeEach(() => {
      nameSeparator = '.';
    });

    it('should separate first and last name with a fullstop', () => {
      const result = randEmail({ nameSeparator });
      const name = result.split('@')[0];

      expect(
        name.match('^[a-z]+(\\-[a-z]+)?\\.[a-z]+(\\-[a-z]+)?([1-1000]+)?')
      ).toBeTruthy();
    });

    it('should return valid email format', () => {
      const result = randEmail({ nameSeparator });

      expect(result.match(validEmailRegex)).toBeTruthy();
    });
  });

  describe('provider is passed', () => {
    let provider: string;

    beforeEach(() => {
      provider = 'testprovider';
    });

    it('should return a random email with passed provider', () => {
      const result = randEmail({ provider });

      expect(result).toContain(`@${provider}.`);
    });

    it('should return valid email format', () => {
      const result = randEmail({ provider });

      expect(result.match(validEmailRegex)).toBeTruthy();
    });
  });

  describe('suffix is passed', () => {
    let suffix: string;

    beforeEach(() => {
      suffix = 'me';
    });

    it('should return valid email format', () => {
      const result = randEmail({ suffix });
      const emailSuffix = result.split('.');

      expect(emailSuffix[emailSuffix.length - 1]).toEqual('me');
    });

    it('should return valid email format', () => {
      const result = randEmail({ suffix });

      expect(result.match(validEmailRegex)).toBeTruthy();
    });
  });

  describe('length is passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randEmail({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = randEmail({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = randEmail({ length: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('length is 3', () => {
      it('should return an array length of 3, each with a random email', () => {
        const [email1, email2, email3] = randEmail({ length: 3 });

        expect(email1).toMatch(validEmailRegex);
        expect(email2).toMatch(validEmailRegex);
        expect(email3).toMatch(validEmailRegex);
      });
    });
  });
});
