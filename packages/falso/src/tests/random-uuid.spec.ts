import { randomUuid } from '../lib/random-uuid';
describe('random-uuid', () => {
  it('should match UUID regex', () => {
    const uuid = randomUuid();
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/g;
    expect(uuid.match(regex)).toBeTruthy();
  });

  it('should ensure no duplicate elements into a range of 10', () => {
    const elements = Array(10)
      .fill('x')
      .map(() => randomUuid());

    const withoutDuplicates = [...new Set(elements)];

    let duplicates = [...elements];
    withoutDuplicates.map((item) => {
      const i = duplicates.indexOf(item);
      duplicates = duplicates
        .slice(0, i)
        .concat(duplicates.slice(i + 1, duplicates.length));
    });
    expect(duplicates.length).toBe(0);
  });
});
