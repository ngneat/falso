import { randDrinks } from '../lib/drinks';

describe('drinks', () => {
  it('should create a drink', () => {
    const drink = randDrinks();

    expect(drink).toBeTruthy();
    expect(typeof drink).toEqual('string');
    expect(drink.length).toBeGreaterThan(0);
  });
});
