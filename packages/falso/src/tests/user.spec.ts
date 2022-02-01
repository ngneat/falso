import { randUser } from '../lib/user';
import * as firstNameFunctions from '../lib/first-name';
import * as lastNameFunctions from '../lib/last-name';

describe('user', () => {
  let randFirstNameSpy: jest.SpyInstance;
  let randLastNameSpy: jest.SpyInstance;

  beforeAll(() => {
    randFirstNameSpy = jest.spyOn(firstNameFunctions, 'randFirstName');
    randLastNameSpy = jest.spyOn(lastNameFunctions, 'randLastName');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a user', () => {
    const user = randUser();

    expect(typeof user.firstName).toEqual('string');
    expect(typeof user.username).toEqual('string');
    expect(typeof user.img).toEqual('string');
  });

  it('should contain the firstName and lastName with non-accented characters in the email', () => {
    const result = randUser();
    const { firstName, lastName, email } = result;

    expect(email).toContain(firstName.toLowerCase());
    expect(email).toContain(lastName.toLowerCase());
  });

  it('should contain the firstName and lastName in the username', () => {
    const result = randUser();
    const { firstName, lastName, username } = result;

    expect(username.toLowerCase()).toContain(firstName.toLowerCase());
    expect(username.toLowerCase()).toContain(lastName.toLowerCase());
  });

  describe('firstName', () => {
    it('should call randFirstName without special characters', () => {
      randUser();

      expect(randFirstNameSpy).toBeCalledWith({ withAccents: false });
    });
  });

  describe('lastName', () => {
    it('should call randLastName without special characters', () => {
      randUser();

      expect(randLastNameSpy).toBeCalledWith({ withAccents: false });
    });
  });
});
