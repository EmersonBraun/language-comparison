import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {type: 'doc', id: 'roadmap', label: 'How to Use This Guide'},
    {type: 'doc', id: 'comparison-matrix', label: 'Language Comparison Matrix'},
    {
      type: 'category',
      label: 'Basics',
      collapsed: false,
      items: [
        {type: 'doc', id: 'getting-started', label: 'Getting Started'},
        {type: 'doc', id: 'comments-documentation', label: 'Comments & Documentation'},
        {type: 'doc', id: 'variables-types', label: 'Variables & Types'},
        {type: 'doc', id: 'operators', label: 'Operators'},
        {type: 'doc', id: 'constants-enums', label: 'Constants & Enums'},
      ],
    },
    {
      type: 'category',
      label: 'Control Flow',
      items: [
        {type: 'doc', id: 'conditionals', label: 'Conditionals'},
        {type: 'doc', id: 'loops', label: 'Loops'},
        {type: 'doc', id: 'pattern-matching', label: 'Pattern Matching'},
      ],
    },
    {
      type: 'category',
      label: 'Functions & Closures',
      items: [
        {type: 'doc', id: 'functions', label: 'Functions'},
        {type: 'doc', id: 'closures-lambdas', label: 'Closures & Lambdas'},
      ],
    },
    {
      type: 'category',
      label: 'Data Structures',
      items: [
        {type: 'doc', id: 'arrays', label: 'Arrays'},
        {type: 'doc', id: 'strings', label: 'Strings'},
        {type: 'doc', id: 'objects-structs', label: 'Objects & Structs'},
        {type: 'doc', id: 'maps-dictionaries', label: 'Maps & Dictionaries'},
      ],
    },
    {
      type: 'category',
      label: 'Object-Oriented Programming',
      items: [
        {type: 'doc', id: 'classes-oop', label: 'Classes & OOP'},
        {type: 'doc', id: 'generics-templates', label: 'Generics & Templates'},
      ],
    },
    {
      type: 'category',
      label: 'Standard Library',
      items: [
        {type: 'doc', id: 'regex', label: 'Regex'},
        {type: 'doc', id: 'dates', label: 'Dates'},
        {type: 'doc', id: 'file-io', label: 'File I/O'},
        {type: 'doc', id: 'json-serialization', label: 'JSON & Serialization'},
      ],
    },
    {
      type: 'category',
      label: 'Web & Network',
      items: [
        {type: 'doc', id: 'crud', label: 'CRUD Operations'},
      ],
    },
    {
      type: 'category',
      label: 'Advanced Concepts',
      items: [
        {type: 'doc', id: 'error-handling', label: 'Error Handling'},
        {type: 'doc', id: 'null-safety', label: 'Null Safety & Optionals'},
        {type: 'doc', id: 'concurrency-async', label: 'Concurrency & Async'},
        {type: 'doc', id: 'memory-management', label: 'Memory Management'},
      ],
    },
    {
      type: 'category',
      label: 'Tooling & Ecosystem',
      items: [
        {type: 'doc', id: 'modules-imports', label: 'Modules & Imports'},
        {type: 'doc', id: 'package-management', label: 'Package Management'},
        {type: 'doc', id: 'testing', label: 'Testing'},
      ],
    },
  ],
};

export default sidebars;
