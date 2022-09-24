import { checkUnique } from '../lib/json';

describe('randJSON checkUnique', () => {
  let json1: object;
  let json2: object;
  let json3: object;

  beforeEach(() => {
    json1 = {
      cat: {
        age: 1,
        name: 'Ryan',
      },
    };
    json2 = {
      dog: {
        age: 17,
        name: 'Pete',
      },
    };
    json3 = {
      fish: {
        age: 100,
        name: 'Mary',
      },
    };
  });

  it('should return true if jsons does not exist in jsons array', () => {
    const result = checkUnique(json1, [json2, json3]);

    expect(result).toEqual(true);
  });

  it('should return false if jsons exists in jsons array', () => {
    const result = checkUnique(json1, [json1, json3]);

    expect(result).toEqual(false);
  });
});
