---
sidebar_position: 1
---

# Matriz de Comparação de Linguagens

Uma tabela de referência rápida comparando recursos, capacidades e características em todas as 12 linguagens.

## Visão Geral

| Recurso | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Ano** | 1995 | 1995 | 1991 | 1995 | 2009 | 2015 | 1972 | 1985 | 2000 | 1995 | 2014 | 2016 |
| **Tipagem** | Dinâmica | Dinâmica | Dinâmica | Dinâmica | Estática | Estática | Estática | Estática | Estática | Estática | Estática | Estática |
| **Inferência de Tipo** | Limitada | Não | Sim | Sim | Sim | Sim | Não | Auto | Sim | Var | Sim | Sim |
| **Null Safety** | Não | Não | Não | Não | Não | Sim | Não | Opcional | Sim | Opcional | Sim | Sim |
| **Compilado** | JIT | Não | Não | Não | Sim | Sim | Sim | Sim | JIT | JIT | Sim | Sim |
| **GC** | Sim | Sim | Sim | Sim | Sim | Não | Não | Não | Sim | Sim | ARC | Não |

## Sistema de Tipos

| Recurso | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Generics** | TS | PHPStan | Sim | Duck | Sim | Sim | Não | Sim | Sim | Sim | Sim | Comptime |
| **Interfaces** | TS | Sim | Protocol | Duck | Sim | Traits | Não | Abstract | Sim | Sim | Protocol | Não |
| **Enums** | Não | Sim | Sim | Não | Iota | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| **Tipos Union** | TS | Sim | Sim | Não | Não | Enum | Union | Variant | Não | Sealed | Enum | Union |
| **Pattern Match** | Não | Match | Match | Case | Switch | Match | Switch | Visit | Switch | Switch | Switch | Switch |

## Paradigmas

| Paradigma | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **POO** | Prototype | Class | Class | Class | Struct | Struct | Não | Class | Class | Class | Class/Struct | Struct |
| **Funcional** | Sim | Limitado | Sim | Sim | Limitado | Sim | Não | Limitado | Sim | Limitado | Sim | Limitado |
| **Procedural** | Sim | Sim | Sim | Sim | Sim | Sim | Sim | Sim | Sim | Não | Sim | Sim |
| **Concorrente** | Event | Fiber | Async | Thread | Goroutine | Async | Thread | Thread | Async | Virtual | Actor | Thread |

## Memória e Desempenho

| Recurso | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Modelo de Memória** | GC | GC | GC | GC | GC | Ownership | Manual | Manual/Smart | GC | GC | ARC | Manual |
| **Velocidade** | Médio | Lento | Lento | Lento | Rápido | Muito Rápido | Muito Rápido | Muito Rápido | Rápido | Rápido | Rápido | Muito Rápido |
| **Tamanho do Binário** | N/A | N/A | N/A | N/A | Médio | Pequeno | Mínimo | Pequeno | Médio | Médio | Médio | Mínimo |
| **Inicialização** | Rápida | Média | Lenta | Lenta | Rápida | Rápida | Rápida | Rápida | Média | Lenta | Rápida | Rápida |

## Ecossistema e Ferramentas

| Recurso | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Gerenciador de Pacotes** | npm | Composer | pip | Bundler | go mod | Cargo | Nenhum | vcpkg | NuGet | Maven | SPM | build.zig.zon |
| **Framework de Testes** | Jest | PHPUnit | pytest | RSpec | go test | cargo test | Unity | GTest | xUnit | JUnit | XCTest | Built-in |
| **Formatador** | Prettier | PHP-CS | Black | RuboCop | gofmt | rustfmt | clang-fmt | clang-fmt | dotnet-fmt | google-fmt | swift-fmt | zig fmt |
| **LSP** | tsserver | Intelephense | Pyright | Solargraph | gopls | rust-analyzer | clangd | clangd | OmniSharp | Eclipse | SourceKit | zls |
| **REPL** | Node | php -a | python | irb | Não | Não | Não | Não | dotnet-script | jshell | swift | Não |

## Casos de Uso Comuns

| Caso de Uso | Melhores Escolhas |
|----------|-------------|
| **Frontend Web** | JavaScript |
| **Backend Web** | JavaScript, PHP, Python, Ruby, Go, C#, Java |
| **Mobile (iOS)** | Swift |
| **Mobile (Android)** | Java (Kotlin) |
| **Mobile (Multiplataforma)** | JavaScript (React Native), C# (MAUI) |
| **Programação de Sistemas** | Rust, C, C++, Zig |
| **Ferramentas CLI** | Go, Rust, Zig |
| **Ciência de Dados / ML** | Python |
| **Desenvolvimento de Jogos** | C++, C#, Zig |
| **Embarcados / IoT** | C, C++, Rust, Zig |
| **Corporativo** | Java, C# |
| **Scripts / Automação** | Python, Ruby, JavaScript |
| **DevOps / Cloud** | Go, Python |
| **WebAssembly** | Rust, C, C++, Zig |

## Escolhendo uma Linguagem

### Para iniciantes começando:
- **Python** -- Sintaxe simples, curva de aprendizado suave, comunidade enorme
- **JavaScript** -- Essencial para web, roda em todo lugar, ecossistema gigante

### Para construir aplicações web:
- **JavaScript/Node.js** -- Full-stack com uma única linguagem
- **Go** -- Simples, rápido, ótimo para APIs e microsserviços
- **PHP** -- Testado em batalha, ecossistema massivo WordPress/Laravel

### Para desempenho de sistema:
- **Rust** -- Segurança de memória sem GC, ferramentas modernas
- **C++** -- Controle máximo, vasto ecossistema
- **Zig** -- Simples, previsível, sem fluxo de controle oculto

### Para oportunidades de carreira:
- **JavaScript** -- Mais demandado, maior mercado de trabalho
- **Java** -- Corporativo, Android, mercado estabelecido
- **Python** -- Ciência de dados, IA/ML, demanda crescente
- **C#** -- Corporativo, desenvolvimento de jogos (Unity), ecossistema Microsoft
