const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { minify } = require("terser");

jsdoc2md.getTemplateData({
  files    : glob.sync('packages/falso/src/lib/*.ts'),
  configure: 'jsdoc.json'
}).then(res => {
  const categories = res.reduce((acc, current) => {
    const c = current.category.toLowerCase();

    if(!acc[c]) {
      acc[c] = [];
    }

    acc[c].push(current);

    return acc;
  }, {});

  const docsOutputPath = path.join('docs', 'docs', 'auto-generated');
  if (!fs.existsSync(docsOutputPath)) {
    fs.mkdirSync(docsOutputPath);
  }

  for(const [category, items] of Object.entries(categories)) {
    let md = `---\nslug: /${category.toLowerCase()}\n---\n\n# ${capitalize(category)}\n\n`;

    const funcs = items.map(item => {
      return `### \`\`\`${item.name}\`\`\`\n\n${item.description}\n\n\`\`\`ts\nimport { ${item.name} } from '@ngneat/falso';\n\n${item.examples.join('\n')}\n\`\`\`\n\n\`\`\`jsx live\nfunction Demo(props) {\n  return <Preview source={() => ${item.name}()}/>;\n}\n\`\`\`\n\n`;
    });

    md += funcs.join('');

    fs.writeFileSync(path.join(docsOutputPath, `${category.toLowerCase()}.mdx`), md, { encoding: 'utf8' });
  }

  const [falsoESMPath] = glob.sync('dist/**/index.esm.js');
  minify(fs.readFileSync(falsoESMPath, "utf8")).then((minified) => {
    fs.writeFileSync(path.join('docs', 'src', 'theme', 'ReactLiveScope', 'falso.min.js'), minified.code);
  });
});


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
