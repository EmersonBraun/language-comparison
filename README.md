# Language Comparison

A comprehensive and structured guide to programming languages for developers. This project provides a quick and organized reference to major programming language concepts, focusing on syntax comparisons, code examples, and best practices across 11 popular languages.

## 🎯 About the Project

This Language Comparison was developed to be your companion during programming language learning and development. Each concept is presented in a structured format with:

- **Code Examples:** Real-world code snippets showing how to implement concepts
- **Syntax Comparisons:** Side-by-side comparisons across different languages
- **Best Practices:** Essential patterns and important features for each language

## 🌐 Online Access

The site is available at: [https://emersonbraun.github.io/language-comparison/](https://emersonbraun.github.io/language-comparison/)

## 🚀 Technology

This project is built using [Docusaurus](https://docusaurus.io/), a modern static site generator, with support for multiple languages (English, Portuguese, and Spanish).

## 📦 Installation

```bash
yarn
```

## 🛠️ Local Development

```bash
yarn start
```

This command starts a local development server and opens a browser window. Most changes are reflected in real-time without having to restart the server.

**Important:** If you experience issues with locale switching (URLs like `/en/es` instead of `/es`), clear the Docusaurus cache:

```bash
yarn clear
yarn start
```

### Search (Algolia)

The site uses [Algolia DocSearch](https://docsearch.algolia.com/) for the search bar. If you run `yarn start` or `yarn build` **without** configuring Algolia, you will see:

```text
"algolia.appId" is required. If you haven't migrated to the new DocSearch infra...
```

To fix this, you need to set the Algolia credentials (they are read from environment variables).

**Where to get the credentials:**

1. **DocSearch (recommended for open-source docs)**  
   - Go to [docsearch.algolia.com](https://docsearch.algolia.com/).  
   - Apply for [DocSearch](https://docsearch.algolia.com/apply/) (free for open-source projects).  
   - After approval, Algolia will send you the **Application ID**, **Search-Only API Key**, and **Index name**.

2. **Algolia dashboard (if you already have an account)**  
   - Log in at [dashboard.algolia.com](https://dashboard.algolia.com/).  
   - **Application ID**: in the left sidebar, under "API Keys".  
   - **Search-Only API Key**: same page, use the "Search-Only API Key" (safe for frontend).  
   - **Index name**: create an index (e.g. `language-comparison`) and use that name; the project expects `indexName: 'language-comparison'` in the config.

**How to configure locally:**

Copy `.env.example` to `.env` and fill in your credentials, or export the variables in your shell:

```bash
ALGOLIA_APP_ID=your_application_id
ALGOLIA_API_KEY=your_search_only_api_key
```

The index name is already set in `docusaurus.config.ts` as `language-comparison`. If your Algolia index has another name, you'll need to change it in the config.

> **Note:** Do not commit `.env` or real API keys to the repository. Add `.env` to `.gitignore` if it isn't already.

## 🏗️ Build

```bash
yarn build
```

This command generates static content in the `build` directory and can be served using any static content hosting service.

## 🚀 Deploy

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Without using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 📚 Content Structure

The project is organized into the following programming language concept categories:

- **Variables & Types** - Variable declarations and type systems
- **Conditionals** - If/else statements and conditional logic
- **Loops** - For, while, and other loop constructs
- **Functions** - Function definitions and calls
- **Arrays** - Array operations and methods
- **Strings** - String manipulation and operations
- **Objects & Structs** - Object-oriented and structured data
- **Error Handling** - Try/catch and error management
- **Classes & OOP** - Object-oriented programming concepts

## 🌍 Supported Languages

- JavaScript
- PHP
- Rust
- Go
- Python
- Zig
- C#
- C++
- C
- Java
- Ruby
- Swift

## 🤝 Contributing

Contributions are welcome! If you find outdated information or want to add new examples, feel free to open an issue or send a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📄 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## 👨‍💻 Author

Created by [Emerson Braun](https://www.linkedin.com/in/emerson-braun/)
