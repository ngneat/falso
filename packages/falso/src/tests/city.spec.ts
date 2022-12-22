import { randCity } from '../lib/city';
import { data } from '../lib/city.i18n.json';

import { randCity as deRandCity } from '../lib/i18n/de';
import { data as deData } from '../lib/i18n/de/city.i18n.json';

describe('randCity', () => {
  describe('EN', () => {
    it('should create one random city', () => {
      const randomCity = randCity();

      expect(randomCity).toBeTruthy();
      expect(typeof randomCity).toEqual('string');
      expect(data).toEqual(expect.arrayContaining([randomCity]));
    });
  });

  describe('DE', () => {
    it('should create one random city', () => {
      const randomCity = deRandCity();

      expect(randomCity).toBeTruthy();
      expect(typeof randomCity).toEqual('string');
      expect(deData).toEqual(expect.arrayContaining([randomCity]));
    });
  });
});
