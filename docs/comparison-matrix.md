---
sidebar_position: 1
---

# Language Comparison Matrix

A quick-reference table comparing features, capabilities, and characteristics across all 12 languages.

## At a Glance

| Feature | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Year** | 1995 | 1995 | 1991 | 1995 | 2009 | 2015 | 1972 | 1985 | 2000 | 1995 | 2014 | 2016 |
| **Typing** | Dynamic | Dynamic | Dynamic | Dynamic | Static | Static | Static | Static | Static | Static | Static | Static |
| **Type Inference** | Limited | No | Yes | Yes | Yes | Yes | No | Auto | Yes | Var | Yes | Yes |
| **Null Safety** | No | No | No | No | No | Yes | No | Optional | Yes | Optional | Yes | Yes |
| **Compiled** | JIT | No | No | No | Yes | Yes | Yes | Yes | JIT | JIT | Yes | Yes |
| **GC** | Yes | Yes | Yes | Yes | Yes | No | No | No | Yes | Yes | ARC | No |

## Type System

| Feature | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Generics** | TS | PHPStan | Yes | Duck | Yes | Yes | No | Yes | Yes | Yes | Yes | Comptime |
| **Interfaces** | TS | Yes | Protocol | Duck | Yes | Traits | No | Abstract | Yes | Yes | Protocol | No |
| **Enums** | No | Yes | Yes | No | Iota | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Union Types** | TS | Yes | Yes | No | No | Enum | Union | Variant | No | Sealed | Enum | Union |
| **Pattern Match** | No | Match | Match | Case | Switch | Match | Switch | Visit | Switch | Switch | Switch | Switch |

## Paradigms

| Paradigm | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **OOP** | Prototype | Class | Class | Class | Struct | Struct | No | Class | Class | Class | Class/Struct | Struct |
| **Functional** | Yes | Limited | Yes | Yes | Limited | Yes | No | Limited | Yes | Limited | Yes | Limited |
| **Procedural** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | No | Yes | Yes |
| **Concurrent** | Event | Fiber | Async | Thread | Goroutine | Async | Thread | Thread | Async | Virtual | Actor | Thread |

## Memory & Performance

| Feature | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Memory Model** | GC | GC | GC | GC | GC | Ownership | Manual | Manual/Smart | GC | GC | ARC | Manual |
| **Speed** | Medium | Slow | Slow | Slow | Fast | Very Fast | Very Fast | Very Fast | Fast | Fast | Fast | Very Fast |
| **Binary Size** | N/A | N/A | N/A | N/A | Medium | Small | Tiny | Small | Medium | Medium | Medium | Tiny |
| **Startup** | Fast | Medium | Slow | Slow | Fast | Fast | Fast | Fast | Medium | Slow | Fast | Fast |

## Ecosystem & Tooling

| Feature | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Package Manager** | npm | Composer | pip | Bundler | go mod | Cargo | None | vcpkg | NuGet | Maven | SPM | build.zig.zon |
| **Test Framework** | Jest | PHPUnit | pytest | RSpec | go test | cargo test | Unity | GTest | xUnit | JUnit | XCTest | Built-in |
| **Formatter** | Prettier | PHP-CS | Black | RuboCop | gofmt | rustfmt | clang-fmt | clang-fmt | dotnet-fmt | google-fmt | swift-fmt | zig fmt |
| **LSP** | tsserver | Intelephense | Pyright | Solargraph | gopls | rust-analyzer | clangd | clangd | OmniSharp | Eclipse | SourceKit | zls |
| **REPL** | Node | php -a | python | irb | No | No | No | No | dotnet-script | jshell | swift | No |

## Common Use Cases

| Use Case | Best Choices |
|----------|-------------|
| **Web Frontend** | JavaScript |
| **Web Backend** | JavaScript, PHP, Python, Ruby, Go, C#, Java |
| **Mobile (iOS)** | Swift |
| **Mobile (Android)** | Java (Kotlin) |
| **Mobile (Cross-platform)** | JavaScript (React Native), C# (MAUI) |
| **Systems Programming** | Rust, C, C++, Zig |
| **CLI Tools** | Go, Rust, Zig |
| **Data Science / ML** | Python |
| **Game Development** | C++, C#, Zig |
| **Embedded / IoT** | C, C++, Rust, Zig |
| **Enterprise** | Java, C# |
| **Scripting / Automation** | Python, Ruby, JavaScript |
| **DevOps / Cloud** | Go, Python |
| **WebAssembly** | Rust, C, C++, Zig |

## Choosing a Language

### For beginners starting out:
- **Python** -- Simple syntax, gentle learning curve, massive community
- **JavaScript** -- Essential for web, runs everywhere, huge ecosystem

### For building web apps:
- **JavaScript/Node.js** -- Full-stack with one language
- **Go** -- Simple, fast, great for APIs and microservices
- **PHP** -- Battle-tested, massive WordPress/Laravel ecosystem

### For system performance:
- **Rust** -- Memory safety without GC, modern tooling
- **C++** -- Maximum control, vast ecosystem
- **Zig** -- Simple, predictable, no hidden control flow

### For career opportunities:
- **JavaScript** -- Most in-demand, largest job market
- **Java** -- Enterprise, Android, established market
- **Python** -- Data science, AI/ML, growing demand
- **C#** -- Enterprise, game dev (Unity), Microsoft ecosystem
