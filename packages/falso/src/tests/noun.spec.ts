import { randNoun } from '../lib/noun';

describe(' noun', () => {
  it('should return a random noun (type string)', () => {
    expect(typeof randNoun()).toEqual('string');
  });

  it('should return a list of nouns', () => {
    const adjectives = randNoun({ length: 4 });

    expect(adjectives.length).toEqual(4);
  });
});
