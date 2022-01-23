import { randSocial } from '../lib/social';

describe('Social', () => {
  it('Shuould return social object in formats [{name, link}]', () => {
    const social = randSocial();

    expect(social.name != '');
    expect(social.link != '');
  });

  it('Should return 10 social object in formats [{name, link}]', () => {
    const social = randSocial({ length: 10 });

    expect(social.length).toEqual(10);

    // Test a random element to check if it's empty
    expect(social[3].name != '' && social[3].link != '');
  });
});
