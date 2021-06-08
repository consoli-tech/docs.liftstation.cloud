/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation',
  tagline: 'One Stop Water and Wastewater Management',
  url: 'https://docs.liftstation.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'consolidatedutilities', // Usually your GitHub org/user name.
  projectName: 'docs.liftstation.cloud', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'LiftStation.cloud',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Technician',
        },
        {
          to: '/operator/intro',
          position: 'left',
          label: 'Operator'
        },
        {
          to: '/api/intro',
          position: 'left',
          label: 'API'
        },
        {
          to: '/cli/intro',
          position: 'left',
          label: 'CLI'
        },
        {
          href: 'https://github.com/consolidatedutilities/docs.liftstation.cloud',
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
              label: 'Technician',
              to: '/technician/intro',
            },
            {
              label: 'Operator',
              to: '/operator/intro'
            },
            {
              label: 'API',
              to: '/api/intro'
            },
            {
              label: 'CLI',
              to: '/cli/intro'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Message Boards',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Support Contact',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/consolidatedutilities',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Consolidated Utilities, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'technician',
          routeBasePath: 'technician',
          sidebarPath: require.resolve('./sidebarsTechnician.js'),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'operator',
        path: 'operator',
        routeBasePath: 'operator',
        sidebarPath: require.resolve('./sidebarsOperator.js')
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarsApi.js')
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cli',
        path: 'cli',
        routeBasePath: 'cli',
        sidebarPath: require.resolve('./sidebarsCli.js')
      }
    ]
  ]
};
