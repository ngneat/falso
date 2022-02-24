import { randCreditCard } from '../lib/credit-card';

describe('creditCard', () => {
  it('should create', () => {
    console.log(randCreditCard({ fullName: 'Mr Ryan Smee', brand: 'Visa' }));

    expect(1);
  });
});
