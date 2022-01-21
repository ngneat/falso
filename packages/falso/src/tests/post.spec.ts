import { randPost } from '../lib/post';

describe('post', () => {
  it('should create one post', () => {
    expect(typeof randPost()).toBe('object');
  });
});
