import * as randAddressFunctions from '../lib/address';
import { randAddressString } from '@ngneat/falso';

describe('randAddressString', () => {
  let randAddressSpy: jest.SpyInstance;

  beforeAll(() => {
    randAddressSpy = jest.spyOn(randAddressFunctions, 'randAddress');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should format values returned from randAddress', () => {
    randAddressSpy.mockReturnValue({
      street: '4 Privet drive',
      city: 'Little Whinging',
      county: 'Surrey',
      country: 'United Kingdom',
      zipCode: 'CR3 0AA',
    });

    const result = randAddressString();

    expect(result).toEqual(
      '4 Privet drive, Little Whinging, Surrey, United Kingdom, CR3 0AA'
    );
  });
});
