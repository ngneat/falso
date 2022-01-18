import { randFood } from '../lib/food';
import { randFish } from '../lib/fish';

describe('food', () => {
  it('should create', () => {
    console.log(randFood());
    console.log(randFood({ origin: 'italy' }));
    console.log(randFood({ length: 10, origin: 'india' }));
  });
});
