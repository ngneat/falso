const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

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

  for(const [category, items] of Object.entries(categories)) {
    let md = `# ${capitalize(category)}\n\n`;

    const funcs = items.map(item => {
      return `### \`\`\`${item.name}\`\`\`\n\n${item.description}\n\n\`\`\`ts\nimport { ${item.name} } from '@ngneat/falso';\n\n${item.examples.join('\n')}\n\`\`\`\n\n`;
    });

    md += funcs.join('');

    fs.writeFileSync(path.join('docs', 'docs', `${category.toLowerCase()}.md`), md, { encoding: 'utf8' });
  }
});


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
