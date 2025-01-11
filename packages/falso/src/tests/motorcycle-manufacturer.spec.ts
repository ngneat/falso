import { randMotorcycleManufacturer } from '../lib/motorcycle-manufacturer';

describe('motorcycleManufacturer', () => {
  it('should retrieve one motorcycle manufacturer', () => {
    expect(typeof randMotorcycleManufacturer()).toBe('string');
  });
});
