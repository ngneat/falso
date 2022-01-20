import { randGender } from '../lib/gender';

describe('quote', () => {
  it('should return a random gender (type string)', () => {
    expect(typeof randGender()).toEqual('string');
  });
  it('should return a random gender code (type string)', () => {
    expect(typeof randGender({ code: true })).toEqual('string');
  });
  it('should return a random gender of length 10', () => {
    expect(randGender({ length: 10 }).length).toEqual(10);
  });
});
