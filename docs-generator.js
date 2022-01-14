const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

jsdoc2md.getTemplateData({
  files    : glob.sync('packages/falso/src/lib/*.ts'),
  configure: 'jsdoc.json'
}).then(res => {
  const categories = res.reduce((acc, current) => {
    if(!acc[current.category]) {
      acc[current.category] = [];
    }

    acc[current.category].push(current);

    return acc;
  }, {});

  for(const [category, items] of Object.entries(categories)) {
    let md = `# ${category}\n\n`;

    const funcs = items.map(item => {
      return `### \`\`\`${item.name}\`\`\`\n\n${item.description}\n\n\`\`\`ts\nimport { ${item.name} } from '@ngneat/falso';\n\n${item.examples.join('\n')}\n\`\`\`\n\n`;
    });

    md += funcs.join('');

    console.log(items);

    fs.writeFileSync(path.join('docs', 'docs', `${category.toLowerCase()}.md`), md, { encoding: 'utf8' });
  }
});
