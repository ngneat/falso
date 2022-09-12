import { ComicBookCompany, randSuperhero } from '../lib/superhero';

describe('randSuperhero', () => {
  it('should return a random super superhero entity', () => {
    const result = randSuperhero();

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
        const result = randSuperhero({ company });

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
        const result = randSuperhero({ company });

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
        const result = randSuperhero({ length: 2 });

        expect(result.length).toEqual(2);
      });
    });

    describe('length is 5', () => {
      it('should return a string with 5 random superhero entities', () => {
        const result = randSuperhero({ length: 5 });

        expect(result.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return a string with 100 random superhero entities', () => {
        const result = randSuperhero({ length: 100 });

        expect(result.length).toEqual(100);
      });
    });

    describe('length is 3', () => {
      it('should return a string with 3 random superhero entities', () => {
        const [hero1, hero2, hero3] = randSuperhero({
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
