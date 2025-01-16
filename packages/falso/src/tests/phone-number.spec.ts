import { randPhoneNumber } from '../lib/phone-number';
import { phone } from 'phone';

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

  it('should return valid US phone numbers', () => {
    const phoneNumber = randPhoneNumber({ countryCode: 'US', length: 5 });
    phoneNumber.forEach((number) => {
      expect(phone(number).isValid).toEqual(true);
    });
  });
});
