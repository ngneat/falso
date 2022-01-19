import { randQuote } from '../lib/quote';

describe('quote', () => {
  it('should return a random quote (type string)', () => {
    expect(typeof randQuote()).toEqual('string');
  });
});
