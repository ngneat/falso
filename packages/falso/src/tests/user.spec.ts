import { randUser } from '../lib/user';
import { replaceAccentedChars } from '../lib/core/string-manipulation';

describe('user', () => {
  it('should create a user', () => {
    const user = randUser();

    expect(typeof user.firstName).toEqual('string');
    expect(typeof user.username).toEqual('string');
    expect(typeof user.img).toEqual('string');
  });

  it('should contain the firstName and lastName with non-accented characters in the email', () => {
    const result = randUser();
    const { firstName, lastName, email } = result;

    expect(email).toContain(replaceAccentedChars(firstName).toLowerCase());
    expect(email).toContain(replaceAccentedChars(lastName).toLowerCase());
  });

  it('should contain the firstName and lastName in the username', () => {
    const result = randUser();
    const { firstName, lastName, username } = result;

    expect(username.toLowerCase()).toContain(firstName.toLowerCase());
    expect(username.toLowerCase()).toContain(lastName.toLowerCase());
  });
});
