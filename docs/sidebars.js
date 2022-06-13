/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const glob = require('glob');

const items = [
  ...glob.sync('./docs/getting-started.mdx'),
  ...glob.sync('./docs/factories.mdx'),
  ...glob.sync('./docs/auto-generated/*.md?(x)')
].map(p => p.replace(/\.\/docs\/(.+)\.mdx?/, '$1'));

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  falso: items,

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
