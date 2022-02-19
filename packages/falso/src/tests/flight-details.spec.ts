import { FlightDetails, randFlightDetails } from '../lib/flight-details';
import { randFlightNumber } from '@ngneat/falso';
import * as randFlightNumberFunctions from '../lib/flight-number';
import * as randAirlineFunctions from '../lib/airline';

describe('flightDetails', () => {
  it('should create a flight', () => {
    const result = randFlightDetails();

    expect(result).toEqual({
      passenger: expect.any(String),
      airline: expect.any(String),
      flightNumber: expect.any(String),
      origin: expect.any(String),
      destination: expect.any(String),
      seat: expect.any(String),
      date: expect.any(String),
      flightLength: expect.any(Number),
    });
  });

  it('expect flight length to be between 1 and 8.75', () => {
    const result = randFlightDetails() as FlightDetails;

    expect(result.flightLength).toBeGreaterThanOrEqual(1);
    expect(result.flightLength).toBeLessThanOrEqual(8.75);
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

    it('expect flight number to be tied to airline', () => {
      const airline = 'British Airways';
      randAirlineSpy.mockReturnValue(airline);

      randFlightDetails();

      expect(randFlightNumberSpy).toBeCalledWith({ airline });
    });
  });
});
