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
        colorMode: {
            respectPrefersColorScheme: true,
        },
        algolia: {
            appId: '4MDX7BPF21',
            apiKey: '464a7197abc1659dd1b9be9e70cb3e1c',
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
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/NetanelBasal',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/ngneat/falso',
                    }, ],
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
