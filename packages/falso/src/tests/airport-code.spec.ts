import { randAirportCode } from '../lib/airport-code/airport-code';
import { data } from '../lib/airport/airport.json';

describe('airportCode', () => {
  it('should return an airport code', () => {
    const airportCodes = data.map(({ code }) => code);

    const result = randAirportCode();

    expect(airportCodes).toContain(result);
  });
});
