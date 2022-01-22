import { randEmoji } from '../lib/emoji';

describe('emoji', () => {
  it('should create random emoji', () => {
    expect(randEmoji).toBeTruthy();
  });

  it('should create random emoji', () => {
    console.log(randEmoji({ length: 120 }));
    expect(randEmoji({ length: 120 }).length).toEqual(120);
  });
});
