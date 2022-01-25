# Contributing to Falso

🙏 We would ❤️ for you to contribute to Falso and help make it even better than it is today!

## Developing

- Run `npm i`
- Create new falso by running `yarn new email`

  - Use `--json` (default `false`) to indicate that the falso will load its data from a JSON file
  - Use `--skip-test` (default `false`) to indicate that the falso should not generate a test file

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

- All features or bug fixes **must be tested** by one or more specs (unit-tests).
  - One test that asserts the function's return value, if it's an object asserts each key.
  - All options must be tested.
- All public API methods **must be documented**, the documentation is via **JSDoc above the function** declaration.
  - If the function excepts different options each must be documented in a separate `@example` block.
  - If an option has a default value it must be specified next to the example, e.g.:  
    `randAvatar({ size: 200 }) // default is 100`

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**. But also,
we use the git commit messages to **generate the Falso changelog**.

### Commit Message Format

Use `npm run c` and answer the questions.

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/angular/angular/commits/master))

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```
