import { randSong } from '../lib/song';

describe('song', () => {
  it('should start with a capital letter', () => {
    const result = randSong();
    const firstChar = result.charAt(0);

    expect(firstChar).toEqual(firstChar.toUpperCase());
  });

  it('has no leading and trailing spaces', () => {
    const song = randSong();

    expect(song[0]).not.toBe(' ');
    expect(song[song.length - 1]).not.toBe(' ');
  });

  // it('should create', () => {
  //   expect(randSong).toBeTruthy();
  // });
});
