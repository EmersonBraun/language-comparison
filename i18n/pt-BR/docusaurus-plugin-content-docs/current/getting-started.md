---
sidebar_position: 1
description: "Visão geral de 12 linguagens de programação -- paradigmas, tipagem, modelos de execução e exemplos Hello World"
keywords: [linguagens de programação, comparação, hello world, começando, visão geral]
---

# Começando

Cada linguagem de programação tem sua própria forma de começar. Aqui está como criar um programa simples "Hello, World!" em cada linguagem.

import LanguageComparison from '@site/src/components/LanguageComparison';
import LanguageOverview from '@site/src/components/LanguageOverview';

## Visão Geral das Linguagens

<LanguageOverview
  languages={[
    {
      name: 'JavaScript',
      content: (
        <>
          <p><strong>Tipo</strong>: Interpretado, tipagem dinâmica</p>
          <p><strong>Paradigma</strong>: Multi-paradigma (procedural, orientado a objetos, funcional)</p>
          <p><strong>Runtime</strong>: Node.js (lado servidor) ou navegador (lado cliente)</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Baixe em <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install node</code> (macOS), <code>apt install nodejs</code> (Linux)</li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">developer.mozilla.org</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>node --version</code></pre>
        </>
      )
    },
    {
      name: 'PHP',
      content: (
        <>
          <p><strong>Tipo</strong>: Interpretado, tipagem dinâmica</p>
          <p><strong>Paradigma</strong>: Multi-paradigma (procedural, orientado a objetos, funcional)</p>
          <p><strong>Runtime</strong>: PHP CLI ou servidor web (Apache/Nginx)</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Baixe em <a href="https://www.php.net/downloads.php" target="_blank" rel="noopener noreferrer">php.net</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install php</code> (macOS), <code>apt install php</code> (Linux)</li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://www.php.net/manual/en/" target="_blank" rel="noopener noreferrer">php.net/manual</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>php --version</code></pre>
        </>
      )
    },
    {
      name: 'Rust',
      content: (
        <>
          <p><strong>Tipo</strong>: Compilado, tipagem estática</p>
          <p><strong>Paradigma</strong>: Multi-paradigma (sistemas, funcional, recursos orientados a objetos)</p>
          <p><strong>Runtime</strong>: Binário nativo</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Instale via <a href="https://rustup.rs/" target="_blank" rel="noopener noreferrer">rustup.rs</a></li>
            <li>Comando: <code>curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code></li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://doc.rust-lang.org/" target="_blank" rel="noopener noreferrer">doc.rust-lang.org</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>rustc --version</code></pre>
        </>
      )
    },
    {
      name: 'Go',
      content: (
        <>
          <p><strong>Tipo</strong>: Compilado, tipagem estática</p>
          <p><strong>Paradigma</strong>: Multi-paradigma (procedural, concorrente)</p>
          <p><strong>Runtime</strong>: Binário nativo</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Baixe em <a href="https://go.dev/dl/" target="_blank" rel="noopener noreferrer">go.dev</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install go</code> (macOS), <code>apt install golang-go</code> (Linux)</li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://go.dev/doc" target="_blank" rel="noopener noreferrer">go.dev/doc</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>go version</code></pre>
        </>
      )
    },
    {
      name: 'Python',
      content: (
        <>
          <p><strong>Tipo</strong>: Interpretado, tipagem dinâmica</p>
          <p><strong>Paradigma</strong>: Multi-paradigma (procedural, orientado a objetos, funcional)</p>
          <p><strong>Runtime</strong>: Interpretador Python (CPython, PyPy, etc.)</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Baixe em <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install python</code> (macOS), <code>apt install python3</code> (Linux)</li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">docs.python.org</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
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
          <p><strong>Tipo</strong>: Compilado, tipagem estática</p>
          <p><strong>Paradigma</strong>: Programação de sistemas</p>
          <p><strong>Runtime</strong>: Binário nativo</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Baixe em <a href="https://ziglang.org/download/" target="_blank" rel="noopener noreferrer">ziglang.org</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install zig</code> (macOS)</li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://ziglang.org/documentation" target="_blank" rel="noopener noreferrer">ziglang.org/documentation</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>zig version</code></pre>
        </>
      )
    },
    {
      name: 'C#',
      content: (
        <>
          <p><strong>Tipo</strong>: Compilado (JIT), tipagem estática</p>
          <p><strong>Paradigma</strong>: Orientado a objetos, multi-paradigma</p>
          <p><strong>Runtime</strong>: Runtime .NET (CLR)</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Baixe o SDK .NET em <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer">dotnet.microsoft.com</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install dotnet</code> (macOS), <code>apt install dotnet-sdk-8.0</code> (Linux)</li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://learn.microsoft.com/dotnet/" target="_blank" rel="noopener noreferrer">learn.microsoft.com/dotnet</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>dotnet --version</code></pre>
        </>
      )
    },
    {
      name: 'C++',
      content: (
        <>
          <p><strong>Tipo</strong>: Compilado, tipagem estática</p>
          <p><strong>Paradigma</strong>: Multi-paradigma (procedural, orientado a objetos, genérico)</p>
          <p><strong>Runtime</strong>: Binário nativo</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Instale o compilador: <code>g++</code> (GCC) ou <code>clang++</code> (Clang)</li>
            <li>macOS: <code>xcode-select --install</code> ou <code>brew install gcc</code></li>
            <li>Linux: <code>apt install build-essential</code></li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://en.cppreference.com/" target="_blank" rel="noopener noreferrer">cppreference.com</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
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
          <p><strong>Tipo</strong>: Compilado, tipagem estática</p>
          <p><strong>Paradigma</strong>: Procedural, imperativo</p>
          <p><strong>Runtime</strong>: Binário nativo</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Instale o compilador: <code>gcc</code> (GCC) ou <code>clang</code> (Clang)</li>
            <li>macOS: <code>xcode-select --install</code> ou <code>brew install gcc</code></li>
            <li>Linux: <code>apt install build-essential</code></li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://en.cppreference.com/w/c" target="_blank" rel="noopener noreferrer">en.cppreference.com/w/c</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
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
          <p><strong>Tipo</strong>: Compilado (para bytecode), tipagem estática</p>
          <p><strong>Paradigma</strong>: Orientado a objetos, multi-paradigma</p>
          <p><strong>Runtime</strong>: JVM (Java Virtual Machine)</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Baixe o JDK em <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">oracle.com/java</a> ou <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">adoptium.net</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install openjdk</code> (macOS), <code>apt install default-jdk</code> (Linux)</li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://docs.oracle.com/javase/" target="_blank" rel="noopener noreferrer">docs.oracle.com/javase</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>java -version
javac -version</code></pre>
        </>
      )
    },
    {
      name: 'Ruby',
      content: (
        <>
          <p><strong>Tipo</strong>: Interpretado, tipagem dinâmica</p>
          <p><strong>Paradigma</strong>: Multi-paradigma (orientado a objetos, funcional, procedural)</p>
          <p><strong>Runtime</strong>: Interpretador Ruby (MRI, JRuby, etc.)</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>Baixe em <a href="https://www.ruby-lang.org/en/downloads/" target="_blank" rel="noopener noreferrer">ruby-lang.org</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install ruby</code> (macOS), <code>apt install ruby-full</code> (Linux)</li>
            <li>Ou use gerenciadores de versão: <code>rbenv</code>, <code>rvm</code></li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://www.ruby-lang.org/en/documentation/" target="_blank" rel="noopener noreferrer">ruby-lang.org/documentation</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>ruby --version</code></pre>
        </>
      )
    },
    {
      name: 'Swift',
      content: (
        <>
          <p><strong>Tipo</strong>: Compilado, tipagem estática</p>
          <p><strong>Paradigma</strong>: Multi-paradigma (orientado a objetos, funcional, orientado a protocolos)</p>
          <p><strong>Runtime</strong>: Binário nativo ou runtime Swift</p>
          <p><strong>Instalação</strong>:</p>
          <ul>
            <li>macOS: Incluso com Xcode (baixe pela App Store)</li>
            <li>Linux: Baixe em <a href="https://www.swift.org/download/" target="_blank" rel="noopener noreferrer">swift.org/download</a></li>
            <li>Ou use gerenciadores de pacotes: <code>brew install swift</code> (macOS)</li>
          </ul>
          <p><strong>Documentação Oficial</strong>: <a href="https://www.swift.org/documentation" target="_blank" rel="noopener noreferrer">swift.org/documentation</a></p>
          <p><strong>Verificação</strong>:</p>
          <p>Após a instalação, verifique sua configuração:</p>
          <pre><code>swift --version</code></pre>
        </>
      )
    }
  ]}
/>

## Pré-requisitos

Antes de começar a programar, certifique-se de ter:

1. **Um editor de texto ou IDE** (VS Code, Vim, IntelliJ, etc.)
2. **O runtime/compilador da linguagem instalado** (veja as instruções de instalação acima)
3. **Acesso ao terminal/linha de comando** para executar seus programas
4. **Conhecimento básico de linha de comando**

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

### Executando Seu Primeiro Programa

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

## Principais Conclusões

- **Diversidade de paradigmas** -- As linguagens vão do procedural (C) ao multi-paradigma (JavaScript, Python, Rust) ao foco em sistemas (Zig). Por exemplo, C mantém você próximo da máquina com um modelo procedural mínimo, enquanto Rust e Swift mesclam programação de sistemas com recursos funcionais e orientados a objetos. JavaScript e Python suportam múltiplos paradigmas: você pode escrever código imperativo, POO ou funcional no mesmo arquivo. Ao escolher uma linguagem, prefira C ou Zig para controle de baixo nível; Rust, Go ou Swift para desempenho de sistemas com ergonomia moderna; e JavaScript, Python ou Ruby para iteração rápida e amplo suporte de ecossistema.

- **Sistemas de tipagem** -- Linguagens compiladas (Rust, Go, C++, Java, Swift, Zig) são estaticamente tipadas, o que significa que erros de tipo são detectados antes da execução do programa. Linguagens interpretadas (JavaScript, Python, PHP, Ruby) são dinamicamente tipadas, então você pode reatribuir variáveis para tipos diferentes (`let x = 42; x = "hello"` em JavaScript). Tipagem estática oferece garantias mais fortes e melhor suporte de IDE; tipagem dinâmica favorece prototipagem rápida. Para bases de código grandes e de longa duração, prefira Rust, Go, Java ou C#; para scripts e protótipos, Python ou JavaScript geralmente são suficientes.

- **Modelos de execução** -- Linguagens compiladas (C, C++, Rust, Go, Zig, Swift) produzem código de máquina nativo; você executa o binário diretamente. JavaScript usa Node.js ou o navegador; Java usa a JVM; C# usa o runtime .NET. Python e Ruby usam interpretadores que executam o código fonte linha a linha. Binários compilados iniciam rápido e frequentemente rodam mais rápido; linguagens baseadas em runtime oferecem facilidade multiplataforma e recursos dinâmicos. Escolha linguagens compiladas para implantações críticas em desempenho ou standalone; escolha runtimes para backends web e aplicações multiplataforma.

- **Requisitos de ponto de entrada** -- Linguagens estilo C requerem um `main()` explícito (ex.: `fn main()` em Rust, `func main()` em Go, `int main()` em C). Python e Ruby executam código de nível superior desde a primeira linha; `print("Hello")` no topo de um arquivo roda imediatamente. Go requer tanto `package main` quanto `func main()` no mesmo pacote. Java e C# vinculam pontos de entrada a uma classe (`public static void main`). Ao trocar de linguagem, observe essas diferenças: algumas esperam uma única função de entrada, outras executam scripts de cima para baixo.

- **Configuração e verificação** -- Cada linguagem tem seu próprio instalador e comando de versão: `node --version`, `python3 --version`, `rustc --version`, `go version`, etc. Use esses comandos para confirmar seu ambiente antes de programar. Para linguagens de sistemas (C, C++, Rust, Zig), você normalmente compila e depois executa; para linguagens interpretadas ou baseadas em runtime, você executa o código fonte ou bytecode diretamente. Prefira os instaladores oficiais (ex.: rustup para Rust, instaladores SDK para .NET e Java) para a melhor experiência.
