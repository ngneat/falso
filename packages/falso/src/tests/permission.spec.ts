import { randPermission } from '../lib/permission';

describe('permission', () => {
  it('should create', () => {
    expect(randPermission).toBeTruthy();
  });
  it('should create numeric permissions', () => {
    const expected = [0, 1, 2, 4];
    expect(expected.includes(randPermission({ numeric: true }) as number)).toBe(
      true
    );
  });
  it('should create numeric permission combinations', () => {
    const expected = [0, 1, 2, 3, 4, 5, 6, 7];
    expect(
      expected.includes(
        randPermission({ numeric: true, combination: true }) as number
      )
    ).toBe(true);
  });
  it('should create permission combinations', () => {
    const expected = ['---', '--x', '-w-', '-wx', 'r--', 'r-x', 'rw-', 'rwx'];
    expect(
      expected.includes(randPermission({ combination: true }) as string)
    ).toBe(true);
  });
});
