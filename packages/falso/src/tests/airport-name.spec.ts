import { data } from '../lib/airport.json';
import { randAirportCode } from '@ngneat/falso';

describe('airportName', () => {
  it('should return an airport name', () => {
    const airportCodes = data.map(({ name }) => name);

    const result = randAirportCode();

    expect(airportCodes).toContain(result);
  });
});
