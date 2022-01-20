import { randPermission } from '../lib/permission';

describe('permission', () => {
  it('should create', () => {
    expect(randPermission).toBeTruthy();
  });

  it('should create one permission', () => {
    expect(typeof randPermission()).toBe('string');
  });

  it('should create one numeric permissions', () => {
    expect(typeof randPermission({ numeric: true })).toBe('number');
  });
});
