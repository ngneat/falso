import { Airline, randFlightNumber } from '../lib/flight-number';
import { getRandomInRange } from '../lib/core/core';
import { seed } from '../lib/random';

describe('flightNumber', () => {
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

      // TODO: RS - Look into char length
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

  describe('airline is not passed', () => {
    it("should choose an airline at random and return it's flight number format", () => {
      const result = randFlightNumber();

      expect(
        result.match(/LS[0-9][0-9][0-9][0-9]$/) ||
          result.match(/^EZY[0-9][0-9][0-9]$/) ||
          result.match(/^IB[0-9][0-9][0-9][0-9]$/) ||
          result.match(/^BA[0-9][0-9][0-9]$/) ||
          result.match(/^FR[0-9][0-9][0-9][0-9]$/) ||
          result.match(/^[1-9][0-9][0-9][0-9][0-9]$/)
      ).toBeTruthy();
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

      beforeAll(() => {
        seed('✈️🌎☀️🍹');
      });

      beforeEach(() => {
        length = 3;
      });

      it('should return an array length of 3, each with flight number', () => {
        const [first, second, third] = randFlightNumber({ airline, length });

        expect(first).toEqual('BA958');
        expect(second).toEqual('BA641');
        expect(third).toEqual('BA824');
      });
    });
  });
});
