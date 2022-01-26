import { randUser } from '../lib/user';

describe('user', () => {
  it('should create a user', () => {
    const user = randUser();

    expect(typeof user.firstName).toEqual('string');
    expect(typeof user.username).toEqual('string');
    expect(typeof user.img).toEqual('string');
  });

  it('should contain the firstName and lastName in the email', () => {
    const result = randUser();
    const { firstName, lastName, email } = result;

    expect(email.toLowerCase()).toContain(firstName.toLowerCase());
    expect(email.toLowerCase()).toContain(lastName.toLowerCase());
  });

  it('should contain the firstName and lastName in the username', () => {
    const result = randUser();
    const { firstName, lastName, username } = result;

    expect(username.toLowerCase()).toContain(firstName.toLowerCase());
    expect(username.toLowerCase()).toContain(lastName.toLowerCase());
  });
});
