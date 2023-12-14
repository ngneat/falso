import { randBird } from '../../src/lib/bird';
import { data } from '../../src/lib/bird.i18n.json';

import { randBird as deRandBird } from '../../src/lib/i18n/de';
import { data as deData } from '../../src/lib/i18n/de/bird.i18n.json';

import { randBird as esRandBird } from '../../src/lib/i18n/es';
import { data as esData } from '../../src/lib/i18n/es/bird.i18n.json';

import { randBird as koRandBird } from '../../src/lib/i18n/ko';
import { data as koData } from '../../src/lib/i18n/ko/bird.i18n.json';

import { randBird as ptBrRandBird } from '../../src/lib/i18n/pt-br';
import { data as ptBrData } from '../../src/lib/i18n/pt-br/bird.i18n.json';

describe('randBird', () => {
  describe('EN', () => {
    it('should create one random bird', () => {
      const randomBird = randBird();

      expect(randomBird).toBeTruthy();
      expect(typeof randomBird).toEqual('string');
      expect(data).toEqual(expect.arrayContaining([randomBird]));
    });
  });

  describe('DE', () => {
    it('should create one random bird', () => {
      const randomBird = deRandBird();

      expect(randomBird).toBeTruthy();
      expect(typeof randomBird).toEqual('string');
      expect(deData).toEqual(expect.arrayContaining([randomBird]));
    });
  });

  describe('ES', () => {
    it('should create one random bird', () => {
      const randomBird = esRandBird();

      expect(randomBird).toBeTruthy();
      expect(typeof randomBird).toEqual('string');
      expect(esData).toEqual(expect.arrayContaining([randomBird]));
    });
  });

  describe('KO', () => {
    it('should create one random bird', () => {
      const randomBird = koRandBird();

      expect(randomBird).toBeTruthy();
      expect(typeof randomBird).toEqual('string');
      expect(koData).toEqual(expect.arrayContaining([randomBird]));
    });
  });

  describe('PT-BR', () => {
    it('should create one random bird', () => {
      const randomBird = ptBrRandBird();

      expect(randomBird).toBeTruthy();
      expect(typeof randomBird).toEqual('string');
      expect(ptBrData).toEqual(expect.arrayContaining([randomBird]));
    });
  });
});
