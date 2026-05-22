import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Feature Flag Service',
  tagline: 'Ship features safely. Control who sees what.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.ffs.adarshrust.com',
  baseUrl: '/',

  organizationName: 'Webrowse',
  projectName: 'feature-flag-service-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        searchResultLimits: 12,
        searchBarShortcutHint: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
    '@docusaurus/theme-mermaid',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    metadata: [
      {
        name: 'keywords',
        content:
          'feature flags, feature toggles, a/b testing, rollout, targeting, rust, self-hosted',
      },
      {name: 'robots', content: 'index, follow'},
    ],

    navbar: {
      title: 'Feature Flag Service',
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/api-reference',
          label: 'API Reference',
          position: 'left',
        },
        {
          to: '/docs/self-hosting',
          label: 'Self-Hosting',
          position: 'left',
        },
        {
          href: 'https://ffs.adarshrust.com',
          label: 'Dashboard',
          position: 'right',
        },
        {
          href: 'https://github.com/Webrowse/feature-flag-service-backend',
          'aria-label': 'GitHub',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Quickstart', to: '/docs/getting-started/quickstart'},
            {label: 'Concepts', to: '/docs/concepts'},
            {label: 'API Reference', to: '/docs/api-reference'},
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'Dashboard',
              href: 'https://ffs.adarshrust.com',
            },
            {
              label: 'Backend',
              href: 'https://github.com/Webrowse/feature-flag-service-backend',
            },
            {
              label: 'Frontend',
              href: 'https://github.com/Webrowse/feature-flag-service-frontend',
            },
          ],
        },
      ],
      copyright: `docs.ffs.adarshrust.com`,
    },

    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        'bash',
        'json',
        'typescript',
        'python',
        'rust',
        'yaml',
        'docker',
        'http',
      ],
      defaultLanguage: 'bash',
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    mermaid: {
      theme: {light: 'dark', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
