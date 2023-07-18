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
  randTextRange: 'randTextRange({ min: 10, max: 100 })',
}

const skipLivePreview = ['seed'];

jsdoc2md.getTemplateData({
  files: glob.sync('packages/falso/src/lib/*.ts'),
  configure: 'jsdoc.json'
}).then(res => {
  const categories = res.reduce((acc, current) => {
    const category = current.category.toLowerCase();

    // Handle multiple categories
    if (category.includes(',')) {
      const categories = category.split(', ');
      categories.forEach((c) => {
        if (!acc[c]) {
          acc[c] = [];
        }

        acc[c].push({
          ...current,
          category: c,
        });
      });
    }
    else {
      if (!acc[category]) {
        acc[category] = [];
      }

      acc[category].push(current);
    }

    return acc;
  }, {});

  const docsOutputPath = path.join('docs', 'docs', 'auto-generated');
  if (!fs.existsSync(docsOutputPath)) {
    fs.mkdirSync(docsOutputPath);
  }

  for (let [category, items] of Object.entries(categories)) {
    let md = `---\nslug: /${category.toLowerCase()}\n---\n\n# ${capitalize(category)}\n\n`;

    md += items.sort((funcA, funcB) => sortFunctions(funcA, funcB)).map(getDocsSection).join('');

    fs.writeFileSync(path.join(docsOutputPath, `${category.toLowerCase()}.mdx`), md, { encoding: 'utf8' });
  }

  const [falsoESMPath] = glob.sync('dist/packages/falso/index.js');
  minify(fs.readFileSync(falsoESMPath, "utf8")).then((minified) => {
    fs.writeFileSync(path.join('docs', 'src', 'theme', 'ReactLiveScope', 'falso.min.js'), minified.code);
  });
});

function sortFunctions(funcA, funcB) {
  if (funcA.name < funcB.name) {
    return -1;
  }

  if (funcA.name > funcB.name) {
    return 1;
  }

  return 0;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDocsSection({ name, description, examples }) {
  let section = `### \`\`\`${name}\`\`\`\n\n${description}\n\n\`\`\`ts\nimport { ${name} } from '@ngneat/falso';\n\n${examples.join('\n')}\n\`\`\`\n\n`;

  if (!skipLivePreview.includes(name)) {
    const funcCall = functionModifiers[name] ? functionModifiers[name] : `${name}()`;
    const source = `() => ${funcCall}`;

    section += `\`\`\`jsx live\nfunction Demo(props) {\n  return <Preview source={${source}}/>;\n}\n\`\`\`\n\n`;
  }

  return section;

}
