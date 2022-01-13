import { fake, FakeOptions } from './core';

type Category = 'animals' | 'arch' | 'nature' | 'people' | 'tech';

export function img<
  Options extends FakeOptions & {
    width?: number;
    height?: number;
    category?: Category;
  }
>(options?: Options) {
  const [width, height, category] = [
    options?.width ?? 500,
    options?.height ?? 500,
    options?.category ?? '',
  ];

  return fake(
    () =>
      `https://placeimg.com/${width}/${height}${
        category ? `/${category}` : category
      }`,
    options
  );
}
