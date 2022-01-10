# Translate executor

## Google Translate Setup

1. Follow guidelines from: <https://cloud.google.com/translate/docs/setup>
2. [Generate keys](https://cloud.google.com/translate/docs/setup#creating_service_accounts_and_keys) and download them
3. Place JSON at `./files/google-cloud-secret.json`.

## Usage

### Modify `workspace.json` file

Check / change below options under "translate" object:

- `path` - List of file paths of which translation needs to be generated
- `languages` - List of languages to which translations will be generated. For full list refer to: <https://cloud.google.com/translate/docs/languages>
- `output` - Output directory when translation files will be generated

### Run `translate` script

Once you've reviewed the options, you just need to run below script from root of the project:

```bash
# from project root
nx run falso:translate --verbose
```

## Development

```bash
# from project root
npx tsc tools/executors/translate/index --watch
```
