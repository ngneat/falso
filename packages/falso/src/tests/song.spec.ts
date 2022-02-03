import { randSong } from '../lib/song';

describe('song', () => {
  it('should return a random song (type string)', () => {
    expect(typeof randSong()).toBe('string');
  });
});
