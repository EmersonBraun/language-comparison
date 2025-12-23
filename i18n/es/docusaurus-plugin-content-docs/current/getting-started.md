# Empezando

Cada lenguaje de programación tiene su propia forma de comenzar. Aquí está cómo crear un programa simple "Hello, World!" en cada lenguaje.

import LanguageComparison from '@site/src/components/LanguageComparison';

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

## Ejecutando Tu Primer Programa

### JavaScript
```bash
node hello.js
```

### PHP
```bash
php hello.php
```

### Rust
```bash
rustc hello.rs
./hello
```

### Go
```bash
go run hello.go
```

### Python
```bash
python hello.py
```

### Zig
```bash
zig build-exe hello.zig
./hello
```

### C#
```bash
csc hello.cs
./hello.exe
```

### C++
```bash
g++ hello.cpp -o hello
./hello
```

### C
```bash
gcc hello.c -o hello
./hello
```

### Java
```bash
javac HelloWorld.java
java HelloWorld
```

### Ruby
```bash
ruby hello.rb
```

### Swift
```bash
swift hello.swift
```

