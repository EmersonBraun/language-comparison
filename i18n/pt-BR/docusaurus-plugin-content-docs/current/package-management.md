---
sidebar_position: 27
description: "Gerenciadores de pacotes e gerenciamento de dependências comparados em 12 linguagens de programação"
keywords: [gerenciamento de pacotes, npm, pip, cargo, go mod, NuGet, Maven, dependências]
---

# Gerenciamento de Pacotes

Cada linguagem tem seu próprio ecossistema para gerenciar dependências. Veja como diferentes linguagens lidam com gerenciamento de pacotes, resolução de dependências e configuração de projetos.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Instalando & Gerenciando Dependências

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'bash',
      code: `# npm (Node Package Manager)
npm init -y                    # Create package.json
npm install express            # Install dependency
npm install -D jest            # Install dev dependency
npm install                    # Install all from package.json
npm update                     # Update packages
npm uninstall express          # Remove package

# yarn (alternative)
yarn init -y
yarn add express
yarn add -D jest
yarn install
yarn remove express

# pnpm (fast alternative)
pnpm install express
pnpm add -D jest

# Config file: package.json
# Lock file: package-lock.json / yarn.lock / pnpm-lock.yaml
# Registry: npmjs.com`
    },
    {
      name: 'PHP',
      lang: 'bash',
      code: `# Composer
composer init                       # Create composer.json
composer require slim/slim          # Install dependency
composer require --dev phpunit/phpunit  # Dev dependency
composer install                    # Install from composer.json
composer update                     # Update packages
composer remove slim/slim           # Remove package

# Autoloading
# composer.json: "autoload": { "psr-4": { "App\\\\": "src/" } }
composer dump-autoload              # Regenerate autoloader

# Global install
composer global require friendsofphp/php-cs-fixer

# Config file: composer.json
# Lock file: composer.lock
# Registry: packagist.org`
    },
    {
      name: 'Rust',
      lang: 'bash',
      code: `# Cargo (built-in)
cargo new my_project               # Create project
cargo init                         # Init in existing dir
cargo add serde                    # Add dependency
cargo add tokio --features full    # With features
cargo add --dev mockall            # Dev dependency
cargo build                        # Build & fetch deps
cargo update                       # Update dependencies
cargo remove serde                 # Remove package

# Cargo.toml (manifest)
# [dependencies]
# serde = { version = "1.0", features = ["derive"] }
# tokio = { version = "1", features = ["full"] }
#
# [dev-dependencies]
# mockall = "0.11"

# Config file: Cargo.toml
# Lock file: Cargo.lock
# Registry: crates.io`
    },
    {
      name: 'Go',
      lang: 'bash',
      code: `# Go Modules (built-in since Go 1.11)
go mod init github.com/user/project  # Create go.mod
go get github.com/gin-gonic/gin      # Add dependency
go get -u github.com/gin-gonic/gin   # Update package
go mod tidy                          # Clean unused deps
go mod download                      # Download all deps
go mod vendor                        # Create vendor dir

# go.mod example:
# module github.com/user/project
# go 1.21
# require (
#     github.com/gin-gonic/gin v1.9.1
# )

# Config file: go.mod
# Lock file: go.sum
# Registry: pkg.go.dev (proxy.golang.org)`
    },
    {
      name: 'Python',
      lang: 'bash',
      code: `# pip (built-in)
pip install requests               # Install package
pip install requests==2.31.0       # Specific version
pip install -r requirements.txt    # From requirements file
pip uninstall requests             # Remove package
pip freeze > requirements.txt      # Export installed

# Virtual environments
python -m venv .venv               # Create venv
source .venv/bin/activate          # Activate (Linux/Mac)
.venv\\Scripts\\activate             # Activate (Windows)
deactivate                         # Deactivate

# Poetry (modern alternative)
poetry init                        # Create pyproject.toml
poetry add requests                # Add dependency
poetry add --group dev pytest      # Dev dependency
poetry install                     # Install all

# Config file: requirements.txt / pyproject.toml
# Lock file: poetry.lock
# Registry: pypi.org`
    },
    {
      name: 'Zig',
      lang: 'bash',
      code: `# Zig Package Manager (build.zig.zon)
# Zig uses a decentralized package system

# build.zig.zon example:
# .{
#     .name = "my_project",
#     .version = "0.1.0",
#     .dependencies = .{
#         .httpz = .{
#             .url = "https://github.com/...",
#             .hash = "...",
#         },
#     },
# }

# In build.zig:
# const dep = b.dependency("httpz", .{});
# exe.root_module.addImport("httpz", dep.module("httpz"));

zig build                          # Build with deps
zig fetch <url>                    # Fetch and hash a dep

# Config file: build.zig.zon
# Lock file: build.zig.zon (hashes inline)
# Registry: No central registry (URL-based)`
    },
    {
      name: 'C#',
      lang: 'bash',
      code: `# NuGet (.NET package manager)
dotnet new console                     # Create project
dotnet add package Newtonsoft.Json      # Add package
dotnet add package xunit --version 2.5 # Specific version
dotnet restore                         # Restore packages
dotnet remove package Newtonsoft.Json   # Remove
dotnet list package                    # List installed

# .csproj example:
# <ItemGroup>
#   <PackageReference Include="Newtonsoft.Json"
#                     Version="13.0.3" />
# </ItemGroup>

# NuGet CLI
nuget install Newtonsoft.Json

# Config file: *.csproj
# Lock file: packages.lock.json (opt-in)
# Registry: nuget.org`
    },
    {
      name: 'C++',
      lang: 'bash',
      code: `# vcpkg (Microsoft)
vcpkg install nlohmann-json        # Install package
vcpkg install boost:x64-linux      # Platform-specific
vcpkg list                         # List installed

# Conan (another popular option)
conan install .                    # Install from conanfile
conan search boost                 # Search packages

# CMake FetchContent (built-in)
# CMakeLists.txt:
# include(FetchContent)
# FetchContent_Declare(json
#   GIT_REPOSITORY https://github.com/...
#   GIT_TAG v3.11.2)
# FetchContent_MakeAvailable(json)

# Config: CMakeLists.txt / conanfile.txt / vcpkg.json
# Registry: vcpkg.io / conan.io`
    },
    {
      name: 'C',
      lang: 'bash',
      code: `# No standard package manager
# Common approaches:

# System package managers
apt install libssl-dev             # Debian/Ubuntu
brew install openssl               # macOS
yum install openssl-devel          # RHEL/CentOS

# vcpkg (works for C too)
vcpkg install curl

# CMake FetchContent
# include(FetchContent)
# FetchContent_Declare(cjson
#   GIT_REPOSITORY https://github.com/...
#   GIT_TAG v1.7.15)

# pkg-config (find installed libraries)
pkg-config --cflags --libs openssl

# Manual: download, compile, link
# gcc main.c -lssl -lcrypto`
    },
    {
      name: 'Java',
      lang: 'bash',
      code: `# Maven
mvn archetype:generate             # Create project
# pom.xml:
# <dependency>
#     <groupId>com.google.guava</groupId>
#     <artifactId>guava</artifactId>
#     <version>32.1.2-jre</version>
# </dependency>
mvn install                        # Install dependencies
mvn clean package                  # Build

# Gradle (alternative)
# build.gradle:
# dependencies {
#     implementation 'com.google.guava:guava:32.1.2-jre'
#     testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
# }
gradle build                       # Build

# Config: pom.xml / build.gradle
# Registry: Maven Central (search.maven.org)`
    },
    {
      name: 'Ruby',
      lang: 'bash',
      code: `# Bundler + RubyGems
gem install bundler                # Install bundler
bundle init                        # Create Gemfile
bundle add sinatra                 # Add gem

# Gemfile example:
# source 'https://rubygems.org'
# gem 'sinatra', '~> 3.0'
# gem 'rspec', group: :development

bundle install                     # Install all gems
bundle update                      # Update gems
bundle exec ruby app.rb            # Run with bundle

# Direct gem install
gem install rails
gem list                           # List installed
gem uninstall rails

# Config file: Gemfile
# Lock file: Gemfile.lock
# Registry: rubygems.org`
    },
    {
      name: 'Swift',
      lang: 'bash',
      code: `# Swift Package Manager (built-in)
swift package init --type executable  # Create project

# Package.swift example:
# let package = Package(
#     name: "MyApp",
#     dependencies: [
#         .package(url: "https://github.com/vapor/vapor.git",
#                  from: "4.0.0"),
#     ],
#     targets: [
#         .executableTarget(name: "MyApp",
#                          dependencies: ["Vapor"]),
#         .testTarget(name: "MyAppTests",
#                    dependencies: ["MyApp"]),
#     ]
# )

swift build                        # Build & fetch deps
swift package update               # Update dependencies
swift package resolve              # Resolve versions

# Config file: Package.swift
# Lock file: Package.resolved
# Registry: Swift Package Index (swiftpackageindex.com)`
    }
  ]}
/>

## Principais Conclusões

- **Registros centralizados vs descentralizados** -- npm, PyPI, Crates.io, NuGet e Maven Central são centralizados; Go usa proxies de módulos (padrão proxy.golang.org); Zig usa busca baseada em URL sem registro central.
- **Lock files garantem reprodutibilidade** -- A maioria dos ecossistemas usa lock files (package-lock.json, Cargo.lock, go.sum, Gemfile.lock, poetry.lock); C/C++ frequentemente dependem de vendoring ou pacotes do sistema com menos garantias.
- **A maturidade das ferramentas varia** -- JavaScript tem npm/yarn/pnpm; Python tem pip mais Poetry/uv; o Cargo do Rust é altamente integrado; C e C++ usam vcpkg, Conan ou CMake FetchContent com mais configuração manual.
- **Ambientes virtuais isolam dependências** -- O venv do Python e o Bundler do Ruby fornecem isolamento local ao projeto; o node_modules do Node e o cache de módulos do Go servem a objetivos similares.
- **C não tem gerenciador de pacotes padrão** -- Desenvolvedores tipicamente usam gerenciadores de pacotes do sistema (apt, brew), vcpkg ou compilação manual; o gerenciamento de dependências é amplamente manual.
