import { randFrequency } from '../lib/frequency';

describe('frequency', () => {
  it('should create one frequency', () => {
    expect(randFrequency()).toBeTruthy();
  });
});
