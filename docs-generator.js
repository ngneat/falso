const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { minify } = require('terser');

function imageModifier(generator) {
  // we chain the query param to trigger refetching of the image.
  return `<img src={\`\${${generator}()}?\${Math.random()}\`} alt="Random image"/>`;
}

function stringModifier(generator) {
  return `${generator}().toString()`;
}

const functionModifiers = {
  randBoolean: stringModifier,
  randFutureDate: stringModifier,
  randPastDate: stringModifier,
  randRecentDate: stringModifier,
  randSoonDate: stringModifier,
  randAvatar: imageModifier,
  randImg: imageModifier,
  randChanceBoolean: 'randChanceBoolean({chanceTrue: 0.78}).toString()',
  rand: 'rand([1,2,3])',
  randBetweenDate:
    "randBetweenDate({ from: new Date('10/07/2020'), to: new Date('10/07/2025') }).toString()",
  randTextRange: 'randTextRange({ min: 10, max: 100 })',
};

const skipLivePreview = ['seed'];

jsdoc2md
  .getTemplateData({
    files: glob.sync('packages/falso/src/lib/*.ts'),
    configure: 'jsdoc.json',
  })
  .then((res) => {
    const categories = res.reduce((acc, current) => {
      try {
        if (!current.category) throw new Error('No category found');
        const category = current.category.toLowerCase();

        // Handle multiple categories
        if (category.includes(',')) {
          const categoryList = category.split(', ');
          categoryList.forEach((c) => {
            acc[c] = acc[c] || [];
            acc[c].push({ ...current, category: c });
          });
        } else {
          acc[category] = acc[category] || [];
          acc[category].push(current);
        }
        return acc;
      } catch (error) {
        console.warn(`Skipping entry due to error: ${error.message}`);
        return acc;
      }
    }, {});

    const docsOutputPath = path.join('docs', 'docs', 'auto-generated');
    fs.mkdirSync(docsOutputPath, { recursive: true });

    if (Object.keys(categories).length > 0) {
      for (const [category, items] of Object.entries(categories)) {
        let md = `---\nslug: /${category.toLowerCase()}\n---\n\n# ${capitalize(
          category
        )}\n\n`;

        md += items
          .sort((funcA, funcB) => sortFunctions(funcA, funcB))
          .map(getDocsSection)
          .join('');

        fs.writeFileSync(
          path.join(docsOutputPath, `${category.toLowerCase()}.mdx`),
          md,
          { encoding: 'utf8' }
        );
      }
    } else {
      console.warn('No categories found in the documentation data.');
    }

    const [falsoESMPath] = glob.sync('dist/packages/falso/index.esm.js');
    if (falsoESMPath) {
      const fileContent = fs.readFileSync(falsoESMPath, 'utf8');
      minify(fileContent).then((minified) => {
        const minifiedPath = path.join(
          'docs',
          'src',
          'theme',
          'ReactLiveScope',
          'falso.min.js'
        );
        fs.writeFileSync(minifiedPath, minified.code);
      });
    } else {
      console.warn('falso ESM file not found.');
    }
  })
  .catch((err) => {
    console.error(`Error generating documentation: ${err.message}`);
  });

function sortFunctions(funcA, funcB) {
  return funcA.name.localeCompare(funcB.name);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getDocsSection({ name, description = '', examples = [] }) {
  let section = `### \`${name}\`\n\n${description}\n\n\`\`\`ts\nimport { ${name} } from '@ngneat/falso';\n\n${examples.join(
    '\n'
  )}\n\`\`\`\n\n`;

  if (!skipLivePreview.includes(name)) {
    let funcCall = `${name}()`;
    const modifier = functionModifiers[name];
    if (modifier) {
      funcCall = typeof modifier === 'function' ? modifier(name) : modifier;
    }
    const source = `() => ${funcCall}`;

    section += `\`\`\`jsx live\nfunction Demo(props) {\n  return <Preview source={${source}} />;\n}\n\`\`\`\n\n`;
  }

  return section;
}
