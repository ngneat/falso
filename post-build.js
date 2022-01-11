const json = require('json-update');

json.update('dist/packages/falso/package.json', { main: './index.cjs.js' })
  .then(() => {
    console.log('Changed umd to cjs');
  });
