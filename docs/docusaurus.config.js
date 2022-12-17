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
    clientModules: [
        require.resolve('./src/consolePlayground/index.js'),
    ],
    themeConfig: {
      metadata: [{
        name: 'google-site-verification',
        content: 'zLIQAxOp2sGFy10UE51HAMtWTqg7J8z1hpTxZR9G1WA'
      }],
        colorMode: {
            respectPrefersColorScheme: true,
        },
        algolia: {
            appId: '4MDX7BPF21',
            apiKey: 'd3ffc5b0d4a149aed5a9941218893db7',
            indexName: 'falso',
        },
        navbar: {
            title: 'Falso',
            logo: {
                alt: 'Falso',
                src: 'img/logo.png',
            },
            items: [{
                    to: 'docs/getting-started',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
              className: "first-nav-element"
                },
              {
                href: 'https://github.com/sponsors/ngneat',
                label: 'Sponsor',
                position: 'right',
                className: 'header-icon-link header-sponsor-link',
              },
              {
                href: 'https://github.com/ngneat/falso/',
                label: ' ',
                position: 'right',
                className: 'header-icon-link header-github-link',
              },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Docs',
                        to: '/docs/getting-started',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Discussions',
                            href: 'https://github.com/ngneat/falso/discussions',
                        }
                    ],
                },
                {
                  title: 'More',
                  items: [
                    {
                      label: 'GitHub',
                      href: 'https://github.com/ngneat/falso',
                    },
                    {
                      label: 'Twitter',
                      href: 'https://twitter.com/ngneat_org',
                    },
                    {
                      label: 'YouTube',
                      href: 'https://youtube.com/@ngneat',
                    },
                    {
                      label: 'Official site',
                      href: 'https://ngneat.com/',
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
                    editUrl: ({versionDocsDirPath, docPath}) => {
                      if (docPath.startsWith('auto-generated')) {
                        return 'https://github.com/ngneat/falso/blob/main/docs/updating-docs.md';
                      }

                      return `https://github.com/ngneat/falso/edit/main/docs/${versionDocsDirPath}/${docPath}`;
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
