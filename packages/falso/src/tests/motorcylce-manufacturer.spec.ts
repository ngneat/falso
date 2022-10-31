import { randMotorcylceManufacturer } from '../lib/motorcycle-manufacturer';

describe('motorcylceManufacturer', () => {
  it('should retrieve one motorcycle manufacturer', () => {
    expect(typeof randMotorcylceManufacturer()).toBe('string');
  });
});
