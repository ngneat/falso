import { randSinger } from '../lib/singer';

describe('singer', () => {
  it('should return a random singer (type string)', () => {
    expect(typeof randSinger()).toEqual('string');
  });
});
