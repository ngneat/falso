import { randSvg } from '../lib/svg';

describe('svg', () => {
  it('should create', () => {
    const svg = randSvg();

    expect(svg).toBeTruthy();
    expect(typeof svg).toEqual('string');
    expect(svg.length).toBeGreaterThan(0);

    const svgRegex = /^<svg\b[^>]*?(?:viewBox="(\b[^"]*)")?>([\s\S]*?)<\/svg>$/;

    expect(svgRegex.test(svg)).toBeTruthy();
  });
});
