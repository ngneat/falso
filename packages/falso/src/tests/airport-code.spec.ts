import { randAirportCode } from '../lib/airport-code';
import { data } from '../lib/airport.json';

describe('airportCode', () => {
  it('should return an airport code', () => {
    const airportCodes = data.map(({ code }) => code);

    const result = randAirportCode();

    expect(airportCodes).toContain(result);
  });
});
