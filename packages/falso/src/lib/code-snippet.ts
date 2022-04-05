import { fake, FakeOptions } from './core/core';
import { data } from './code-snippet.json';

export const CODE_SNIPPET_LANGUAGES = [
  'bash',
  'c',
  'c#',
  'c++',
  'go',
  'html',
  'java',
  'javascript',
  'php',
  'python',
  'rust',
  'sql',
  'swift',
] as const;

type CodeSnippetLang = typeof CODE_SNIPPET_LANGUAGES[number];

interface CodeSnippetOptions extends FakeOptions {
  lang?: CodeSnippetLang;
}

/**
 * Generate a random code snippet.
 *
 * @category code
 *
 * @example
 *
 * randCodeSnippet()
 *
 * @example
 *
 * randCodeSnippet({ lang: 'html' }) // default is 'javascript'
 *
 * @example
 *
 * randCodeSnippet({ length: 10 })
 *
 * @example
 *
 * randCodeSnippet({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randCodeSnippet<Options extends CodeSnippetOptions = never>(
  options?: Options
) {
  const lang = options?.lang ?? 'javascript';

  return fake(() => data[lang], options);
}
