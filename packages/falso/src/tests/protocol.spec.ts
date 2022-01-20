import { randProtocol } from '../lib/protocol';

describe('protocol', () => {
  it('should create a protocol', () => {
    const protocol = randProtocol();

    expect(typeof protocol).toEqual('string');
  });
  it('should create a protocol with its full name', () => {
    const protocol = randProtocol({ fullName: true });

    expect(typeof protocol).toEqual('string');
  });
});
