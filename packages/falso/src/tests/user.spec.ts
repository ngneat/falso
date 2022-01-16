import { randUser } from '../lib/user';

describe('user', () => {
  it('should create a user', () => {
    const user = randUser();

    expect(typeof user.firstName).toEqual('string');
    expect(typeof user.username).toEqual('string');
    expect(typeof user.img).toEqual('string');
  });
});
