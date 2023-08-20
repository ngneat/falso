import { randAccount } from '../lib/account';
import { randMovie } from '../lib/movie';

describe('maxCharCount', () => {
  it('should return 20 random movies with name length equal or smaller than 8', () => {
    const result = randMovie({ length: 20, maxCharCount: 8 });

    expect(result).toHaveLength(20);
    result.forEach((movie) => expect(movie.length).toBeLessThanOrEqual(8));
  });

  it('should return 50 random movies with name length equal or smaller than 1', () => {
    const result = randMovie({ length: 50, maxCharCount: 1 });

    expect(result).toHaveLength(50);
    result.forEach((movie) => expect(movie.length).toBeLessThanOrEqual(1));
  });

  it('should return 20 random movies with name length equal or smaller than 20', () => {
    const result = randAccount({ length: 20, maxCharCount: 20 });

    expect(result).toHaveLength(20);
    result.forEach((account) => expect(account.length).toBeLessThanOrEqual(20));
  });
});
