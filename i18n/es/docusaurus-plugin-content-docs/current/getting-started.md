---
sidebar_position: 1
description: "Resumen de 12 lenguajes de programación -- paradigmas, tipado, modelos de ejecución y ejemplos de Hello World"
keywords: [lenguajes de programación, comparación, hello world, empezando, resumen]
---

# Empezando

Cada lenguaje de programación tiene su propia forma de comenzar. Aquí está cómo crear un programa simple "Hello, World!" en cada lenguaje.

import LanguageComparison from '@site/src/components/LanguageComparison';
import LanguageOverview from '@site/src/components/LanguageOverview';

## Resumen de Lenguajes

<LanguageOverview
  languages={[
    {
      name: 'JavaScript',
      content: (
        <>
          <p><strong>Type</strong>: Interpreted, dynamically typed</p>
          <p><strong>Paradigm</strong>: Multi-paradigm (procedural, object-oriented, functional)</p>
          <p><strong>Runtime</strong>: Node.js (server-side) or browser (client-side)</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Download from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
            <li>Or use package managers: <code>brew install node</code> (macOS), <code>apt install nodejs</code> (Linux)</li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">developer.mozilla.org</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>node --version</code></pre>
        </>
      )
    },
    {
      name: 'PHP',
      content: (
        <>
          <p><strong>Type</strong>: Interpreted, dynamically typed</p>
          <p><strong>Paradigm</strong>: Multi-paradigm (procedural, object-oriented, functional)</p>
          <p><strong>Runtime</strong>: PHP CLI or web server (Apache/Nginx)</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Download from <a href="https://www.php.net/downloads.php" target="_blank" rel="noopener noreferrer">php.net</a></li>
            <li>Or use package managers: <code>brew install php</code> (macOS), <code>apt install php</code> (Linux)</li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://www.php.net/manual/en/" target="_blank" rel="noopener noreferrer">php.net/manual</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>php --version</code></pre>
        </>
      )
    },
    {
      name: 'Rust',
      content: (
        <>
          <p><strong>Type</strong>: Compiled, statically typed</p>
          <p><strong>Paradigm</strong>: Multi-paradigm (systems, functional, object-oriented features)</p>
          <p><strong>Runtime</strong>: Native binary</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Install via <a href="https://rustup.rs/" target="_blank" rel="noopener noreferrer">rustup.rs</a></li>
            <li>Command: <code>curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code></li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://doc.rust-lang.org/" target="_blank" rel="noopener noreferrer">doc.rust-lang.org</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>rustc --version</code></pre>
        </>
      )
    },
    {
      name: 'Go',
      content: (
        <>
          <p><strong>Type</strong>: Compiled, statically typed</p>
          <p><strong>Paradigm</strong>: Multi-paradigm (procedural, concurrent)</p>
          <p><strong>Runtime</strong>: Native binary</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Download from <a href="https://go.dev/dl/" target="_blank" rel="noopener noreferrer">go.dev</a></li>
            <li>Or use package managers: <code>brew install go</code> (macOS), <code>apt install golang-go</code> (Linux)</li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://go.dev/doc" target="_blank" rel="noopener noreferrer">go.dev/doc</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>go version</code></pre>
        </>
      )
    },
    {
      name: 'Python',
      content: (
        <>
          <p><strong>Type</strong>: Interpreted, dynamically typed</p>
          <p><strong>Paradigm</strong>: Multi-paradigm (procedural, object-oriented, functional)</p>
          <p><strong>Runtime</strong>: Python interpreter (CPython, PyPy, etc.)</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Download from <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a></li>
            <li>Or use package managers: <code>brew install python</code> (macOS), <code>apt install python3</code> (Linux)</li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">docs.python.org</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>python --version
# or
python3 --version</code></pre>
        </>
      )
    },
    {
      name: 'Zig',
      content: (
        <>
          <p><strong>Type</strong>: Compiled, statically typed</p>
          <p><strong>Paradigm</strong>: Systems programming</p>
          <p><strong>Runtime</strong>: Native binary</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Download from <a href="https://ziglang.org/download/" target="_blank" rel="noopener noreferrer">ziglang.org</a></li>
            <li>Or use package managers: <code>brew install zig</code> (macOS)</li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://ziglang.org/documentation" target="_blank" rel="noopener noreferrer">ziglang.org/documentation</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>zig version</code></pre>
        </>
      )
    },
    {
      name: 'C#',
      content: (
        <>
          <p><strong>Type</strong>: Compiled (JIT), statically typed</p>
          <p><strong>Paradigm</strong>: Object-oriented, multi-paradigm</p>
          <p><strong>Runtime</strong>: .NET runtime (CLR)</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Download .NET SDK from <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer">dotnet.microsoft.com</a></li>
            <li>Or use package managers: <code>brew install dotnet</code> (macOS), <code>apt install dotnet-sdk-8.0</code> (Linux)</li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://learn.microsoft.com/dotnet/" target="_blank" rel="noopener noreferrer">learn.microsoft.com/dotnet</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>dotnet --version</code></pre>
        </>
      )
    },
    {
      name: 'C++',
      content: (
        <>
          <p><strong>Type</strong>: Compiled, statically typed</p>
          <p><strong>Paradigm</strong>: Multi-paradigm (procedural, object-oriented, generic)</p>
          <p><strong>Runtime</strong>: Native binary</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Install compiler: <code>g++</code> (GCC) or <code>clang++</code> (Clang)</li>
            <li>macOS: <code>xcode-select --install</code> or <code>brew install gcc</code></li>
            <li>Linux: <code>apt install build-essential</code></li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://en.cppreference.com/" target="_blank" rel="noopener noreferrer">cppreference.com</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>g++ --version
# or
clang++ --version</code></pre>
        </>
      )
    },
    {
      name: 'C',
      content: (
        <>
          <p><strong>Type</strong>: Compiled, statically typed</p>
          <p><strong>Paradigm</strong>: Procedural, imperative</p>
          <p><strong>Runtime</strong>: Native binary</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Install compiler: <code>gcc</code> (GCC) or <code>clang</code> (Clang)</li>
            <li>macOS: <code>xcode-select --install</code> or <code>brew install gcc</code></li>
            <li>Linux: <code>apt install build-essential</code></li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://en.cppreference.com/w/c" target="_blank" rel="noopener noreferrer">en.cppreference.com/w/c</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>gcc --version
# or
clang --version</code></pre>
        </>
      )
    },
    {
      name: 'Java',
      content: (
        <>
          <p><strong>Type</strong>: Compiled (to bytecode), statically typed</p>
          <p><strong>Paradigm</strong>: Object-oriented, multi-paradigm</p>
          <p><strong>Runtime</strong>: JVM (Java Virtual Machine)</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Download JDK from <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">oracle.com/java</a> or <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">adoptium.net</a></li>
            <li>Or use package managers: <code>brew install openjdk</code> (macOS), <code>apt install default-jdk</code> (Linux)</li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://docs.oracle.com/javase/" target="_blank" rel="noopener noreferrer">docs.oracle.com/javase</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>java -version
javac -version</code></pre>
        </>
      )
    },
    {
      name: 'Ruby',
      content: (
        <>
          <p><strong>Type</strong>: Interpreted, dynamically typed</p>
          <p><strong>Paradigm</strong>: Multi-paradigm (object-oriented, functional, procedural)</p>
          <p><strong>Runtime</strong>: Ruby interpreter (MRI, JRuby, etc.)</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>Download from <a href="https://www.ruby-lang.org/en/downloads/" target="_blank" rel="noopener noreferrer">ruby-lang.org</a></li>
            <li>Or use package managers: <code>brew install ruby</code> (macOS), <code>apt install ruby-full</code> (Linux)</li>
            <li>Or use version managers: <code>rbenv</code>, <code>rvm</code></li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://www.ruby-lang.org/en/documentation/" target="_blank" rel="noopener noreferrer">ruby-lang.org/documentation</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>ruby --version</code></pre>
        </>
      )
    },
    {
      name: 'Swift',
      content: (
        <>
          <p><strong>Type</strong>: Compiled, statically typed</p>
          <p><strong>Paradigm</strong>: Multi-paradigm (object-oriented, functional, protocol-oriented)</p>
          <p><strong>Runtime</strong>: Native binary or Swift runtime</p>
          <p><strong>Installation</strong>:</p>
          <ul>
            <li>macOS: Included with Xcode (download from App Store)</li>
            <li>Linux: Download from <a href="https://www.swift.org/download/" target="_blank" rel="noopener noreferrer">swift.org/download</a></li>
            <li>Or use package managers: <code>brew install swift</code> (macOS)</li>
          </ul>
          <p><strong>Official Documentation</strong>: <a href="https://www.swift.org/documentation" target="_blank" rel="noopener noreferrer">swift.org/documentation</a></p>
          <p><strong>Verification</strong>:</p>
          <p>After installation, verify your setup:</p>
          <pre><code>swift --version</code></pre>
        </>
      )
    }
  ]}
/>

## Requisitos Previos

Antes de empezar a programar, asegúrate de tener:

1. **Un editor de texto o IDE** (VS Code, Vim, IntelliJ, etc.)
2. **El runtime/compilador del lenguaje instalado** (ver instrucciones de instalación arriba)
3. **Acceso a la Terminal/Línea de comandos** para ejecutar tus programas
4. **Comprensión básica de la línea de comandos**

## Hello World

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// JavaScript (Node.js)
console.log('Hello, World!');`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
echo "Hello, World!";
?>`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `fn main() {
    println!("Hello, World!");
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Python
print("Hello, World!")`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hello, World!\\n", .{});
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Ruby
puts "Hello, World!"`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Swift

print("Hello, World!")`
    }
  ]}
/>

### Ejecutando Tu Primer Programa

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'bash',
      code: `node hello.js`
    },
    {
      name: 'PHP',
      lang: 'bash',
      code: `php hello.php`
    },
    {
      name: 'Rust',
      lang: 'bash',
      code: `rustc hello.rs
./hello`
    },
    {
      name: 'Go',
      lang: 'bash',
      code: `go run hello.go`
    },
    {
      name: 'Python',
      lang: 'bash',
      code: `python hello.py`
    },
    {
      name: 'Zig',
      lang: 'bash',
      code: `zig build-exe hello.zig
./hello`
    },
    {
      name: 'C#',
      lang: 'bash',
      code: `csc hello.cs
./hello.exe`
    },
    {
      name: 'C++',
      lang: 'bash',
      code: `g++ hello.cpp -o hello
./hello`
    },
    {
      name: 'C',
      lang: 'bash',
      code: `gcc hello.c -o hello
./hello`
    },
    {
      name: 'Java',
      lang: 'bash',
      code: `javac HelloWorld.java
java HelloWorld`
    },
    {
      name: 'Ruby',
      lang: 'bash',
      code: `ruby hello.rb`
    },
    {
      name: 'Swift',
      lang: 'bash',
      code: `swift hello.swift`
    }
  ]}
/>

## Puntos Clave

- **Diversidad de paradigmas** -- Los lenguajes abarcan desde procedural (C) hasta multi-paradigma (JavaScript, Python, Rust) y enfocados en sistemas (Zig). Por ejemplo, C te mantiene cerca de la máquina con un modelo procedural mínimo, mientras que Rust y Swift combinan programación de sistemas con características funcionales y orientadas a objetos. JavaScript y Python soportan múltiples paradigmas: puedes escribir código imperativo, POO o funcional en el mismo archivo. Al elegir un lenguaje, elige C o Zig para control de bajo nivel; Rust, Go o Swift para rendimiento de sistemas con ergonomía moderna; y JavaScript, Python o Ruby para iteración rápida y amplio soporte de ecosistema.

- **Sistemas de tipado** -- Los lenguajes compilados (Rust, Go, C++, Java, Swift, Zig) tienen tipado estático, lo que significa que los errores de tipo se detectan antes de que el programa se ejecute. Los lenguajes interpretados (JavaScript, Python, PHP, Ruby) tienen tipado dinámico, por lo que puedes reasignar variables a diferentes tipos (`let x = 42; x = "hello"` en JavaScript). El tipado estático ofrece garantías más fuertes y mejor soporte de IDE; el tipado dinámico favorece la creación rápida de prototipos. Para bases de código grandes y de larga vida, prefiere Rust, Go, Java o C#; para scripts y prototipos, Python o JavaScript suelen ser suficientes.

- **Modelos de ejecución** -- Los lenguajes compilados (C, C++, Rust, Go, Zig, Swift) producen código máquina nativo; ejecutas el binario directamente. JavaScript usa Node.js o el navegador; Java usa la JVM; C# usa el runtime .NET. Python y Ruby usan intérpretes que ejecutan el código fuente línea por línea. Los binarios compilados arrancan rápido y a menudo se ejecutan más rápido; los lenguajes basados en runtime ofrecen facilidad multiplataforma y características dinámicas. Elige lenguajes compilados para despliegues críticos en rendimiento o independientes; elige runtimes para backends web y aplicaciones multiplataforma.

- **Requisitos de punto de entrada** -- Los lenguajes estilo C requieren un `main()` explícito (por ejemplo, `fn main()` en Rust, `func main()` en Go, `int main()` en C). Python y Ruby ejecutan código de nivel superior desde la primera línea; `print("Hello")` al inicio de un archivo se ejecuta inmediatamente. Go requiere de forma única tanto `package main` como `func main()` en el mismo paquete. Java y C# vinculan los puntos de entrada a una clase (`public static void main`). Al cambiar de lenguaje, ten en cuenta estas diferencias: algunos esperan una única función de entrada, otros ejecutan scripts de arriba a abajo.

- **Configuración y verificación** -- Cada lenguaje tiene su propio instalador y comando de versión: `node --version`, `python3 --version`, `rustc --version`, `go version`, etc. Usa estos para confirmar tu entorno antes de programar. Para lenguajes de sistemas (C, C++, Rust, Zig), típicamente compilas y luego ejecutas; para lenguajes interpretados o basados en runtime, ejecutas el código fuente o bytecode directamente. Prefiere los instaladores oficiales (por ejemplo, rustup para Rust, instaladores de SDK para .NET y Java) para la experiencia más fluida.
