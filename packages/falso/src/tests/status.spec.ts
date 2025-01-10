import { randStatus } from '../lib/status';

describe('status', () => {
  it('should create', () => {
    expect(randStatus).toBeTruthy();
  });

  it('should create random status', () => {
    expect(randStatus()).toBeTruthy();
  });

  it('should create random user story status', () => {
    expect(
      randStatus({
        type: 'User Story',
      })
    ).toBeTruthy();
  });
});
