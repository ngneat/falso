import { Airline, randFlightNumber } from '../lib/flight-number';
import { getRandomInRange } from '../lib/core/core';
import * as randFunctions from '../lib/rand';

describe('flightNumber', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('RyanAir is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'RyanAir';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^FR[0-9][0-9][0-9][0-9]$/);
    });
  });

  describe('British Airways is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'British Airways';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^BA[0-9][0-9][0-9]$/);
    });
  });

  describe('Iberia is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'Iberia';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^IB[0-9][0-9][0-9][0-9]$/);
    });
  });

  describe('EasyJet is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'EasyJet';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^EZY[0-9][0-9][0-9]$/);
    });
  });

  describe('Jet2 is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'Jet2';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^LS[0-9][0-9][0-9][0-9]$/);
    });
  });

  describe('Emirates is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'Emirates';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^EK[1-9][0-9]$/);
    });
  });

  describe('American Airlines is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'American Airlines';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^AA[1-9][0-9][0-9][0-9]$/);
    });
  });

  describe('JetBlue is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'JetBlue';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^B[1-9][0-9][0-9]$/);
    });
  });

  describe('Air Europa is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'Air Europa';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^UX[1-9][0-9][0-9][0-9]$/);
    });
  });

  describe('Delta Air Lines is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'Delta Air Lines';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^DL[1-9][0-9][0-9][0-9]$/);
    });
  });

  describe('United Airlines is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'United Airlines';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^UA[1-9][0-9][0-9][0-9]$/);
    });
  });

  describe('Virgin Atlantic is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'Virgin Atlantic';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^VS[1-9][0-9][0-9][0-9]$/);
    });
  });

  describe('Thai Airways is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'Thai Airways';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^TG[1-9][0-9][0-9][0-9]$/);
    });
  });

  describe('Qatar Airways is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'Qatar Airways';
    });

    it('should return flight number in correct format', () => {
      const result = randFlightNumber({ airline });

      expect(result).toMatch(/^QR[1-9][0-9][0-9][0-9]$/);
    });
  });

  describe('airline is not passed', () => {
    let randSpy: jest.SpyInstance;

    beforeEach(() => {
      randSpy = jest.spyOn(randFunctions, 'rand');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should use airline returned from rand to generate flight number', () => {
      const airline = 'Iberia';
      randSpy.mockReturnValue(airline);

      const result = randFlightNumber();

      expect(result).toMatch(/^IB[0-9][0-9][0-9][0-9]$/);
    });
  });

  describe('length is passed', () => {
    let airline: Airline;

    beforeEach(() => {
      airline = 'British Airways';
    });

    describe('length is random number', () => {
      let length: number;

      beforeEach(() => {
        length = getRandomInRange({ min: 1, max: 50 });
      });

      it('should return an array with the passed length', () => {
        const result = randFlightNumber({ airline, length });

        expect(result).toHaveLength(length);
      });
    });

    describe('length is 3', () => {
      let length: number;

      beforeEach(() => {
        length = 3;
      });

      it('should return an array length of 3, each with flight number', () => {
        const [first, second, third] = randFlightNumber({ airline, length });

        expect(first).toMatch(/^BA[0-9][0-9][0-9]$/);
        expect(second).toMatch(/^BA[0-9][0-9][0-9]$/);
        expect(third).toMatch(/^BA[0-9][0-9][0-9]$/);
      });
    });
  });
});
