import { randFontFamily } from '../lib/font-family';

describe('fontFamily', () => {
  it('should create a random font family', () => {
    expect(typeof randFontFamily()).toEqual('string');
  });
});
