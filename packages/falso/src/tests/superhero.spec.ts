import {
  ComicBookCompany,
  randSuperhero,
  randSuperheroName,
  SuperheroEntity,
} from '../lib/superhero';
import { data } from '../lib/superhero.json';

describe('superHero', () => {
  describe('randSuperhero', () => {
    it('should return a random super superhero entity', () => {
      const result: SuperheroEntity = randSuperhero();

      expect(result).toEqual({
        id: expect.any(String),
        realName: expect.any(String),
        alterEgo: expect.any(String),
        company: expect.any(String),
      });
    });

    describe('company is passed', () => {
      let company: ComicBookCompany;

      describe('DC is passed', () => {
        beforeEach(() => {
          company = 'DC';
        });

        it('should return a random super superhero entity from DC', () => {
          const result: SuperheroEntity = randSuperhero({ company });

          expect(result).toEqual({
            id: expect.any(String),
            realName: expect.any(String),
            alterEgo: expect.any(String),
            company: 'DC',
          });
        });
      });

      describe('Marvel is passed', () => {
        beforeEach(() => {
          company = 'Marvel';
        });

        it('should return a random super superhero entity from Marvel', () => {
          const result: SuperheroEntity = randSuperhero({ company });

          expect(result).toEqual({
            id: expect.any(String),
            realName: expect.any(String),
            alterEgo: expect.any(String),
            company: 'Marvel',
          });
        });
      });
    });

    describe('length is passed', () => {
      describe('length is 2', () => {
        it('should return a string with 2 random superhero entities', () => {
          const result: SuperheroEntity[] = randSuperhero({ length: 2 });

          expect(result.length).toEqual(2);
        });
      });

      describe('length is 5', () => {
        it('should return a string with 5 random superhero entities', () => {
          const result: SuperheroEntity[] = randSuperhero({ length: 5 });

          expect(result.length).toEqual(5);
        });
      });

      describe('length is 100', () => {
        it('should return a string with 100 random superhero entities', () => {
          const result: SuperheroEntity[] = randSuperhero({ length: 100 });

          expect(result.length).toEqual(100);
        });
      });

      describe('length is 3', () => {
        it('should return a string with 3 random superhero entities', () => {
          const [hero1, hero2, hero3]: SuperheroEntity[] = randSuperhero({
            length: 3,
          });

          expect(hero1).toEqual({
            id: expect.any(String),
            realName: expect.any(String),
            alterEgo: expect.any(String),
            company: expect.any(String),
          });
          expect(hero2).toEqual({
            id: expect.any(String),
            realName: expect.any(String),
            alterEgo: expect.any(String),
            company: expect.any(String),
          });
          expect(hero3).toEqual({
            id: expect.any(String),
            realName: expect.any(String),
            alterEgo: expect.any(String),
            company: expect.any(String),
          });
        });
      });
    });
  });

  describe('randSuperheroName', () => {
    it('should return a random super superhero name', () => {
      const result: string = randSuperheroName();
      const allNames = data.map((hero) => hero.alterEgo);

      expect(allNames).toContain(result);
      expect(result).toEqual(expect.any(String));
    });

    describe('company is passed', () => {
      let company: ComicBookCompany;

      describe('DC is passed', () => {
        beforeEach(() => {
          company = 'DC';
        });

        it('should return a random super superhero name from DC', () => {
          const result: string = randSuperheroName({ company });
          const allNames = data
            .filter((hero) => hero.company === company)
            .map((hero) => hero.alterEgo);

          expect(allNames).toContain(result);
          expect(result).toEqual(expect.any(String));
        });
      });

      describe('Marvel is passed', () => {
        beforeEach(() => {
          company = 'Marvel';
        });

        it('should return a random super superhero name from Marvel', () => {
          const result: string = randSuperheroName({ company });
          const allNames = data
            .filter((hero) => hero.company === company)
            .map((hero) => hero.alterEgo);

          expect(allNames).toContain(result);
          expect(result).toEqual(expect.any(String));
        });
      });
    });

    describe('length is passed', () => {
      describe('length is 2', () => {
        it('should return a string with 2 random superhero names', () => {
          const result: string[] = randSuperheroName({ length: 2 });

          expect(result.length).toEqual(2);
        });
      });

      describe('length is 5', () => {
        it('should return a string with 5 random superhero names', () => {
          const result: string[] = randSuperheroName({ length: 5 });

          expect(result.length).toEqual(5);
        });
      });

      describe('length is 100', () => {
        it('should return a string with 100 random superhero names', () => {
          const result: string[] = randSuperheroName({ length: 100 });

          expect(result.length).toEqual(100);
        });
      });

      describe('length is 3', () => {
        it('should return a string with 3 random superhero names', () => {
          const [heroName1, heroName2, heroName3]: string[] = randSuperheroName(
            { length: 3 }
          );
          const allNames = data.map((hero) => hero.alterEgo);

          expect(allNames).toContain(heroName1);
          expect(allNames).toContain(heroName2);
          expect(allNames).toContain(heroName3);
        });
      });
    });
  });
});
