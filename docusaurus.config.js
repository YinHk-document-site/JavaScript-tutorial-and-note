// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JavaScript',
  tagline: 'Note and document for Modern JavaScript',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/js_logo.svg',
  organizationName: 'YinHk', // Usually your GitHub org/user name.
  projectName: 'JavaScript tutorial and notes', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'JavaScript',
        logo: {
          alt: 'JS Logo',
          src: 'img/js_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'note',
            position: 'right',
            label: 'Note',
          },
          {
            href: 'https://github.com/YinHk-Notes/javascript-cheatsheet-and-note',
            label: 'Cheatsheet',
            position: 'right',
          },
          {
            href: 'https://github.com/YinHk-document-site/JavaScript-tutorial-and-note.git',
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
                label: 'Note',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Resource',
            items: [
              {
                label: 'MDN web docs',
                href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              },
              {
                label: 'JavaScript Tutorial',
                href: 'https://www.javascripttutorial.net/',
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/YinHk-document-site/JavaScript-tutorial-and-note.git',
              },
              {
                label: 'JS cheat sheet',
                href: 'https://github.com/YinHk-Notes/javascript-cheatsheet-and-note',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JavaScript tutorial and notes, created by YinHk.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
