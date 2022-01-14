import { randomSequence } from '@ngneat/falso';

test('', () => {
  const d2 = randomSequence({ length: 5 });
  console.log(d2);

  expect(true).toBeTruthy();
});
