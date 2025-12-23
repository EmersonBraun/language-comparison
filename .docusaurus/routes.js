import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '848'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fdb'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '54a'),
            routes: [
              {
                path: '/docs/arrays',
                component: ComponentCreator('/docs/arrays', 'f5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/classes-oop',
                component: ComponentCreator('/docs/classes-oop', '338'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/conditionals',
                component: ComponentCreator('/docs/conditionals', '9eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/crud',
                component: ComponentCreator('/docs/crud', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dates',
                component: ComponentCreator('/docs/dates', 'e35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/error-handling',
                component: ComponentCreator('/docs/error-handling', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/functions',
                component: ComponentCreator('/docs/functions', '2d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', '2a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/loops',
                component: ComponentCreator('/docs/loops', 'ec0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/objects-structs',
                component: ComponentCreator('/docs/objects-structs', '078'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/regex',
                component: ComponentCreator('/docs/regex', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/strings',
                component: ComponentCreator('/docs/strings', '62f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/variables-types',
                component: ComponentCreator('/docs/variables-types', 'bf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
