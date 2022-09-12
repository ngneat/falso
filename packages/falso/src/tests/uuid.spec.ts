import { randUuid } from '../lib/uuid';
import { seed } from '../lib/random';

describe('uuid', () => {
  afterAll(() => {
    seed();
  });

  it('should generate uuid from seed', () => {
    seed('🙃🔥😊');
    expect(randUuid()).toEqual('02c11a83-1678-4638-9e55-39d543c31599');
    seed('🚀🚀🚀');
    expect(randUuid()).toEqual('b9b0b6f3-8e6d-4853-b562-e726ee32fec2');
    seed('🙃🔥😊');
    expect(randUuid()).toEqual('02c11a83-1678-4638-9e55-39d543c31599');
  });
});
