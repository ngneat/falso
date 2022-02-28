import { randCreditCard } from '../lib/credit-card';
import * as randCreditCardNumberFunctions from '../lib/credit-card-number';
import * as randCreditCardCVVFunctions from '../lib/credit-card-cvv';
import * as randCreditCardBrandFunctions from '../lib/credit-card-brand';
import * as randPersonTitleFunctions from '../lib/person-title';
import * as randFullNameFunctions from '../lib/full-name';

describe('creditCard', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('fullName', () => {
    let randCreditCardBrandSpy: jest.SpyInstance;
    let randPersonTitleSpy: jest.SpyInstance;
    let randFullNameSpy: jest.SpyInstance;

    beforeEach(() => {
      randCreditCardBrandSpy = jest
        .spyOn(randCreditCardBrandFunctions, 'randCreditCardBrand')
        .mockImplementation(() => null);
      randPersonTitleSpy = jest
        .spyOn(randPersonTitleFunctions, 'randPersonTitle')
        .mockImplementation(() => null);
      randFullNameSpy = jest
        .spyOn(randFullNameFunctions, 'randFullName')
        .mockImplementation(() => null);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('fullName is passed', () => {
      it('should be fullName passed in options', () => {
        const fullName = 'Mrs Marta Esteban';

        const result = randCreditCard({ fullName });

        expect(result.fullName).toEqual(fullName);
      });
    });

    describe('fullName is not passed', () => {
      it('should call randFullName with { withAccents: false }', () => {
        randCreditCard();

        expect(randFullNameSpy).toBeCalledWith({ withAccents: false });
      });

      it('should be value build from returned randPersonTitle and randFullName', () => {
        const title = 'Mr';
        const fullName = 'Ryan Smee';
        randPersonTitleSpy.mockReturnValue(title);
        randFullNameSpy.mockReturnValue(fullName);

        const result = randCreditCard();

        expect(result.fullName).toEqual(`${title} ${fullName}`);
      });
    });
  });

  describe('brand', () => {
    let randCreditCardBrandSpy: jest.SpyInstance;

    beforeEach(() => {
      randCreditCardBrandSpy = jest
        .spyOn(randCreditCardBrandFunctions, 'randCreditCardBrand')
        .mockImplementation(() => null);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('brand is passed', () => {
      it('should be brand passed in options', () => {
        const brand = 'Mastercard';

        const result = randCreditCard({ brand });

        expect(result.brand).toEqual(brand);
      });
    });

    describe('brand is not passed', () => {
      it('should be value returned from randCreditCardBrand', () => {
        const brand = 'American Express';
        randCreditCardBrandSpy.mockReturnValue(brand);

        const result = randCreditCard();

        expect(result.brand).toEqual(brand);
      });
    });
  });

  describe('validFrom', () => {
    it('should be in correct format (MM/YY)', () => {
      const result = randCreditCard();

      expect(result.validFrom).toMatch(/[0-9][0-9]\/[0-9][0-9]/);
    });
  });

  describe('untilEnd', () => {
    it('should be in correct format (MM/YY)', () => {
      const result = randCreditCard();

      expect(result.untilEnd).toMatch(/[0-9][0-9]\/[0-9][0-9]/);
    });
  });

  describe('ccv', () => {
    let randCreditCardCVVSpy: jest.SpyInstance;

    beforeEach(() => {
      randCreditCardCVVSpy = jest
        .spyOn(randCreditCardCVVFunctions, 'randCreditCardCVV')
        .mockImplementation(() => null);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be value returned from randCreditCardCVV', () => {
      const ccv = '123';
      randCreditCardCVVSpy.mockReturnValue(ccv);

      const result = randCreditCard();

      expect(result.ccv).toEqual(ccv);
    });
  });

  describe('number', () => {
    let randCreditCardNumberSpy: jest.SpyInstance;

    beforeEach(() => {
      randCreditCardNumberSpy = jest
        .spyOn(randCreditCardNumberFunctions, 'randCreditCardNumber')
        .mockImplementation(() => null);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should be value returned from randCreditCardNumber', () => {
      const cardNumber = '1234 5678 9876 5432';
      randCreditCardNumberSpy.mockReturnValue(cardNumber);

      const result = randCreditCard();

      expect(result.number).toEqual(cardNumber);
    });
  });

  describe('type', () => {
    it('should be either Credit or Debit', () => {
      const result = randCreditCard();

      expect(result.type === 'Credit' || result.type === 'Debit').toBeTruthy();
    });
  });
});
