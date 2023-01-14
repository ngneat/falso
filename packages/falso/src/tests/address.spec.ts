import * as randStreetAddressFunctions from '../lib/street-address';
import * as randCityFunctions from '../lib/city';
import * as randCountyFunctions from '../lib/county/county';
import * as randCountryFunctions from '../lib/country/country';
import * as randZipCodeFunctions from '../lib/zip-code';
import { randAddress } from '../lib/address/address';

describe('randAddress', () => {
  let randStreetAddressSpy: jest.SpyInstance;
  let randCitySpy: jest.SpyInstance;
  let randCountySpy: jest.SpyInstance;
  let randCountrySpy: jest.SpyInstance;
  let randZipCodeSpy: jest.SpyInstance;

  beforeAll(() => {
    randStreetAddressSpy = jest.spyOn(
      randStreetAddressFunctions,
      'randStreetAddress'
    );
    randCitySpy = jest.spyOn(randCityFunctions, 'randCity');
    randCountySpy = jest.spyOn(randCountyFunctions, 'randCounty');
    randCountrySpy = jest.spyOn(randCountryFunctions, 'randCountry');
    randZipCodeSpy = jest.spyOn(randZipCodeFunctions, 'randZipCode');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should create address entity with values returned rand address functions', () => {
    randStreetAddressSpy.mockReturnValue('4 Privet drive');
    randCitySpy.mockReturnValue('Little Whinging');
    randCountySpy.mockReturnValue('Surrey');
    randCountrySpy.mockReturnValue('United Kingdom');
    randZipCodeSpy.mockReturnValue('CR3 0AA');

    const result = randAddress();

    expect(result).toEqual({
      street: '4 Privet drive',
      city: 'Little Whinging',
      county: 'Surrey',
      country: 'United Kingdom',
      zipCode: 'CR3 0AA',
    });
  });

  describe('includeCounty IS passed', () => {
    let includeCounty: boolean;

    beforeEach(() => {
      includeCounty = false;
    });

    it('should create address entity with values returned rand address functions (without county)', () => {
      randStreetAddressSpy.mockReturnValue('4 Privet drive');
      randCitySpy.mockReturnValue('Little Whinging');
      randCountrySpy.mockReturnValue('United Kingdom');
      randZipCodeSpy.mockReturnValue('CR3 0AA');

      const result = randAddress({ includeCounty });

      expect(result).toEqual({
        street: '4 Privet drive',
        city: 'Little Whinging',
        country: 'United Kingdom',
        zipCode: 'CR3 0AA',
      });
    });
  });

  describe('includeCountry IS passed', () => {
    let includeCountry: boolean;

    beforeEach(() => {
      includeCountry = false;
    });

    it('should create address entity with values returned rand address functions (without country)', () => {
      randStreetAddressSpy.mockReturnValue('4 Privet drive');
      randCitySpy.mockReturnValue('Little Whinging');
      randCountySpy.mockReturnValue('Surrey');
      randZipCodeSpy.mockReturnValue('CR3 0AA');

      const result = randAddress({ includeCountry });

      expect(result).toEqual({
        street: '4 Privet drive',
        city: 'Little Whinging',
        county: 'Surrey',
        zipCode: 'CR3 0AA',
      });
    });
  });
});
