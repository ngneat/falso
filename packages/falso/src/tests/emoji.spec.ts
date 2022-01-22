import { randEmoji } from '../lib/emoji';

describe('emoji', () => {
  it('should create random emoji', () => {
    expect(randEmoji).toBeTruthy();
  });

  it('should create random emoji', () => {
    expect(randEmoji({ length: 20 }).length).toEqual(20);
  });
});
