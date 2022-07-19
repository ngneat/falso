import { FakeOptions, fake } from './core/core';
import { data } from './paragraph.json';

/**
 * Generate a random paragraph.
 *
 * @category text
 *
 * @example
 *
 * randJobTitle()
 *
 * @example
 *
 * randJobTitle({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Quia sit architecto itaque voluptas aliquam. Rem veritatis qui quasi sint velit dolorem maxime voluptatem. Sit aut laboriosam aspernatur dicta non consequatur qui recusandae. Dignissimos voluptatem labore praesentium.'
 * 'Eveniet qui aperiam et. Rem incidunt sapiente architecto earum consectetur officia. Assumenda voluptatem sed aperiam sed temporibus sunt in. Totam molestiae aspernatur quia non rem facilis expedita harum veritatis. Culpa ipsam quo dolor.'
 * 'Perspiciatis distinctio quia est magni. Aliquid id sed qui quis eum amet ut iusto. Et eos repellat nisi doloremque. Non est aut dolores accusamus pariatur placeat amet dolor.'
 */

export function randParagraph<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
