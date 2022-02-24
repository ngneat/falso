import { randFlightDetails } from '../lib/flight-details';
import * as randFlightNumberFunctions from '../lib/flight-number';
import * as randAirlineFunctions from '../lib/airline';
import * as randAirportFunctions from '../lib/airport';
import * as randFutureDateFunctions from '../lib/future-date';
import * as randFullNameFunctions from '../lib/full-name';
import { randAirport } from '../lib/airport';

describe('flightDetails', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

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

  describe('passenger', () => {
    let randFullNameSpy: jest.SpyInstance;

    beforeEach(() => {
      randFullNameSpy = jest.spyOn(randFullNameFunctions, 'randFullName');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('passenger is passed', () => {
      it('should set passenger to passed passenger option', () => {
        const passenger = 'Marta Esteban';

        const result = randFlightDetails({ passenger });

        expect(result.passenger).toEqual(passenger);
      });
    });

    describe('passenger is not passed', () => {
      it('should set passenger to value returned from randFullName', () => {
        const fullName = 'Ryan Smee';
        randFullNameSpy.mockReturnValue(fullName);

        const result = randFlightDetails();

        expect(result.passenger).toEqual(fullName);
      });
    });
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

    it('expect origin and destination to be returned from randAirport', () => {
      const airport1 = randAirport();
      const airport2 = randAirport();
      randAirportSpy.mockReturnValue([airport1, airport2]);

      const result = randFlightDetails();

      expect(result.origin).toEqual(airport1);
      expect(result.destination).toEqual(airport2);
    });
  });

  describe('date', () => {
    let randFutureDateSpy: jest.SpyInstance;

    beforeAll(() => {
      randFutureDateSpy = jest.spyOn(randFutureDateFunctions, 'randFutureDate');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('expect date to be set to ISO value from date returned from randFutureDate', () => {
      const date = new Date('2019/07/10');
      randFutureDateSpy.mockReturnValue(date);

      const result = randFlightDetails();

      expect(result.date).toEqual(date.toISOString());
    });
  });
});
