import { randState } from '../lib/state';
import { data } from '../lib/state.i18n.json';

import { randState as deRandState } from '../lib/i18n/de';
import { data as deData } from '../lib/i18n/de/state.i18n.json';

describe('randState', () => {
  describe('EN', () => {
    it('should create one random state', () => {
      const randomState = randState();

      expect(randomState).toBeTruthy();
      expect(typeof randomState).toEqual('string');
      expect(data).toEqual(expect.arrayContaining([randomState]));
    });
  });

  describe('DE', () => {
    it('should create one random state', () => {
      const randomState = deRandState();

      expect(randomState).toBeTruthy();
      expect(typeof randomState).toEqual('string');
      expect(deData).toEqual(expect.arrayContaining([randomState]));
    });
  });
});
