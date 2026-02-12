import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/language-comparison/es/search',
    component: ComponentCreator('/language-comparison/es/search', 'b60'),
    exact: true
  },
  {
    path: '/language-comparison/es/docs',
    component: ComponentCreator('/language-comparison/es/docs', '426'),
    routes: [
      {
        path: '/language-comparison/es/docs',
        component: ComponentCreator('/language-comparison/es/docs', '755'),
        routes: [
          {
            path: '/language-comparison/es/docs',
            component: ComponentCreator('/language-comparison/es/docs', 'da7'),
            routes: [
              {
                path: '/language-comparison/es/docs/arrays',
                component: ComponentCreator('/language-comparison/es/docs/arrays', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/classes-oop',
                component: ComponentCreator('/language-comparison/es/docs/classes-oop', '42b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/closures-lambdas',
                component: ComponentCreator('/language-comparison/es/docs/closures-lambdas', '050'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/comments-documentation',
                component: ComponentCreator('/language-comparison/es/docs/comments-documentation', '2de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/comparison-matrix',
                component: ComponentCreator('/language-comparison/es/docs/comparison-matrix', '22a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/concurrency-async',
                component: ComponentCreator('/language-comparison/es/docs/concurrency-async', 'd74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/conditionals',
                component: ComponentCreator('/language-comparison/es/docs/conditionals', '6bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/constants-enums',
                component: ComponentCreator('/language-comparison/es/docs/constants-enums', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/crud',
                component: ComponentCreator('/language-comparison/es/docs/crud', '2bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/dates',
                component: ComponentCreator('/language-comparison/es/docs/dates', 'fe5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/error-handling',
                component: ComponentCreator('/language-comparison/es/docs/error-handling', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/file-io',
                component: ComponentCreator('/language-comparison/es/docs/file-io', 'b68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/functions',
                component: ComponentCreator('/language-comparison/es/docs/functions', '081'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/generics-templates',
                component: ComponentCreator('/language-comparison/es/docs/generics-templates', '679'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/getting-started',
                component: ComponentCreator('/language-comparison/es/docs/getting-started', 'bf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/json-serialization',
                component: ComponentCreator('/language-comparison/es/docs/json-serialization', 'bf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/loops',
                component: ComponentCreator('/language-comparison/es/docs/loops', '587'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/maps-dictionaries',
                component: ComponentCreator('/language-comparison/es/docs/maps-dictionaries', 'b06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/memory-management',
                component: ComponentCreator('/language-comparison/es/docs/memory-management', '3ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/modules-imports',
                component: ComponentCreator('/language-comparison/es/docs/modules-imports', 'b73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/null-safety',
                component: ComponentCreator('/language-comparison/es/docs/null-safety', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/objects-structs',
                component: ComponentCreator('/language-comparison/es/docs/objects-structs', '4b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/operators',
                component: ComponentCreator('/language-comparison/es/docs/operators', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/package-management',
                component: ComponentCreator('/language-comparison/es/docs/package-management', '264'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/pattern-matching',
                component: ComponentCreator('/language-comparison/es/docs/pattern-matching', '456'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/regex',
                component: ComponentCreator('/language-comparison/es/docs/regex', '97c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/roadmap',
                component: ComponentCreator('/language-comparison/es/docs/roadmap', '550'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/strings',
                component: ComponentCreator('/language-comparison/es/docs/strings', 'f69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/testing',
                component: ComponentCreator('/language-comparison/es/docs/testing', 'cfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/language-comparison/es/docs/variables-types',
                component: ComponentCreator('/language-comparison/es/docs/variables-types', 'a3e'),
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
    path: '/language-comparison/es/',
    component: ComponentCreator('/language-comparison/es/', 'f9a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
