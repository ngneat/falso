import { randBrowser } from '../lib/browser';

describe('browser', () => {
  it('should create one browser', () => {
    expect(typeof randBrowser()).toBe('string');
  });
});
