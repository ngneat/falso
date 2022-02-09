import * as randStreetAddressFunctions from '../lib/street-address';
import * as randCityFunctions from '../lib/city';
import * as randCountyFunctions from '../lib/county';
import * as randCountryFunctions from '../lib/country';
import * as randZipCodeFunctions from '../lib/zip-code';
import { randAddress } from '../lib/address';

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

  it('should format values returned from randAddress', () => {
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
});
