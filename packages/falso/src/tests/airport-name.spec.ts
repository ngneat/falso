import { data } from '../lib/airport.json';
import { randAirportName } from '../lib/airport-name';

describe('airportName', () => {
  it('should return an airport name', () => {
    const airportNames = data.map(({ name }) => name);

    const result = randAirportName();

    expect(airportNames).toContain(result);
  });
});
