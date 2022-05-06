export const primitiveValueIsUnique: <T>(item: T, items: T[]) => boolean = (
  item,
  items
) => !items.includes(item);

export const dateIsUnique: (date: Date, dates: Date[]) => boolean = (
  date,
  dates
) => !dates.some((d) => d.valueOf() === date.valueOf());

export const objectWithIdIsUnique: <T extends { id: string }>(
  item: T,
  items: T[]
) => boolean = (item, items) => objectIsUnique(item, items, ['id']);

export const objectIsUnique: (
  item: any,
  items: any[],
  keys: string[]
) => boolean = (item: any, items: any[], keys: string[]) => {
  for (const key of keys) {
    if (!item[key]) {
      throw new Error(`${key} does not exist in this array value type`);
    }

    if (items.some((arrayItem) => arrayItem[key] === item[key])) {
      return false;
    }
  }

  return true;
};
