import { randHsl } from '../lib/hsl';

describe('hsl', () => {
  it('should return a hsl string in the correct format', () => {
    const expected = /hsl\((\d{1,3}), (\d{1,3})%, (\d{1,3})%\)/;

    expect(randHsl()).toEqual(expect.stringMatching(expected));
  });

  it('should return a hsla string in the correct format', () => {
    const expected =
      /hsla\((\d{1,3}), (\d{1,3})%, (\d{1,3})%, \s*(\d*(?:\.\d+)?)\)$/;

    expect(randHsl({ alpha: true })).toEqual(expect.stringMatching(expected));
  });

  it('should return hue value between 0 and 359', () => {
    const colourValues = randHsl().match(/\d+/g)?.map(Number);

    expect(colourValues?.[0]).toBeGreaterThanOrEqual(0);
    expect(colourValues?.[0]).toBeLessThanOrEqual(359);
  });

  it('should return saturation value between 0 and 100', () => {
    const colourValues = randHsl().match(/\d+/g)?.map(Number);

    expect(colourValues?.[1]).toBeGreaterThanOrEqual(0);
    expect(colourValues?.[1]).toBeLessThanOrEqual(100);
  });

  it('should return lightness value between 0 and 100', () => {
    const colourValues = randHsl().match(/\d+/g)?.map(Number);

    expect(colourValues?.[2]).toBeGreaterThanOrEqual(0);
    expect(colourValues?.[2]).toBeLessThanOrEqual(100);
  });

  it('should return alpha value between 0.1 and 1', () => {
    const colourValues = randHsl({ alpha: true })
      .match(/\d*(?:\.\d+)/)
      ?.map(Number);

    expect(colourValues?.[0]).toBeGreaterThanOrEqual(0.1);
    expect(colourValues?.[0]).toBeLessThanOrEqual(1);
  });
});
