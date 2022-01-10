# Translate executor

## Google Translate Setup

1. Follow guidelines from: <https://cloud.google.com/translate/docs/setup>
2. [Generate keys](https://cloud.google.com/translate/docs/setup#creating_service_accounts_and_keys) and download them
3. Place JSON at `./files/google-cloud-secret.json`.

## Development

```bash
# from project root
npx tsc tools/executors/translate/index --watch
```

## Usage

```bash
# from project root
nx run falso:translate --verbose 
```
