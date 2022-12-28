import { randMovie } from '../lib/movie';

describe('movie', () => {
  it('should return a random movie (type string)', () => {
    expect(typeof randMovie()).toEqual('string');
  });

  it('should return 10 random movies', () => {
    expect(randMovie({ length: 10 })).toHaveLength(10);
  });
});
