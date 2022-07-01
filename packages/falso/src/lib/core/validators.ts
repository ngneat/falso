export function isNil<T>(
  value: T | null | undefined
): value is null | undefined {
  return value === null || typeof value === 'undefined';
}
