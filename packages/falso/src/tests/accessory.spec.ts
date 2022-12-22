import { randAccessory } from '../lib/accessory/accessory';

describe('accessory', () => {
  it('should create', () => {
    const accessory = randAccessory();

    expect(accessory).toBeTruthy();
    expect(typeof accessory).toEqual('string');
    expect(accessory.length).toBeGreaterThan(0);
  });

  it('should create with fixed length', () => {
    const givenLength = 8;
    const accessory = randAccessory({ length: givenLength });

    expect(accessory?.length).toEqual(givenLength);
  });
});
