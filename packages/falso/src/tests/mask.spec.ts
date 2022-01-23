import { randMask } from '../lib/mask';

describe('mask', () => {
  it('should return a random string', () => {
    expect(typeof randMask()).toEqual('string');
  });

  it('should return a random string from mask', () => {
    expect(
      randMask({
        mask: '#@#@###@#@#@##@#@#@@#@#@#@@@@#@#',
      })
    ).toMatch(/^[a-z0-9]{32}$/gi);
  });

  it('should return 20 random string', () => {
    const masks = randMask({
      length: 20,
    });
    expect(masks.length).toEqual(20);
  });
});
