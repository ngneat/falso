import { randSocial } from '../lib/social';

describe('Social', () => {
  it('Should return social object in formats [{name, link}]', () => {
    const test = randSocial();

    expect(test.name && test.link);
  });

  it('Should return 10 social object in formats [{name, link}]', () => {
    const social = randSocial({ length: 10 });

    expect(social.length).toEqual(10);
    for (const el of social) {
      expect(el.name && el.link);
    }
  });
});
