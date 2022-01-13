import { mask } from '@ngneat/falso';

test('', () => {
  const d2 = mask({ length: 5 });
  console.log(d2);

  expect(true).toBeTruthy();
});
