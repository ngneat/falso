import { checkUnique } from '../lib/nearby-gpscoordinate';

describe('randNearbyGPSCoordinate checkUnique', () => {
  let coordinate1: [number, number];
  let coordinate2: [number, number];
  let coordinate3: [number, number];

  beforeEach(() => {
    coordinate1 = [70.633, -80.249];
    coordinate2 = [-32.073, -102.123];
    coordinate3 = [41.478, -4.485];
  });

  it('should return true if coordinate1 does not exist in coordinate1 array', () => {
    const result = checkUnique(coordinate1, [coordinate2, coordinate3]);

    expect(result).toEqual(true);
  });

  it('should return false if coordinate1 exists in coordinate1 array', () => {
    const result = checkUnique(coordinate1, [coordinate1, coordinate3]);

    expect(result).toEqual(false);
  });
});
