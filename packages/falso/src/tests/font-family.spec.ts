import { randFontFamily } from '../lib/font-family';

describe('fontFamily', () => {
  it('should create a random font family', () => {
    expect(typeof randFontFamily()).toEqual('string');

    const RESULT_LENGTH = 10;
    const multipleRandomFontFamily = randFontFamily({ length: RESULT_LENGTH });

    expect(typeof multipleRandomFontFamily).toEqual('object');
    expect(multipleRandomFontFamily.length).toEqual(RESULT_LENGTH);
  });
});
