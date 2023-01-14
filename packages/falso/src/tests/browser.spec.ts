import { randBrowser } from '../lib/browser/browser';

describe('browser', () => {
  it('should create one browser', () => {
    expect(typeof randBrowser()).toBe('string');
  });
});
