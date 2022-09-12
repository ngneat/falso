import * as randAddressFunctions from '../lib/address';
import { randFullAddress } from '../lib/full-address';

describe('randFullAddress', () => {
  let randAddressSpy: jest.SpyInstance;

  beforeAll(() => {
    randAddressSpy = jest.spyOn(randAddressFunctions, 'randAddress');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should format values returned from randAddress', () => {
    randAddressSpy.mockReturnValue({
      street: '4 Privet drive',
      city: 'Little Whinging',
      county: 'Surrey',
      country: 'United Kingdom',
      zipCode: 'CR3 0AA',
    });

    const result = randFullAddress();

    expect(result).toEqual(
      '4 Privet drive, Little Whinging, Surrey, United Kingdom, CR3 0AA'
    );
  });

  describe('includeCounty IS passed as false', () => {
    let includeCounty: boolean;

    beforeEach(() => {
      includeCounty = false;
    });

    it('should format values returned from randAddress (Without county)', () => {
      randAddressSpy.mockReturnValue({
        street: '4 Privet drive',
        city: 'Little Whinging',
        country: 'United Kingdom',
        zipCode: 'CR3 0AA',
      });

      const result = randFullAddress({ includeCounty });

      expect(result).toEqual(
        '4 Privet drive, Little Whinging, United Kingdom, CR3 0AA'
      );
    });
  });

  describe('includeCountry IS passed as false', () => {
    let includeCountry: boolean;

    beforeEach(() => {
      includeCountry = false;
    });

    it('should format values returned from randAddress (Without country)', () => {
      randAddressSpy.mockReturnValue({
        street: '4 Privet drive',
        city: 'Little Whinging',
        county: 'Surrey',
        zipCode: 'CR3 0AA',
      });

      const result = randFullAddress({ includeCountry });

      expect(result).toEqual(
        '4 Privet drive, Little Whinging, Surrey, CR3 0AA'
      );
    });
  });
});
