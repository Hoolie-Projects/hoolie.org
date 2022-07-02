// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hoolie Projects',
  tagline: 'Мы делаем веб-студию',
  url: 'https://hoolie.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'hoolie-projects',
  projectName: 'hoolie.org',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hoolie Projects',
        logo: {
          alt: 'Hoolie Projects',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/blog', label: 'Новости', position: 'left'},
          {to: '/hire', label: 'Присоединиться', position: 'left'},
          {
            href: 'https://github.com/hoolie-projects',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://t.me/hoolie_projects',
            label: 'Telegram',
            position: 'right',
          },
          {
            href: 'https://vk.com/hoolie_projects',
            label: 'VK',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   // style: 'dark',
      //   // links: [
      //   //   {
      //   //     title: 'Docs',
      //   //     items: [
      //   //       {
      //   //         label: 'Tutorial',
      //   //         to: '/docs/intro',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: 'Community',
      //   //     items: [
      //   //       {
      //   //         label: 'Stack Overflow',
      //   //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //   //       },
      //   //       {
      //   //         label: 'Discord',
      //   //         href: 'https://discordapp.com/invite/docusaurus',
      //   //       },
      //   //       {
      //   //         label: 'Twitter',
      //   //         href: 'https://twitter.com/docusaurus',
      //   //       },
      //   //     ],
      //   //   },
      //   //   {
      //   //     title: 'More',
      //   //     items: [
      //   //       {
      //   //         label: 'Blog',
      //   //         to: '/blog',
      //   //       },
      //   //       {
      //   //         label: 'GitHub',
      //   //         href: 'https://github.com/facebook/docusaurus',
      //   //       },
      //   //     ],
      //   //   },
      //   // ],
      //   // copyright: `Copyright © ${new Date().getFullYear()} Hoolie Projects`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config;
