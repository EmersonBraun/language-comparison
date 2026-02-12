---
sidebar_position: 1
---

# Matriz de Comparación de Lenguajes

Una tabla de referencia rápida que compara características, capacidades y propiedades de los 12 lenguajes.

## De un Vistazo

| Característica | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Año** | 1995 | 1995 | 1991 | 1995 | 2009 | 2015 | 1972 | 1985 | 2000 | 1995 | 2014 | 2016 |
| **Tipado** | Dinámico | Dinámico | Dinámico | Dinámico | Estático | Estático | Estático | Estático | Estático | Estático | Estático | Estático |
| **Inferencia de Tipos** | Limitada | No | Sí | Sí | Sí | Sí | No | Auto | Sí | Var | Sí | Sí |
| **Null Safety** | No | No | No | No | No | Sí | No | Opcional | Sí | Opcional | Sí | Sí |
| **Compilado** | JIT | No | No | No | Sí | Sí | Sí | Sí | JIT | JIT | Sí | Sí |
| **GC** | Sí | Sí | Sí | Sí | Sí | No | No | No | Sí | Sí | ARC | No |

## Sistema de Tipos

| Característica | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Genéricos** | TS | PHPStan | Sí | Duck | Sí | Sí | No | Sí | Sí | Sí | Sí | Comptime |
| **Interfaces** | TS | Sí | Protocol | Duck | Sí | Traits | No | Abstract | Sí | Sí | Protocol | No |
| **Enums** | No | Sí | Sí | No | Iota | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| **Tipos Union** | TS | Sí | Sí | No | No | Enum | Union | Variant | No | Sealed | Enum | Union |
| **Pattern Match** | No | Match | Match | Case | Switch | Match | Switch | Visit | Switch | Switch | Switch | Switch |

## Paradigmas

| Paradigma | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **POO** | Prototype | Class | Class | Class | Struct | Struct | No | Class | Class | Class | Class/Struct | Struct |
| **Funcional** | Sí | Limitado | Sí | Sí | Limitado | Sí | No | Limitado | Sí | Limitado | Sí | Limitado |
| **Procedural** | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | No | Sí | Sí |
| **Concurrente** | Event | Fiber | Async | Thread | Goroutine | Async | Thread | Thread | Async | Virtual | Actor | Thread |

## Memoria y Rendimiento

| Característica | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Modelo de Memoria** | GC | GC | GC | GC | GC | Ownership | Manual | Manual/Smart | GC | GC | ARC | Manual |
| **Velocidad** | Media | Lenta | Lenta | Lenta | Rápida | Muy Rápida | Muy Rápida | Muy Rápida | Rápida | Rápida | Rápida | Muy Rápida |
| **Tamaño del Binario** | N/A | N/A | N/A | N/A | Medio | Pequeño | Diminuto | Pequeño | Medio | Medio | Medio | Diminuto |
| **Inicio** | Rápido | Medio | Lento | Lento | Rápido | Rápido | Rápido | Rápido | Medio | Lento | Rápido | Rápido |

## Ecosistema y Herramientas

| Característica | JS | PHP | Python | Ruby | Go | Rust | C | C++ | C# | Java | Swift | Zig |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Gestor de Paquetes** | npm | Composer | pip | Bundler | go mod | Cargo | Ninguno | vcpkg | NuGet | Maven | SPM | build.zig.zon |
| **Framework de Testing** | Jest | PHPUnit | pytest | RSpec | go test | cargo test | Unity | GTest | xUnit | JUnit | XCTest | Integrado |
| **Formateador** | Prettier | PHP-CS | Black | RuboCop | gofmt | rustfmt | clang-fmt | clang-fmt | dotnet-fmt | google-fmt | swift-fmt | zig fmt |
| **LSP** | tsserver | Intelephense | Pyright | Solargraph | gopls | rust-analyzer | clangd | clangd | OmniSharp | Eclipse | SourceKit | zls |
| **REPL** | Node | php -a | python | irb | No | No | No | No | dotnet-script | jshell | swift | No |

## Casos de Uso Comunes

| Caso de Uso | Mejores Opciones |
|------------|-----------------|
| **Web Frontend** | JavaScript |
| **Web Backend** | JavaScript, PHP, Python, Ruby, Go, C#, Java |
| **Móvil (iOS)** | Swift |
| **Móvil (Android)** | Java (Kotlin) |
| **Móvil (Multiplataforma)** | JavaScript (React Native), C# (MAUI) |
| **Programación de Sistemas** | Rust, C, C++, Zig |
| **Herramientas CLI** | Go, Rust, Zig |
| **Ciencia de Datos / ML** | Python |
| **Desarrollo de Juegos** | C++, C#, Zig |
| **Embebidos / IoT** | C, C++, Rust, Zig |
| **Empresarial** | Java, C# |
| **Scripting / Automatización** | Python, Ruby, JavaScript |
| **DevOps / Cloud** | Go, Python |
| **WebAssembly** | Rust, C, C++, Zig |

## Elegir un Lenguaje

### Para principiantes que empiezan:
- **Python** -- Sintaxis simple, curva de aprendizaje suave, comunidad enorme
- **JavaScript** -- Esencial para web, se ejecuta en todas partes, ecosistema enorme

### Para construir aplicaciones web:
- **JavaScript/Node.js** -- Full-stack con un solo lenguaje
- **Go** -- Simple, rápido, excelente para APIs y microservicios
- **PHP** -- Probado en batalla, ecosistema masivo de WordPress/Laravel

### Para rendimiento de sistemas:
- **Rust** -- Seguridad de memoria sin GC, herramientas modernas
- **C++** -- Control máximo, ecosistema amplio
- **Zig** -- Simple, predecible, sin flujo de control oculto

### Para oportunidades laborales:
- **JavaScript** -- El más demandado, mercado laboral más grande
- **Java** -- Empresarial, Android, mercado establecido
- **Python** -- Ciencia de datos, IA/ML, demanda creciente
- **C#** -- Empresarial, desarrollo de juegos (Unity), ecosistema Microsoft
