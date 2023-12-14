import { randResolution } from '../lib/resolution';

describe('randResolution', () => {
  it('should return an object with properties width and height', () => {
    const resolution = randResolution();
    const width = parseInt(resolution.width);
    const height = parseInt(resolution.height);

    expect(resolution).toBeTruthy();
    expect(typeof resolution).toBe('object');
    expect(resolution).toHaveProperty('width');
    expect(resolution).toHaveProperty('height');
    expect(Number.isInteger(width)).toBe(true);
    expect(Number.isInteger(height)).toBe(true);
  });
});
