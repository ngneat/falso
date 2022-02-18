import { randSeatNumber } from '../lib/seat-number';

describe('seatNumber', () => {
  it('should return a seat in the correct format', () => {
    const result = randSeatNumber();

    expect(result).toMatch(/^(?:[1-9]|[1-2][0-9]|3[0-3])[A-Z]$/);
  });
});
