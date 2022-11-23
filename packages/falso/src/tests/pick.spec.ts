import { randPick } from '../lib/pick';

describe('randPick', () => {
  it('should throw an error on empty array', () => {
    const test = () => {
      randPick([]);
    };
    expect(test).toThrow(Error);
    expect(test).toThrow('the array need to have at least 1 element');
  });
});
