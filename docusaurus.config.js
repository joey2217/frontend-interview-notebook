module.exports = {
  title: '前端面试手册',
  tagline: '前端基础知识,面试题...',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Joey', // Usually your GitHub org/user name.
  projectName: 'frontend-interview-notebook', // Usually your repo name.
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '前端面试手册',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/docs/js/built-in-types',
          activeBasePath: 'docs/js',
          label: 'JavaScript',
          position: 'left',
        },
        {
          to: '/docs/base/html',
          activeBasePath: 'docs/base',
          label: '基础',
          position: 'left',
        },
        {
          to: '/docs/interview2021/stack',
          activeBasePath: '/docs/interview2021',
          label: 'interview2021',
          position: 'left',
        },
        { to: 'blog', label: '面试题', position: 'right' },
        {
          href: 'https://github.com/BurNing1993/frontend-interview-notebook',
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
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Joey. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/BurNing1993/frontend-interview-notebook/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/BurNing1993/frontend-interview-notebook/tree/master/blog/',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/android-chrome-192x192.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#25c2a0',
          },
        ],
      },
    ],
  ],
};
