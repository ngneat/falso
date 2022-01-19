import { randMovie } from '../lib/movie';

describe('movie', () => {
  it('should return a random movie (type string)', () => {
    expect(typeof randMovie()).toEqual('string');
  });
});
