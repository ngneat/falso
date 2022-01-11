/**
 * Random valid UUID
 */
export function randomUuid(): string {
  // UUIDs must be of the form "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx",
  // where x is one of [0-9, a-f] M is one of [1-5], and N is [8, 9, a, or b]
  const mGroup = '12345';
  const nGroup = '89ab';

  const xGroup1 = getGroupOfX(8);
  const xGroup2 = getGroupOfX(4);
  const xGroup3 = getGroupOfX(3);
  const xGroup4 = getGroupOfX(3);
  const xGroup5 = getGroupOfX(12);

  const mValue = mGroup.charAt(Math.floor(Math.random() * 5));
  const nValue = nGroup.charAt(Math.floor(Math.random() * 4));

  return `${xGroup1}-${xGroup2}-${mValue}${xGroup3}-${nValue}${xGroup4}-${xGroup5}`;
}

function getGroupOfX(size: number) {
  const xGroup = '0123456789abcdef';
  return Array(size)
    .fill('x')
    .map(() => {
      const random = Math.floor(Math.random() * size);
      return xGroup.charAt(random);
    })
    .join('');
}
