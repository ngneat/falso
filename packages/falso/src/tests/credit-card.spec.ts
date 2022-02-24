import { randCreditCard } from '../lib/credit-card';

describe('creditCard', () => {
  it('should create', () => {
    console.log(randCreditCard({ issuer: 'Visa' }));

    expect(1);
  });
});
