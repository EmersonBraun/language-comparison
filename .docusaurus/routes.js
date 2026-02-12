import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/language-comparison/__docusaurus/debug',
    component: ComponentCreator('/language-comparison/__docusaurus/debug', 'a00'),
    exact: true
  },
  {
    path: '/language-comparison/__docusaurus/debug/config',
    component: ComponentCreator('/language-comparison/__docusaurus/debug/config', '33a'),
    exact: true
  },
  {
    path: '/language-comparison/__docusaurus/debug/content',
    component: ComponentCreator('/language-comparison/__docusaurus/debug/content', '0e7'),
    exact: true
  },
  {
    path: '/language-comparison/__docusaurus/debug/globalData',
    component: ComponentCreator('/language-comparison/__docusaurus/debug/globalData', 'cae'),
    exact: true
  },
  {
    path: '/language-comparison/__docusaurus/debug/metadata',
    component: ComponentCreator('/language-comparison/__docusaurus/debug/metadata', '145'),
    exact: true
  },
  {
    path: '/language-comparison/__docusaurus/debug/registry',
    component: ComponentCreator('/language-comparison/__docusaurus/debug/registry', '3b8'),
    exact: true
  },
  {
    path: '/language-comparison/__docusaurus/debug/routes',
    component: ComponentCreator('/language-comparison/__docusaurus/debug/routes', 'dd1'),
    exact: true
  },
  {
    path: '/language-comparison/search',
    component: ComponentCreator('/language-comparison/search', 'a7e'),
    exact: true
  },
  {
    path: '/language-comparison/docs',
    component: ComponentCreator('/language-comparison/docs', '121'),
    routes: [
      {
        path: '/language-comparison/docs',
        component: ComponentCreator('/language-comparison/docs', '070'),
        routes: [
          {
            path: '/language-comparison/docs',
            component: ComponentCreator('/language-comparison/docs', 'd53'),
            routes: [
              {
                path: '/language-comparison/docs/arrays',
                component: ComponentCreator('/language-comparison/docs/arrays', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/classes-oop',
                component: ComponentCreator('/language-comparison/docs/classes-oop', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/closures-lambdas',
                component: ComponentCreator('/language-comparison/docs/closures-lambdas', '99c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/comments-documentation',
                component: ComponentCreator('/language-comparison/docs/comments-documentation', 'b15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/comparison-matrix',
                component: ComponentCreator('/language-comparison/docs/comparison-matrix', 'f6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/concurrency-async',
                component: ComponentCreator('/language-comparison/docs/concurrency-async', 'c26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/conditionals',
                component: ComponentCreator('/language-comparison/docs/conditionals', '3bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/constants-enums',
                component: ComponentCreator('/language-comparison/docs/constants-enums', '91e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/crud',
                component: ComponentCreator('/language-comparison/docs/crud', 'f65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/dates',
                component: ComponentCreator('/language-comparison/docs/dates', 'fb7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/error-handling',
                component: ComponentCreator('/language-comparison/docs/error-handling', 'b86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/file-io',
                component: ComponentCreator('/language-comparison/docs/file-io', '0be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/functions',
                component: ComponentCreator('/language-comparison/docs/functions', '910'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/generics-templates',
                component: ComponentCreator('/language-comparison/docs/generics-templates', 'bcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/getting-started',
                component: ComponentCreator('/language-comparison/docs/getting-started', '191'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/json-serialization',
                component: ComponentCreator('/language-comparison/docs/json-serialization', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/loops',
                component: ComponentCreator('/language-comparison/docs/loops', '117'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/maps-dictionaries',
                component: ComponentCreator('/language-comparison/docs/maps-dictionaries', 'd79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/memory-management',
                component: ComponentCreator('/language-comparison/docs/memory-management', '398'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/modules-imports',
                component: ComponentCreator('/language-comparison/docs/modules-imports', 'b72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/null-safety',
                component: ComponentCreator('/language-comparison/docs/null-safety', '90a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/objects-structs',
                component: ComponentCreator('/language-comparison/docs/objects-structs', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/operators',
                component: ComponentCreator('/language-comparison/docs/operators', 'e16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/package-management',
                component: ComponentCreator('/language-comparison/docs/package-management', '668'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/pattern-matching',
                component: ComponentCreator('/language-comparison/docs/pattern-matching', 'c90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/regex',
                component: ComponentCreator('/language-comparison/docs/regex', 'a42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/roadmap',
                component: ComponentCreator('/language-comparison/docs/roadmap', 'eec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/strings',
                component: ComponentCreator('/language-comparison/docs/strings', 'ef5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/testing',
                component: ComponentCreator('/language-comparison/docs/testing', 'ddc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/docs/variables-types',
                component: ComponentCreator('/language-comparison/docs/variables-types', 'edb'),
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
    path: '/language-comparison/',
    component: ComponentCreator('/language-comparison/', 'f95'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
