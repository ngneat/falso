import { randBrowser } from '../lib/browser';

describe('browser', () => {
  it('should create one browser', () => {
    expect(randBrowser()).toBeTruthy();
  });
});
