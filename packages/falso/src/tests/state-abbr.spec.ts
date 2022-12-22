import { randStateAbbr } from '../lib/state-abbr';
import { data } from '../lib/state-abbr.i18n.json';

import { randStateAbbr as deRandStateAbbr } from '../lib/i18n/de';
import { data as deData } from '../lib/i18n/de/state-abbr.i18n.json';

describe('randStateAbbr', () => {
  describe('EN', () => {
    it('should create one random state abbreviation', () => {
      const randomStateAbbr = randStateAbbr();

      expect(randomStateAbbr).toBeTruthy();
      expect(typeof randomStateAbbr).toEqual('string');
      expect(data).toEqual(expect.arrayContaining([randomStateAbbr]));
    });
  });

  describe('DE', () => {
    it('should create one random state abbreviation', () => {
      const randomStateAbbr = deRandStateAbbr();

      expect(randomStateAbbr).toBeTruthy();
      expect(typeof randomStateAbbr).toEqual('string');
      expect(deData).toEqual(expect.arrayContaining([randomStateAbbr]));
    });
  });
});
