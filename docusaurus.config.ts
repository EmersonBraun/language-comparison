import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Language Comparison',
  tagline: 'Compare programming languages side by side',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://emersonbraun.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/language-comparison/',

  // GitHub pages deployment config.
  organizationName: 'EmersonBraun',
  projectName: 'language-comparison',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // i18n config
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
        direction: 'ltr',
        htmlLang: 'pt-BR',
        calendar: 'gregory',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-ES',
        calendar: 'gregory',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/EmersonBraun/language-comparison/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Algolia config - replace with your actual Algolia credentials
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'language-comparison',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Language Comparison Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Language Comparison',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [],
          dropdownItemsBefore: [],
        },
        {
          type: 'search',
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
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Author Social Links',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/emersonbraun',
            },
            {
              label: 'X',
              href: 'https://x.com/emersonbraun',
            },
          ],
        },
        {
          title: 'Tired of failing technical interviews?',
          items: [
            {
              label: 'Get my FREE e-book',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Language Comparison. Created by Emerson Braun.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'javascript',
        'typescript',
        'php',
        'rust',
        'go',
        'python',
        'zig',
        'csharp',
        'cpp',
        'c',
        'java',
        'ruby',
        'swift',
      ],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

