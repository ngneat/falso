import { randCreditCardNumber } from '../lib/credit-card-number';

describe('randCreditCardNumber', () => {
  it('should return a credit card number', () => {
    expect(randCreditCardNumber()).toMatch(/^[\d\s]+$/);
  });

  it('should return a Maestro credit card number', () => {
    expect(
      randCreditCardNumber({
        brand: 'Maestro',
      })
    ).toMatch(
      /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)\s[0-9\s]{8,18}$/
    );
  });

  it('should return 10 credit card number', () => {
    const cards = randCreditCardNumber({
      length: 10,
      brand: 'Maestro',
    });
    expect(cards?.length).toEqual(10);
  });
});
