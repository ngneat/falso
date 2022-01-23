import { randMovieCharacter } from '../lib/movie-character';

describe('movieCharacter', () => {
  it('should create', () => {
    expect(typeof randMovieCharacter()).toBe('string');
  });
});
