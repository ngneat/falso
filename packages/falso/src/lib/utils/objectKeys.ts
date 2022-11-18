export type ObjectKeys<T extends Record<PropertyKey, unknown>> = Exclude<
  keyof T,
  symbol
>;

/**
 * A utility function which behaves identical to
 * [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).
 * It preserves type strictly
 */
export const objectKeys = <Type extends Record<PropertyKey, unknown>>(
  obj: Type
): Array<ObjectKeys<Type>> => {
  return Object.keys(obj) as Array<ObjectKeys<Type>>;
};
