import { data } from '../lib/airport/airport.json';
import { randAirportName } from '../lib/airport-name/airport-name';

describe('airportName', () => {
  it('should return an airport name', () => {
    const airportNames = data.map(({ name }) => name);

    const result = randAirportName();

    expect(airportNames).toContain(result);
  });
});
