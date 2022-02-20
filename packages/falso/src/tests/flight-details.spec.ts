import { randFlightDetails } from '../lib/flight-details';
import * as randFlightNumberFunctions from '../lib/flight-number';
import * as randAirlineFunctions from '../lib/airline';
import * as randAirportFunctions from '../lib/airport';
import { randAirport } from '@ngneat/falso';

describe('flightDetails', () => {
  it('should return a flight in correct format', () => {
    const result = randFlightDetails();

    expect(result).toEqual({
      passenger: expect.any(String),
      airline: expect.any(String),
      flightNumber: expect.any(String),
      origin: {
        name: expect.any(String),
        code: expect.any(String),
        city: expect.any(String),
        country: expect.any(String),
      },
      destination: {
        name: expect.any(String),
        code: expect.any(String),
        city: expect.any(String),
        country: expect.any(String),
      },
      seat: expect.any(String),
      date: expect.any(String),
      flightLength: expect.any(Number),
    });
  });

  it('expect flight length to be between 1 and 9.75', () => {
    const result = randFlightDetails();

    expect(result.flightLength).toBeGreaterThanOrEqual(1);
    expect(result.flightLength).toBeLessThanOrEqual(9.75);
  });

  describe('flightNumber', () => {
    let randAirlineSpy: jest.SpyInstance;
    let randFlightNumberSpy: jest.SpyInstance;

    beforeAll(() => {
      randAirlineSpy = jest.spyOn(randAirlineFunctions, 'randAirline');
      randFlightNumberSpy = jest.spyOn(
        randFlightNumberFunctions,
        'randFlightNumber'
      );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('should call randFlightNumber with randAirline', () => {
      const airline = 'British Airways';
      randAirlineSpy.mockReturnValue(airline);

      randFlightDetails();

      expect(randFlightNumberSpy).toBeCalledWith({ airline });
    });

    describe('airline is passed', () => {
      it('should call randFlightNumber with airline', () => {
        const airline = 'British Airways';

        randFlightDetails({ airline });

        expect(randFlightNumberSpy).toBeCalledWith({ airline });
      });

      it('should call randFlightNumber with airline', () => {
        const airline = 'British Airways';

        const result = randFlightDetails({ airline });

        expect(result.airline).toEqual(airline);
      });
    });
  });

  describe('destination & origin', () => {
    let randAirportSpy: jest.SpyInstance;

    beforeAll(() => {
      randAirportSpy = jest.spyOn(randAirportFunctions, 'randAirport');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    afterAll(() => {
      jest.resetAllMocks();
    });

    it('expect origin and destination to be returned from randAirport', () => {
      const airport1 = randAirport();
      const airport2 = randAirport();
      randAirportSpy.mockReturnValue([airport1, airport2]);

      const result = randFlightDetails();

      expect(result.origin).toEqual(airport1);
      expect(result.destination).toEqual(airport2);
    });
  });
});
