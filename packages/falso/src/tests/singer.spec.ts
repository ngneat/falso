import { randSinger } from '../lib/singer';

describe('singer', () => {
  it('first letter of every word is capital', () => {
    const result = randSinger();

    const nameComponents = result.split(' ');

    for (let i = 0; i < nameComponents.length; i++) {
      expect(nameComponents[i]).toMatch(/^[A-Z]/);
    }
  });

  //check there is no number in the name
  it('there is no number in the name', () => {
    const result = randSinger();

    expect(result).not.toMatch(/^[0-9]/);
  });

  // it('should create', () => {
  //   expect(randSinger).toBeTruthy();
  // });
});
