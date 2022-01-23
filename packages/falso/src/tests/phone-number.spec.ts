import { randPhoneNumber } from '../lib/phone-number';

describe('randPhoneNumber', () => {
  it('should return a phone number', () => {
    expect(randPhoneNumber()).toMatch(/^[\d\s+()[\]]+$/);
  });

  it('should return a UK number', () => {
    expect(
      randPhoneNumber({
        countryCode: 'UK',
      })
    ).toMatch(/^[\d\s+()[\]]+$/);
  });

  it('should return 10 phone number', () => {
    const phoneNumbers = randPhoneNumber({
      length: 10,
      countryCode: 'IN',
    });
    expect(phoneNumbers?.length).toEqual(10);
  });
});
