# Language Comparison

A comprehensive and structured guide to programming languages for developers. This project provides a quick and organized reference to major programming language concepts, focusing on syntax comparisons, code examples, and best practices across 11 popular languages.

## 🎯 About the Project

This Language Comparison was developed to be your companion during programming language learning and development. Each concept is presented in a structured format with:

* **Code Examples:** Real-world code snippets showing how to implement concepts
* **Syntax Comparisons:** Side-by-side comparisons across different languages
* **Best Practices:** Essential patterns and important features for each language

## 🌐 Online Access

The site is available at: [Your GitHub Pages URL]

## 🚀 Technology

This project is built using Docusaurus, a modern static site generator, with support for multiple languages (Portuguese, English, and Spanish).

## 📦 Installation

```bash
npm install
```

## 🛠️ Local Development

```bash
npm start
```

This command starts a local development server and opens a browser window. Most changes are reflected in real-time without having to restart the server.

**Important:** If you experience issues with locale switching (URLs like `/en/es` instead of `/es`), clear the Docusaurus cache:

```bash
npm run clear
npm start
```

## 🏗️ Build

```bash
npm run build
```

This command generates static content in the `build` directory and can be served using any static content hosting service.

## 🚀 Deploy

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Without using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## 📚 Content Structure

The project is organized into the following programming language concept categories:

* **Variables & Types** - Variable declarations and type systems
* **Conditionals** - If/else statements and conditional logic
* **Loops** - For, while, and other loop constructs
* **Functions** - Function definitions and calls
* **Arrays** - Array operations and methods
* **Strings** - String manipulation and operations
* **Objects & Structs** - Object-oriented and structured data
* **Error Handling** - Try/catch and error management
* **Classes & OOP** - Object-oriented programming concepts

## 🌍 Supported Languages

* JavaScript
* PHP
* Rust
* Go
* Python
* Zig
* C#
* C++
* C
* Java
* Ruby
* Swift

## 🤝 Contributing

Contributions are welcome! If you find outdated information or want to add new examples, feel free to open an issue or send a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📄 License

This project is under the MIT license. See the LICENSE file for more details.

## 👨‍💻 Author

Created by Emerson Braun

