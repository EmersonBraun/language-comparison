---
sidebar_position: 19
description: "Lectura, escritura y manipulación de archivos comparadas en 12 lenguajes de programación"
keywords: [E/S de archivos, lectura de archivos, escritura de archivos, sistema de archivos, streams]
---

# E/S de Archivos

Leer y escribir archivos es una operación fundamental. Así es como los diferentes lenguajes manejan las operaciones de archivos.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Lectura de Archivos

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `const fs = require('fs');
const fsPromises = require('fs/promises');

// Synchronous
const data = fs.readFileSync('file.txt', 'utf8');

// Asynchronous (callback)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Async/await (modern)
const data2 = await fsPromises.readFile('file.txt', 'utf8');

// Read line by line
const readline = require('readline');
const rl = readline.createInterface({
    input: fs.createReadStream('file.txt'),
});
for await (const line of rl) {
    console.log(line);
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Read entire file
$content = file_get_contents('file.txt');

// Read into array of lines
$lines = file('file.txt', FILE_IGNORE_NEW_LINES);

// Read with fopen
$fp = fopen('file.txt', 'r');
while (($line = fgets($fp)) !== false) {
    echo $line;
}
fclose($fp);

// Read binary
$data = file_get_contents('image.png');

// Read CSV
$fp = fopen('data.csv', 'r');
while (($row = fgetcsv($fp)) !== false) {
    print_r($row);
}
fclose($fp);`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use std::fs;
use std::io::{self, BufRead, Read};

// Read entire file to string
let content = fs::read_to_string("file.txt")?;

// Read to bytes
let bytes = fs::read("file.txt")?;

// Read line by line
let file = fs::File::open("file.txt")?;
let reader = io::BufReader::new(file);
for line in reader.lines() {
    let line = line?;
    println!("{}", line);
}

// Read with buffer
let mut file = fs::File::open("file.txt")?;
let mut buffer = String::new();
file.read_to_string(&mut buffer)?;`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `import (
    "bufio"
    "os"
    "io"
)

// Read entire file
data, err := os.ReadFile("file.txt")
if err != nil {
    log.Fatal(err)
}
fmt.Println(string(data))

// Read line by line
file, _ := os.Open("file.txt")
defer file.Close()

scanner := bufio.NewScanner(file)
for scanner.Scan() {
    fmt.Println(scanner.Text())
}

// Read with io.ReadAll
file, _ := os.Open("file.txt")
defer file.Close()
data, _ := io.ReadAll(file)`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Read entire file
with open('file.txt', 'r') as f:
    content = f.read()

# Read all lines
with open('file.txt', 'r') as f:
    lines = f.readlines()

# Read line by line (memory efficient)
with open('file.txt', 'r') as f:
    for line in f:
        print(line.strip())

# Read binary
with open('image.png', 'rb') as f:
    data = f.read()

# Read with encoding
with open('file.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# pathlib (modern)
from pathlib import Path
content = Path('file.txt').read_text()`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// Read entire file
const content = try std.fs.cwd().readFileAlloc(
    allocator, "file.txt", 1024 * 1024
);
defer allocator.free(content);

// Read with file handle
const file = try std.fs.cwd().openFile("file.txt", .{});
defer file.close();

var buf: [1024]u8 = undefined;
const bytes_read = try file.read(&buf);

// Read line by line
var buf_reader = std.io.bufferedReader(file.reader());
var line_buf: [4096]u8 = undefined;
while (try buf_reader.reader().readUntilDelimiterOrEof(
    &line_buf, '\\n'
)) |line| {
    std.debug.print("{s}\\n", .{line});
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System.IO;

// Read entire file
string content = File.ReadAllText("file.txt");

// Read all lines
string[] lines = File.ReadAllLines("file.txt");

// Read line by line
foreach (string line in File.ReadLines("file.txt"))
{
    Console.WriteLine(line);
}

// StreamReader
using var reader = new StreamReader("file.txt");
string? line;
while ((line = reader.ReadLine()) != null)
{
    Console.WriteLine(line);
}

// Async
string content2 = await File.ReadAllTextAsync("file.txt");

// Read bytes
byte[] bytes = File.ReadAllBytes("file.bin");`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <fstream>
#include <sstream>
#include <string>

// Read entire file
std::ifstream file("file.txt");
std::stringstream buffer;
buffer << file.rdbuf();
std::string content = buffer.str();

// Read line by line
std::ifstream file("file.txt");
std::string line;
while (std::getline(file, line)) {
    std::cout << line << std::endl;
}

// Read binary
std::ifstream file("data.bin", std::ios::binary);
std::vector<char> data(
    (std::istreambuf_iterator<char>(file)),
    std::istreambuf_iterator<char>()
);

// Check if file exists (C++17)
#include <filesystem>
if (std::filesystem::exists("file.txt")) { }`
    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <stdio.h>

// Read entire file
FILE* fp = fopen("file.txt", "r");
if (fp == NULL) { perror("Error"); return 1; }

fseek(fp, 0, SEEK_END);
long size = ftell(fp);
rewind(fp);

char* buffer = malloc(size + 1);
fread(buffer, 1, size, fp);
buffer[size] = '\\0';
fclose(fp);

// Read line by line
FILE* fp = fopen("file.txt", "r");
char line[256];
while (fgets(line, sizeof(line), fp)) {
    printf("%s", line);
}
fclose(fp);

// Read binary
FILE* fp = fopen("data.bin", "rb");
unsigned char buf[1024];
size_t n = fread(buf, 1, sizeof(buf), fp);
fclose(fp);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.nio.file.*;
import java.io.*;

// Read entire file (Java 11+)
String content = Files.readString(Path.of("file.txt"));

// Read all lines
List<String> lines = Files.readAllLines(Path.of("file.txt"));

// Read line by line (buffered)
try (BufferedReader reader =
        Files.newBufferedReader(Path.of("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
}

// Stream lines
Files.lines(Path.of("file.txt"))
     .forEach(System.out::println);

// Read bytes
byte[] bytes = Files.readAllBytes(Path.of("file.bin"));`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Read entire file
content = File.read('file.txt')

# Read all lines
lines = File.readlines('file.txt', chomp: true)

# Read line by line
File.foreach('file.txt') do |line|
  puts line.chomp
end

# Read with block (auto-closes)
File.open('file.txt', 'r') do |f|
  content = f.read
end

# Read binary
data = File.binread('image.png')

# Check file existence
File.exist?('file.txt')  # true/false`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

// Read entire file
let content = try String(
    contentsOfFile: "file.txt",
    encoding: .utf8
)

// Read with URL
let url = URL(fileURLWithPath: "file.txt")
let data = try Data(contentsOf: url)
let text = String(data: data, encoding: .utf8)!

// Read line by line
if let contents = try? String(contentsOfFile: "file.txt") {
    for line in contents.components(separatedBy: "\\n") {
        print(line)
    }
}

// FileManager
let fm = FileManager.default
if fm.fileExists(atPath: "file.txt") {
    let data = fm.contents(atPath: "file.txt")
}`
    }
  ]}
/>

## Escritura de Archivos

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `const fs = require('fs');
const fsPromises = require('fs/promises');

// Write (overwrite)
fs.writeFileSync('output.txt', 'Hello World');

// Write async
await fsPromises.writeFile('output.txt', 'Hello World');

// Append
fs.appendFileSync('output.txt', '\\nNew line');

// Write with stream
const stream = fs.createWriteStream('output.txt');
stream.write('Line 1\\n');
stream.write('Line 2\\n');
stream.end();`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Write (overwrite)
file_put_contents('output.txt', 'Hello World');

// Append
file_put_contents('output.txt', "\\nNew line", FILE_APPEND);

// Write with fopen
$fp = fopen('output.txt', 'w');
fwrite($fp, "Line 1\\n");
fwrite($fp, "Line 2\\n");
fclose($fp);`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use std::fs;
use std::io::Write;

// Write (overwrite)
fs::write("output.txt", "Hello World")?;

// Write with file handle
let mut file = fs::File::create("output.txt")?;
file.write_all(b"Hello World")?;

// Append
use std::fs::OpenOptions;
let mut file = OpenOptions::new()
    .append(true)
    .open("output.txt")?;
writeln!(file, "New line")?;`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `import "os"

// Write (overwrite)
os.WriteFile("output.txt", []byte("Hello World"), 0644)

// Write with file handle
file, _ := os.Create("output.txt")
defer file.Close()
file.WriteString("Hello World\\n")

// Append
file, _ := os.OpenFile("output.txt",
    os.O_APPEND|os.O_WRONLY, 0644)
defer file.Close()
file.WriteString("New line\\n")

// Buffered writer
writer := bufio.NewWriter(file)
writer.WriteString("Buffered content\\n")
writer.Flush()`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Write (overwrite)
with open('output.txt', 'w') as f:
    f.write('Hello World')

# Append
with open('output.txt', 'a') as f:
    f.write('\\nNew line')

# Write multiple lines
lines = ['Line 1', 'Line 2', 'Line 3']
with open('output.txt', 'w') as f:
    f.writelines(line + '\\n' for line in lines)

# pathlib (modern)
from pathlib import Path
Path('output.txt').write_text('Hello World')`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// Write (overwrite)
const file = try std.fs.cwd().createFile("output.txt", .{});
defer file.close();
try file.writeAll("Hello World");

// Write formatted
const writer = file.writer();
try writer.print("Value: {d}\\n", .{42});

// Append
const file = try std.fs.cwd().openFile("output.txt", .{
    .mode = .write_only,
});
defer file.close();
try file.seekFromEnd(0);
try file.writeAll("New line\\n");`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System.IO;

// Write (overwrite)
File.WriteAllText("output.txt", "Hello World");

// Write lines
File.WriteAllLines("output.txt",
    new[] { "Line 1", "Line 2" });

// Append
File.AppendAllText("output.txt", "\\nNew line");

// StreamWriter
using var writer = new StreamWriter("output.txt");
writer.WriteLine("Line 1");
writer.WriteLine("Line 2");

// Async
await File.WriteAllTextAsync("output.txt", "Hello");`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <fstream>

// Write (overwrite)
std::ofstream file("output.txt");
file << "Hello World" << std::endl;
file.close();

// Append
std::ofstream file("output.txt", std::ios::app);
file << "New line" << std::endl;

// Write binary
std::ofstream file("data.bin", std::ios::binary);
file.write(reinterpret_cast<char*>(&data), sizeof(data));`
    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <stdio.h>

// Write (overwrite)
FILE* fp = fopen("output.txt", "w");
fprintf(fp, "Hello World\\n");
fclose(fp);

// Append
FILE* fp = fopen("output.txt", "a");
fprintf(fp, "New line\\n");
fclose(fp);

// Write binary
FILE* fp = fopen("data.bin", "wb");
fwrite(data, sizeof(data[0]), count, fp);
fclose(fp);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.nio.file.*;

// Write (overwrite) - Java 11+
Files.writeString(Path.of("output.txt"), "Hello World");

// Write lines
Files.write(Path.of("output.txt"),
    List.of("Line 1", "Line 2"));

// Append
Files.writeString(Path.of("output.txt"), "\\nNew line",
    StandardOpenOption.APPEND);

// BufferedWriter
try (BufferedWriter writer =
        Files.newBufferedWriter(Path.of("output.txt"))) {
    writer.write("Line 1");
    writer.newLine();
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Write (overwrite)
File.write('output.txt', 'Hello World')

# Append
File.open('output.txt', 'a') do |f|
  f.puts 'New line'
end

# Write with block
File.open('output.txt', 'w') do |f|
  f.puts 'Line 1'
  f.puts 'Line 2'
end

# Write binary
File.binwrite('data.bin', binary_data)`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

// Write (overwrite)
try "Hello World".write(
    toFile: "output.txt",
    atomically: true,
    encoding: .utf8
)

// Write with Data
let data = "Hello".data(using: .utf8)!
try data.write(to: URL(fileURLWithPath: "output.txt"))

// Append
let handle = try FileHandle(
    forWritingTo: URL(fileURLWithPath: "output.txt")
)
handle.seekToEndOfFile()
handle.write("New line\\n".data(using: .utf8)!)
handle.closeFile()`
    }
  ]}
/>

## Puntos Clave

- **APIs síncronas y asíncronas coexisten** — La mayoría de los lenguajes ofrecen ambas: Node.js tiene `fs.readFileSync` y `fs.promises.readFile`; C# tiene `File.ReadAllText` y `File.ReadAllTextAsync`; el `open()` de Python es síncrono por defecto, aunque `asyncio` puede envolverlo. Para cargas de trabajo con mucha E/S (por ejemplo, servidores web leyendo muchos archivos), prefiere async para evitar bloqueos; para scripts o herramientas CLI, sync suele ser más simple. Elige un lenguaje que soporte tu modelo de concurrencia—Node.js y C# son async-first; Rust ofrece `tokio` para E/S de archivos asíncrona.

- **Los patrones de limpieza de recursos difieren** — El `with open('file.txt') as f:` de Python y el `using`/try-with-resources de C#/Java, más el RAII de Rust, garantizan el cierre incluso ante errores. Go usa `defer file.Close()` que se ejecuta cuando la función retorna. C y Zig requieren `fclose` o `file.close()` explícito—si ocurre un error antes del cierre, el handle puede fugarse. Prefiere patrones basados en bloques o RAII cuando estén disponibles; en C o Zig, estructura el código para que cada `open` tenga un `close` correspondiente en la misma ruta de control.

- **El manejo de codificación es explícito en algunos lenguajes** — Python y Node.js aceptan `encoding='utf-8'` al leer texto; C# usa UTF-8 por defecto en APIs más nuevas. C y C++ tratan los archivos como bytes crudos; debes usar bibliotecas o conversión manual para UTF-8. Zig expone APIs de bytes de bajo nivel—`readFileAlloc` retorna `[]u8`, y tú manejas la decodificación de strings. Para texto internacional, prefiere Python, C# o Java; para binario o cuando necesitas control total, C/C++/Zig son apropiados.

- **Helpers de alto nivel vs control manual** — C#, Python y Java ofrecen `File.ReadAllText`, `Path('file.txt').read_text()` y `Files.readString(Path.of("file.txt"))` para lecturas en una línea. C y Zig requieren asignación manual de buffers, bucles `fread`/`read` y terminación nula. Las APIs de alto nivel son convenientes pero pueden cargar archivos completos en memoria; para archivos grandes, usa streaming (por ejemplo, `File.ReadLines`, `BufferedReader` o `BufReader` de Rust). Elige helpers para archivos pequeños; usa streams cuando la memoria o la latencia importen.

- **Las APIs basadas en bloques evitan fugas** — El `File.open('file.txt') { |f| }` de Ruby y el `with open('file.txt') as f:` de Python garantizan el cierre incluso cuando ocurren excepciones. El `fclose` explícito en C y PHP puede causar fugas si ocurre un error antes del cierre—por ejemplo, un `return` o `throw` en medio del procesamiento. Siempre prefiere patrones basados en bloques o RAII cuando estén disponibles; en C, considera usar `goto` a una etiqueta de limpieza o un patrón de wrapper mínimo para centralizar la lógica de cierre.
