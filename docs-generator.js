const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { minify } = require("terser");

const functionModifiers = {
  rand: 'rand([1,2,3])',
  randBoolean: 'randBoolean().toString()',
  randFutureDate: 'randFutureDate().toString()',
  randBetweenDate: 'randBetweenDate({ from: new Date(\'10/07/2020\'), to: new Date(\'10/07/2025\') }).toString()',
  randPastDate: 'randPastDate().toString()',
  randRecentDate: 'randRecentDate().toString()',
  randSoonDate: 'randSoonDate().toString()',
}

const skipLivePreview = ['seed'];

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

    md += items.map(getDocsSection).join('');

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

function getDocsSection({name, description, examples}) {
  let section = `### \`\`\`${name}\`\`\`\n\n${description}\n\n\`\`\`ts\nimport { ${name} } from '@ngneat/falso';\n\n${examples.join('\n')}\n\`\`\`\n\n`;

  if (!skipLivePreview.includes(name)) {
    const funcCall = functionModifiers[name] ? functionModifiers[name] : `${name}()`;
    const source = `() => ${funcCall}`;

    section += `\`\`\`jsx live\nfunction Demo(props) {\n  return <Preview source={${source}}/>;\n}\n\`\`\`\n\n`;
  }

  return section;

}
