import { randFlightDetails } from '@ngneat/falso';

describe('seatNumber', () => {
  it('should return a seat in the correct format', () => {
    const result = randFlightDetails();

    expect(result.seat).toMatch(/^(?:[1-9]|[1-2][0-9]|3[0-3])[A-Z]$/);
  });
});
