---
sidebar_position: 12
description: "Manipulação de strings, formatação, interpolação e codificação em 12 linguagens de programação"
keywords: [strings, manipulação de strings, interpolação, formatação, codificação]
---
# Strings

Manipulação de strings é essencial na programação. Veja como diferentes linguagens lidam com operações de string, concatenação e formatação.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Criação de Strings e Operações Básicas

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// String literals
const str1 = "Hello";
const str2 = 'World';
const str3 = \`Template\`;

// Concatenation
const combined = str1 + " " + str2;
const template = \`\${str1} \${str2}\`;

// Length
const len = str1.length;

// Access character
const char = str1[0];  // 'H'

// Substring
const sub = str1.substring(0, 3);  // 'Hel'`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// String literals
$str1 = "Hello";
$str2 = 'World';

// Concatenation
$combined = $str1 . " " . $str2;
$template = "$str1 $str2";

// Length
$len = strlen($str1);

// Access character
$char = $str1[0];  // 'H'

// Substring
$sub = substr($str1, 0, 3);  // 'Hel'`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// String literals
let str1 = "Hello";  // &str (string slice)
let mut str2 = String::from("World");  // String (owned)

// Concatenation
let combined = format!("{} {}", str1, str2);
let combined2 = str1.to_string() + " " + &str2;

// Length
let len = str1.len();  // bytes
let chars = str1.chars().count();  // characters

// Access character
let char = str1.chars().nth(0);  // Option<char>

// Substring (slice)
let sub = &str1[0..3];  // 'Hel'`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// String literals
str1 := "Hello"
str2 := "World"

// Concatenation
combined := str1 + " " + str2
combined2 := fmt.Sprintf("%s %s", str1, str2)

// Length
len := len(str1)  // bytes
runes := len([]rune(str1))  // characters

// Access character
char := str1[0]  // byte
runeChar := []rune(str1)[0]  // rune

// Substring
sub := str1[0:3]  // "Hel"`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# String literals
str1 = "Hello"
str2 = 'World'

# Concatenation
combined = str1 + " " + str2
template = f"{str1} {str2}"

# Length
length = len(str1)

# Access character
char = str1[0]  # 'H'

# Substring (slicing)
sub = str1[0:3]  # 'Hel'`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// String literals (string slices)
const str1 = "Hello";
const str2 = "World";

// Concatenation
const combined = str1 ++ " " ++ str2;

// Length
const len = str1.len;  // bytes

// Access character
const char = str1[0];  // u8

// Substring (slice)
const sub = str1[0..3];  // "Hel"`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// String literals
string str1 = "Hello";
string str2 = "World";

// Concatenation
string combined = str1 + " " + str2;
string template = $"{str1} {str2}";

// Length
int len = str1.Length;

// Access character
char ch = str1[0];  // 'H'

// Substring
string sub = str1.Substring(0, 3);  // "Hel"`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// String literals
std::string str1 = "Hello";
std::string str2 = "World";

// Concatenation
std::string combined = str1 + " " + str2;

// Length
size_t len = str1.length();

// Access character
char ch = str1[0];  // 'H'

// Substring
std::string sub = str1.substr(0, 3);  // "Hel"`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// String literals (char arrays)
char str1[] = "Hello";
char str2[] = "World";

// Concatenation
char combined[20];
strcpy(combined, str1);
strcat(combined, " ");
strcat(combined, str2);

// Length
size_t len = strlen(str1);

// Access character
char ch = str1[0];  // 'H'

// Substring (manual)
char sub[4];
strncpy(sub, str1, 3);
sub[3] = '\\0';`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// String literals
String str1 = "Hello";
String str2 = "World";

// Concatenation
String combined = str1 + " " + str2;
String template = String.format("%s %s", str1, str2);

// Length
int len = str1.length();

// Access character
char ch = str1.charAt(0);  // 'H'

// Substring
String sub = str1.substring(0, 3);  // "Hel"`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# String literals
str1 = "Hello"
str2 = 'World'

# Concatenation
combined = str1 + " " + str2
template = "#{str1} #{str2}"

# Length
length = str1.length

# Access character
char = str1[0]  # 'H'

# Substring
sub = str1[0, 3]  # "Hel"
sub2 = str1[0..2]  # "Hel"`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// String literals
let str1 = "Hello"
let str2 = "World"

// Concatenation
let combined = str1 + " " + str2
let template = "\\(str1) \\(str2)"

// Length
let len = str1.count  // characters
let utf8Len = str1.utf8.count  // bytes

// Access character
let char = str1[str1.startIndex]  // Character

// Substring
let sub = String(str1.prefix(3))  // "Hel"`
    }
  ]}
/>

## Métodos de Manipulação de Strings

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `const str = "Hello World";

// Case conversion
str.toUpperCase();      // "HELLO WORLD"
str.toLowerCase();      // "hello world"

// Search
str.indexOf("World");   // 6
str.includes("World");  // true
str.startsWith("Hello"); // true
str.endsWith("World");   // true

// Replace
str.replace("World", "Universe");  // "Hello Universe"
str.replaceAll("l", "L");  // "HeLLo WorLd"

// Split
str.split(" ");  // ["Hello", "World"]

// Join
["Hello", "World"].join(" ");  // "Hello World"

// Reverse
str.split("").reverse().join("");  // "dlroW olleH"

// Repeat
"ha".repeat(3);  // "hahaha"

// Trim
"  hello  ".trim();  // "hello"
"  hello  ".trimStart();  // "hello  "
"  hello  ".trimEnd();  // "  hello"

// Pad
"5".padStart(3, "0");  // "005"
"5".padEnd(3, "0");    // "500"

// Capitalize
str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();  // "Hello world"

// Count occurrences
(str.match(/l/g) || []).length;  // 3

// Check empty
str.length === 0;  // false
str.length > 0;    // true`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
$str = "Hello World";

// Case conversion
strtoupper($str);      // "HELLO WORLD"
strtolower($str);      // "hello world"
ucfirst($str);         // "Hello World"
ucwords($str);         // "Hello World"

// Search
strpos($str, "World");   // 6
str_contains($str, "World");  // true
str_starts_with($str, "Hello"); // true
str_ends_with($str, "World");   // true

// Replace
str_replace("World", "Universe", $str);  // "Hello Universe"
str_replace("l", "L", $str);  // "HeLLo WorLd"

// Split
explode(" ", $str);  // ["Hello", "World"]

// Join
implode(" ", ["Hello", "World"]);  // "Hello World"

// Reverse
strrev($str);  // "dlroW olleH"

// Repeat
str_repeat("ha", 3);  // "hahaha"

// Trim
trim("  hello  ");  // "hello"
ltrim("  hello  ");  // "hello  "
rtrim("  hello  ");  // "  hello"

// Pad
str_pad("5", 3, "0", STR_PAD_LEFT);  // "005"
str_pad("5", 3, "0", STR_PAD_RIGHT); // "500"

// Capitalize
ucfirst(strtolower($str));  // "Hello world"

// Count occurrences
substr_count($str, "l");  // 3

// Check empty
empty($str);  // false
strlen($str) > 0;  // true`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `let str = "Hello World";

// Case conversion
str.to_uppercase();      // "HELLO WORLD"
str.to_lowercase();      // "hello world"

// Search
str.find("World");        // Some(6)
str.contains("World");   // true
str.starts_with("Hello"); // true
str.ends_with("World");   // true

// Replace
str.replace("World", "Universe");  // "Hello Universe"
str.replace("l", "L");  // "HeLLo WorLd"

// Split
str.split(" ").collect::<Vec<&str>>();  // ["Hello", "World"]

// Join
vec!["Hello", "World"].join(" ");  // "Hello World"

// Reverse
str.chars().rev().collect::<String>();  // "dlroW olleH"

// Repeat
"ha".repeat(3);  // "hahaha"

// Trim
"  hello  ".trim();  // "hello"
"  hello  ".trim_start();  // "hello  "
"  hello  ".trim_end();  // "  hello"

// Pad (manual or use format!)
format!("{:0>3}", "5");  // "005"
format!("{:0<3}", "5");  // "500"

// Capitalize
let mut chars: Vec<char> = str.chars().collect();
if !chars.is_empty() {
    chars[0] = chars[0].to_uppercase().next().unwrap();
}
chars.iter().collect::<String>();

// Count occurrences
str.matches("l").count();  // 3

// Check empty
str.is_empty();  // false
!str.is_empty();  // true`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `import (
    "strings"
    "unicode"
)

str := "Hello World"

// Case conversion
strings.ToUpper(str)      // "HELLO WORLD"
strings.ToLower(str)      // "hello world"
strings.Title(str)        // "Hello World"

// Search
strings.Index(str, "World")   // 6
strings.Contains(str, "World")  // true
strings.HasPrefix(str, "Hello") // true
strings.HasSuffix(str, "World")   // true

// Replace
strings.Replace(str, "World", "Universe", -1)  // "Hello Universe"
strings.ReplaceAll(str, "l", "L")  // "HeLLo WorLd"

// Split
strings.Split(str, " ")  // ["Hello", "World"]

// Join
strings.Join([]string{"Hello", "World"}, " ")  // "Hello World"

// Reverse
func reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}
reverse(str)  // "dlroW olleH"

// Repeat
strings.Repeat("ha", 3)  // "hahaha"

// Trim
strings.TrimSpace("  hello  ")  // "hello"
strings.TrimLeft("  hello  ", " ")  // "hello  "
strings.TrimRight("  hello  ", " ")  // "  hello"

// Pad
fmt.Sprintf("%03s", "5")  // "005" (manual)
strings.Repeat("0", 3-len("5")) + "5"  // "005"

// Capitalize
strings.ToUpper(string(str[0])) + strings.ToLower(str[1:])  // "Hello world"

// Count occurrences
strings.Count(str, "l")  // 3

// Check empty
len(str) == 0  // false
len(str) > 0   // true`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `str = "Hello World"

# Case conversion
str.upper()      # "HELLO WORLD"
str.lower()      # "hello world"
str.capitalize() # "Hello world"
str.title()      # "Hello World"

# Search
str.find("World")   # 6
"World" in str      # True
str.startswith("Hello") # True
str.endswith("World")   # True

# Replace
str.replace("World", "Universe")  # "Hello Universe"
str.replace("l", "L")  # "HeLLo WorLd"

# Split
str.split(" ")  # ['Hello', 'World']

# Join
" ".join(["Hello", "World"])  # "Hello World"

# Reverse
str[::-1]  # "dlroW olleH"
"".join(reversed(str))  # "dlroW olleH"

# Repeat
"ha" * 3  # "hahaha"

# Trim
"  hello  ".strip()  # "hello"
"  hello  ".lstrip()  # "hello  "
"  hello  ".rstrip()  # "  hello"

# Pad
"5".zfill(3)  # "005"
"5".ljust(3, "0")  # "500"
"5".rjust(3, "0")  # "005"

# Capitalize
str.capitalize()  # "Hello world"

# Count occurrences
str.count("l")  # 3

# Check empty
len(str) == 0  # False
bool(str)      # True
not str        # False`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");
const str = "Hello World";

// Case conversion
var upper: [str.len]u8 = undefined;
for (str, 0..) |char, i| {
    upper[i] = std.ascii.toUpper(char);
}

// Search
std.mem.indexOf(u8, str, "World");  // ?usize

// Replace
var buffer: [100]u8 = undefined;
const replaced = std.mem.replace(u8, str, "World", "Universe", &buffer);

// Split (manual iteration)
var iter = std.mem.split(u8, str, " ");

// Join (manual with allocator)
var list = std.ArrayList(u8).init(allocator);
try list.writer().print("{s} {s}", .{"Hello", "World"});
const joined = list.items;

// Reverse
var reversed: [str.len]u8 = undefined;
for (str, 0..) |char, i| {
    reversed[str.len - 1 - i] = char;
}

// Repeat (manual loop)
var repeated: [9]u8 = undefined;
for (0..3) |i| {
    repeated[i*2] = 'h';
    repeated[i*2+1] = 'a';
}

// Trim
const trimmed = std.mem.trim(u8, "  hello  ", " ");

// Pad (manual)
var padded: [3]u8 = undefined;
padded[0] = '0';
padded[1] = '0';
padded[2] = '5';

// Count occurrences (manual loop)
var count: usize = 0;
for (str) |char| {
    if (char == 'l') count += 1;
}

// Check empty
str.len == 0  // false`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `string str = "Hello World";

// Case conversion
str.ToUpper();      // "HELLO WORLD"
str.ToLower();      // "hello world"

// Search
str.IndexOf("World");   // 6
str.Contains("World");  // true
str.StartsWith("Hello"); // true
str.EndsWith("World");   // true

// Replace
str.Replace("World", "Universe");  // "Hello Universe"
str.Replace("l", "L");  // "HeLLo WorLd"

// Split
str.Split(' ');  // ["Hello", "World"]

// Join
string.Join(" ", new[] {"Hello", "World"});  // "Hello World"

// Reverse
new string(str.Reverse().ToArray());  // "dlroW olleH"

// Repeat
new string('*', 3);  // "***"
string.Concat(Enumerable.Repeat("ha", 3));  // "hahaha"

// Trim
"  hello  ".Trim();  // "hello"
"  hello  ".TrimStart();  // "hello  "
"  hello  ".TrimEnd();  // "  hello"

// Pad
"5".PadLeft(3, '0');  // "005"
"5".PadRight(3, '0'); // "500"

// Capitalize
char.ToUpper(str[0]) + str.Substring(1).ToLower();  // "Hello world"

// Count occurrences
str.Count(c => c == 'l');  // 3

// Check empty
string.IsNullOrEmpty(str);  // false
str.Length == 0;  // false`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <algorithm>
#include <cctype>
#include <sstream>
#include <iterator>

std::string str = "Hello World";

// Case conversion
std::transform(str.begin(), str.end(), str.begin(), ::toupper);
std::transform(str.begin(), str.end(), str.begin(), ::tolower);

// Search
str.find("World");   // 6
str.find("World") != std::string::npos;  // true

// Replace
size_t pos = str.find("World");
if (pos != std::string::npos) {
    str.replace(pos, 5, "Universe");
}

// Split
std::vector<std::string> tokens;
std::istringstream iss(str);
std::copy(std::istream_iterator<std::string>(iss),
          std::istream_iterator<std::string>(),
          std::back_inserter(tokens));

// Join (manual)
std::ostringstream oss;
for (size_t i = 0; i < vec.size(); ++i) {
    if (i != 0) oss << " ";
    oss << vec[i];
}
std::string joined = oss.str();

// Reverse
std::reverse(str.begin(), str.end());  // modifies original
std::string reversed(str.rbegin(), str.rend());  // new string

// Repeat
std::string repeated(3, '*');  // "***"
std::string repeated2;
for (int i = 0; i < 3; i++) repeated2 += "ha";

// Trim (C++17+)
str.erase(0, str.find_first_not_of(" "));
str.erase(str.find_last_not_of(" ") + 1);

// Pad
std::ostringstream pad;
pad << std::setfill('0') << std::setw(3) << "5";
std::string padded = pad.str();  // "005"

// Count occurrences
int count = std::count(str.begin(), str.end(), 'l');  // 3

// Check empty
str.empty();  // false
str.length() == 0;  // false`
    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <string.h>
#include <ctype.h>
#include <stdio.h>

char str[] = "Hello World";

// Case conversion (manual loop)
for (int i = 0; str[i]; i++) {
    str[i] = toupper(str[i]);
}

// Search
char* found = strstr(str, "World");  // pointer or NULL

// Replace (manual)
char* pos = strstr(str, "World");
if (pos) {
    memmove(pos, "Universe", 8);
    pos[8] = '\\0';
}

// Split (use strtok)
char* token = strtok(str, " ");

// Join (manual with sprintf)
char joined[100];
sprintf(joined, "%s %s", "Hello", "World");

// Reverse
void reverse(char* s) {
    int len = strlen(s);
    for (int i = 0; i < len/2; i++) {
        char temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }
}
reverse(str);

// Repeat (manual loop)
char repeated[10] = "";
for (int i = 0; i < 3; i++) {
    strcat(repeated, "ha");
}

// Trim (manual)
char* trim(char* s) {
    while (isspace(*s)) s++;
    char* end = s + strlen(s) - 1;
    while (end > s && isspace(*end)) end--;
    *(end+1) = '\\0';
    return s;
}

// Pad (manual with sprintf)
char padded[10];
sprintf(padded, "%03s", "5");  // "005"

// Count occurrences (manual loop)
int count = 0;
for (int i = 0; str[i]; i++) {
    if (str[i] == 'l') count++;
}

// Check empty
strlen(str) == 0  // false`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `String str = "Hello World";

// Case conversion
str.toUpperCase();      // "HELLO WORLD"
str.toLowerCase();      // "hello world"

// Search
str.indexOf("World");   // 6
str.contains("World");  // true
str.startsWith("Hello"); // true
str.endsWith("World");   // true

// Replace
str.replace("World", "Universe");  // "Hello Universe"
str.replace("l", "L");  // "HeLLo WorLd"
str.replaceAll("l", "L");  // "HeLLo WorLd"

// Split
str.split(" ");  // ["Hello", "World"]

// Join
String.join(" ", "Hello", "World");  // "Hello World"
String.join(" ", Arrays.asList("Hello", "World"));  // "Hello World"

// Reverse
new StringBuilder(str).reverse().toString();  // "dlroW olleH"

// Repeat (Java 11+)
"ha".repeat(3);  // "hahaha"

// Trim
"  hello  ".trim();  // "hello"
"  hello  ".stripLeading();  // "hello  " (Java 11+)
"  hello  ".stripTrailing();  // "  hello" (Java 11+)

// Pad (manual or use String.format)
String.format("%03s", "5");  // "005"
String.format("%-3s", "5").replace(' ', '0');  // "500"

// Capitalize
str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();  // "Hello world"

// Count occurrences
str.length() - str.replace("l", "").length();  // 3
str.chars().filter(ch -> ch == 'l').count();  // 3 (Java 8+)

// Check empty
str.isEmpty();  // false
str.length() == 0;  // false`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `str = "Hello World"

# Case conversion
str.upcase      # "HELLO WORLD"
str.downcase    # "hello world"
str.capitalize  # "Hello world"

# Search
str.index("World")   # 6
str.include?("World")  # true
str.start_with?("Hello") # true
str.end_with?("World")   # true

# Replace
str.gsub("World", "Universe")  # "Hello Universe"
str.gsub("l", "L")  # "HeLLo WorLd"
str.sub("World", "Universe")  # replace first only

# Split
str.split(" ")  # ["Hello", "World"]

# Join
["Hello", "World"].join(" ")  # "Hello World"

# Reverse
str.reverse  # "dlroW olleH"

# Repeat
"ha" * 3  # "hahaha"

# Trim
"  hello  ".strip  # "hello"
"  hello  ".lstrip  # "hello  "
"  hello  ".rstrip  # "  hello"

# Pad
"5".rjust(3, "0")  # "005"
"5".ljust(3, "0")  # "500"

# Capitalize
str.capitalize  # "Hello world"

# Count occurrences
str.count("l")  # 3

# Check empty
str.empty?  # false
str.length == 0  # false`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `let str = "Hello World"

// Case conversion
str.uppercased()      // "HELLO WORLD"
str.lowercased()      // "hello world"
str.capitalized       // "Hello World"

// Search
str.firstIndex(of: "World")   // Optional<Index>
str.contains("World")  // true
str.hasPrefix("Hello") // true
str.hasSuffix("World")   // true

// Replace
str.replacingOccurrences(of: "World", with: "Universe")  // "Hello Universe"
str.replacingOccurrences(of: "l", with: "L")  // "HeLLo WorLd"

// Split
str.components(separatedBy: " ")  // ["Hello", "World"]

// Join
["Hello", "World"].joined(separator: " ")  // "Hello World"

// Reverse
String(str.reversed())  // "dlroW olleH"

// Repeat
String(repeating: "ha", count: 3)  // "hahaha"

// Trim
"  hello  ".trimmingCharacters(in: .whitespaces)  // "hello"
"  hello  ".trimmingCharacters(in: .whitespacesAndNewlines)  // "hello"

// Pad (manual)
let padded = String(format: "%03d", 5)  // "005"
let paddedRight = String(format: "%-3d", 5)  // "5  "

// Capitalize
str.capitalized  // "Hello World"

// Count occurrences
str.filter { $0 == "l" }.count  // 3
str.components(separatedBy: "l").count - 1  // 3

// Check empty
str.isEmpty  // false
str.count == 0  // false`
    }
  ]}
/>

## Principais Conclusões

- **Imutabilidade** -- Strings são imutáveis em Java, Python, JavaScript, C# e Swift — cada "modificação" cria uma nova string. C e C++ usam arrays `char` mutáveis; Rust oferece tanto `&str` (slice imutável) quanto `String` (owned, mutável via métodos como `push_str`). Imutabilidade simplifica o raciocínio sobre concorrência e previne bugs de aliasing acidental. Escolha strings mutáveis (C/C++) apenas quando precisar de modificação in-place para código crítico de performance; caso contrário, imutabilidade é mais segura.

- **Codificação e Unicode** -- Go e Rust tratam strings como bytes UTF-8; acessar um "caractere" em Go requer `[]rune(str)` porque `str[0]` retorna um byte. Swift usa grapheme clusters para tratamento correto de emoji e caracteres combinantes. C usa arrays de bytes terminados em null sem garantia de codificação. Strings em Python 3 são Unicode por padrão. Para aplicações internacionalizadas, prefira Swift, Python ou Rust; para trabalho apenas ASCII ou de baixo nível, acesso por byte em C/Go é suficiente.

- **Interpolação de strings** -- JavaScript usa template literals (`` `${name} is ${age}` ``); Python usa f-strings (`f"{name} is {age}"`); C# usa `$"{name} is {age}"`; Ruby usa `"#{name} is #{age}"`. C depende de `sprintf` ou concatenação manual. Interpolação melhora a legibilidade e evita bugs de injeção por concatenação de strings. Escolha uma linguagem com interpolação de primeira classe para código de UI e logging.

- **Semântica de comprimento** -- `len(str)` em Go retorna bytes; `str.count` de Swift retorna caracteres (grapheme clusters). `str.len()` de Rust é bytes; use `str.chars().count()` para caracteres. `len(str)` de Python conta code points Unicode. Isso importa para validação (ex: "máximo 10 caracteres") e truncamento. Para limites de comprimento voltados ao usuário, use APIs baseadas em caracteres (Swift, Python); para armazenamento ou rede, comprimento em bytes é o correto.

- **Operações comuns** -- A maioria das linguagens fornece `split`, `replace`, `trim`, `upper`/`lower` e `contains`. Go usa funções de pacote (`strings.Split`, `strings.Replace`); Python e JavaScript usam métodos (`str.split()`, `str.replace()`). Zig e C exigem loops manuais ou bibliotecas externas. Se você faz processamento pesado de strings, prefira Python, JavaScript ou C# por suas APIs built-in ricas; para código embarcado ou de sistemas, espere implementar ou importar utilitários.
