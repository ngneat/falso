import {
  CODE_SNIPPET_LANGUAGES,
  randCodeSnippet,
} from '../lib/code-snippet/code-snippet';

describe('code-snippet', () => {
  it('should create one code snippet', () => {
    expect(typeof randCodeSnippet()).toBe('string');
  });

  it('should have a code snippet for all CodeSnippetLang literals', () => {
    CODE_SNIPPET_LANGUAGES.forEach((CODE_SNIPPET_LANGUAGE) => {
      expect(typeof randCodeSnippet({ lang: CODE_SNIPPET_LANGUAGE })).toBe(
        'string'
      );
    });
  });
});
