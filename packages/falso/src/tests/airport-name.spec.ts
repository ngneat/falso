import { randAirportName } from '../lib/airport-name';

describe('airportName', () => {
  it('should create', () => {
    expect(randAirportName).toBeTruthy();
  });
});
