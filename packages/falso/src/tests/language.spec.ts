import { randLanguage } from '../lib/language';

describe('language', () => {
  it('should create', () => {
    expect(randLanguage).toBeTruthy();
  });
  it('should create ISO 639-1 compliant language codes', () => {
    expect(randLanguage({ code: true })).toHaveLength(2);
  });
});
