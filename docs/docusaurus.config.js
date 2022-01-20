const lightCodeTheme = require('prism-react-renderer/themes/nightOwlLight');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Falso | All the Fake Data for All Your Real Needs',
  tagline: 'All the Fake Data for All Your Real Needs',
  baseUrl: '/falso/',
  url: 'https://ngneat.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ngneat',
  projectName: 'falso',
  themeConfig: {
    algolia: {
      apiKey: 'changethis',
      indexName: 'falso',
    },
    navbar: {
      title: 'Falso',
      logo: {
        alt: 'Falso',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/ngneat/falso',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/date',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/ngneat/falso/discussions',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/NetanelBasal',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ngneat/falso',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NgNeat, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/ngneat/falso/docusaurus/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
