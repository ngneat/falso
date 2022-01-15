import { randHex } from '../lib/hex';

describe('hex', () => {
  it('should return a hex string in the correct format', () => {
    const expected = /[#]([\dA-F]{6}|[\dA-F]{3})/gi;
    expect(randHex()).toEqual(expect.stringMatching(expected));
  });
});
