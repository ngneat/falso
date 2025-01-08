import { randAdjective } from '../lib/adjective';

describe(' adjective', () => {
  it('should return a random adjective (type string)', () => {
    expect(typeof randAdjective()).toEqual('string');
  });

  it('should return a list of adjectives', () => {
    const adjectives = randAdjective({ length: 4 });

    expect(adjectives.length).toEqual(4);
  });
});
