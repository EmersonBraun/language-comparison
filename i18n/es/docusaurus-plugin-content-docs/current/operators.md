---
sidebar_position: 4
description: "Operadores aritméticos, de comparación, lógicos y a nivel de bits comparados en 12 lenguajes"
keywords: [operadores, aritmética, comparación, lógicos, bits, null coalescing]
---

# Operadores

Los operadores son símbolos que realizan operaciones sobre valores. Aquí se muestra cómo los diferentes lenguajes manejan los operadores aritméticos, de comparación, lógicos y a nivel de bits.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Operadores Aritméticos y de Asignación

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Arithmetic
5 + 3;    // 8  (addition)
5 - 3;    // 2  (subtraction)
5 * 3;    // 15 (multiplication)
5 / 3;    // 1.6667 (division)
5 % 3;    // 2  (modulo)
5 ** 3;   // 125 (exponentiation)

// Increment / Decrement
let x = 5;
x++;      // 6 (post-increment)
++x;      // 7 (pre-increment)
x--;      // 6 (post-decrement)

// Assignment
x += 3;   // x = x + 3
x -= 2;   // x = x - 2
x *= 4;   // x = x * 4
x /= 2;   // x = x / 2
x %= 3;   // x = x % 3
x **= 2;  // x = x ** 2`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Arithmetic
5 + 3;    // 8
5 - 3;    // 2
5 * 3;    // 15
5 / 3;    // 1.6667
5 % 3;    // 2
5 ** 3;   // 125

// Increment / Decrement
$x = 5;
$x++;     // 6
++$x;     // 7
$x--;     // 6

// Assignment
$x += 3;
$x -= 2;
$x *= 4;
$x /= 2;
$x %= 3;
$x **= 2;

// String concatenation
$str = "Hello" . " " . "World";
$str .= "!";  // append`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Arithmetic
5 + 3;    // 8
5 - 3;    // 2
5 * 3;    // 15
5 / 3;    // 1 (integer division)
5.0 / 3.0; // 1.6667 (float)
5 % 3;    // 2

// No increment/decrement operators
let mut x = 5;
x += 1;   // instead of x++

// Assignment
x += 3;
x -= 2;
x *= 4;
x /= 2;
x %= 3;

// No implicit type coercion
// 5 + 3.0  // compile error
5 as f64 + 3.0;  // OK

// Overflow handling
5_i32.checked_add(3);   // Some(8)
i32::MAX.checked_add(1); // None`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Arithmetic
5 + 3    // 8
5 - 3    // 2
5 * 3    // 15
5 / 3    // 1 (integer division)
5.0 / 3.0 // 1.6667
5 % 3    // 2

// Increment / Decrement (statements only)
x := 5
x++      // 6 (no pre-increment)
x--      // 5 (no pre-decrement)
// y := x++  // error: not an expression

// Assignment
x += 3
x -= 2
x *= 4
x /= 2
x %= 3

// No exponentiation operator
import "math"
math.Pow(5, 3)  // 125.0`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Arithmetic
5 + 3     # 8
5 - 3     # 2
5 * 3     # 15
5 / 3     # 1.6667 (always float)
5 // 3    # 1 (floor division)
5 % 3     # 2
5 ** 3    # 125 (exponentiation)

# No increment/decrement operators
x = 5
x += 1    # instead of x++

# Assignment
x += 3
x -= 2
x *= 4
x /= 2   # result is float
x //= 3
x %= 3
x **= 2

# Walrus operator (Python 3.8+)
if (n := len(items)) > 10:
    print(f"List is too long ({n} elements)")`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Arithmetic
const a: i32 = 5 + 3;   // 8
const b: i32 = 5 - 3;   // 2
const c: i32 = 5 * 3;   // 15
const d: i32 = @divTrunc(5, 3); // 1
const e: i32 = @mod(5, 3);      // 2

// No increment/decrement operators
var x: i32 = 5;
x += 1;

// Assignment
x += 3;
x -= 2;
x *= 4;

// Overflow-safe by default
// x = x + 1;  // panics on overflow in debug
x +%= 1;  // wrapping add (no panic)

// Saturating arithmetic
x +|= 1;  // saturating add`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Arithmetic
5 + 3;    // 8
5 - 3;    // 2
5 * 3;    // 15
5 / 3;    // 1 (integer division)
5.0 / 3;  // 1.6667
5 % 3;    // 2
Math.Pow(5, 3);  // 125

// Increment / Decrement
int x = 5;
x++;      // 6
++x;      // 7
x--;      // 6

// Assignment
x += 3;
x -= 2;
x *= 4;
x /= 2;
x %= 3;

// Null-coalescing assignment
string? name = null;
name ??= "default";`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Arithmetic
5 + 3;    // 8
5 - 3;    // 2
5 * 3;    // 15
5 / 3;    // 1 (integer division)
5.0 / 3;  // 1.6667
5 % 3;    // 2
pow(5, 3); // 125

// Increment / Decrement
int x = 5;
x++;      // 6
++x;      // 7  (prefer pre-increment)
x--;      // 6

// Assignment
x += 3;
x -= 2;
x *= 4;
x /= 2;
x %= 3;`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Arithmetic
5 + 3;    // 8
5 - 3;    // 2
5 * 3;    // 15
5 / 3;    // 1 (integer division)
5.0 / 3;  // 1.6667
5 % 3;    // 2
pow(5, 3); // 125.0 (from math.h)

// Increment / Decrement
int x = 5;
x++;      // 6
++x;      // 7
x--;      // 6

// Assignment
x += 3;
x -= 2;
x *= 4;
x /= 2;
x %= 3;`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Arithmetic
5 + 3;    // 8
5 - 3;    // 2
5 * 3;    // 15
5 / 3;    // 1 (integer division)
5.0 / 3;  // 1.6667
5 % 3;    // 2
Math.pow(5, 3);  // 125.0

// Increment / Decrement
int x = 5;
x++;      // 6
++x;      // 7
x--;      // 6

// Assignment
x += 3;
x -= 2;
x *= 4;
x /= 2;
x %= 3;`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Arithmetic
5 + 3     # 8
5 - 3     # 2
5 * 3     # 15
5 / 3     # 1 (integer division)
5.0 / 3   # 1.6667
5 % 3     # 2
5 ** 3    # 125

# No increment/decrement operators
x = 5
x += 1    # instead of x++

# Assignment
x += 3
x -= 2
x *= 4
x /= 2
x %= 3
x **= 2

# Integer methods
5.even?   # false
5.odd?    # true
-5.abs    # 5`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Arithmetic
5 + 3     // 8
5 - 3     // 2
5 * 3     // 15
5 / 3     // 1 (integer division)
5.0 / 3   // 1.6667
5 % 3     // 2
pow(5.0, 3.0)  // 125.0

// No increment/decrement (removed in Swift 3)
var x = 5
x += 1    // instead of x++

// Assignment
x += 3
x -= 2
x *= 4
x /= 2
x %= 3

// Overflow operators
var y: Int8 = 127
y = y &+ 1   // -128 (wrapping)`
    }
  ]}
/>

## Operadores de Comparación y Lógicos

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Comparison
5 == "5";     // true  (loose equality)
5 === "5";    // false (strict equality)
5 != "5";     // false (loose inequality)
5 !== "5";    // true  (strict inequality)
5 > 3;        // true
5 >= 5;       // true
5 < 10;       // true
5 <= 5;       // true

// Logical
true && false;   // false (AND)
true || false;   // true  (OR)
!true;           // false (NOT)

// Nullish coalescing
null ?? "default";    // "default"
undefined ?? "default"; // "default"
0 ?? "default";       // 0

// Optional chaining
user?.address?.city;
arr?.[0];
func?.();`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Comparison
5 == "5";     // true  (loose)
5 === "5";    // false (strict)
5 != "5";     // false
5 !== "5";    // true
5 > 3;        // true
5 <=> 3;      // 1 (spaceship operator)

// Logical
true && false;   // false
true || false;   // true
!true;           // false
true and false;  // false (lower precedence)
true or false;   // true

// Null coalescing
$name = $user ?? "default";
$name ??= "default";  // PHP 7.4+

// Null safe operator (PHP 8.0+)
$city = $user?->address?->city;`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Comparison (must be same type)
5 == 5;     // true
5 != 3;     // true
5 > 3;      // true
5 >= 5;     // true
5 < 10;     // true
5 <= 5;     // true

// Logical
true && false;   // false
true || false;   // true
!true;           // false

// No null - use Option
let x: Option<i32> = Some(5);
let y: Option<i32> = None;

// Unwrap with default
x.unwrap_or(0);        // 5
y.unwrap_or(0);        // 0

// if let (pattern matching)
if let Some(value) = x {
    println!("{}", value);
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Comparison
5 == 5     // true
5 != 3     // true
5 > 3      // true
5 >= 5     // true
5 < 10     // true
5 <= 5     // true

// Logical
true && false   // false
true || false   // true
!true           // false

// No ternary operator
// Use if/else instead
var result string
if x > 0 {
    result = "positive"
} else {
    result = "non-positive"
}

// No null coalescing
// Check nil explicitly
if value != nil {
    // use value
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Comparison
5 == 5      # True
5 != 3      # True
5 > 3       # True
5 >= 5      # True
5 < 10      # True
5 <= 5      # True
5 is 5      # True (identity check)

# Chained comparisons
1 < x < 10         # True if x between 1 and 10
a == b == c         # True if all equal

# Logical
True and False   # False
True or False    # True
not True         # False

# Ternary
result = "yes" if condition else "no"

# Truthiness
bool(0)      # False
bool("")     # False
bool(None)   # False
bool([])     # False
bool(1)      # True`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Comparison
const a = (5 == 5);   // true
const b = (5 != 3);   // true
const c = (5 > 3);    // true
const d = (5 >= 5);   // true
const e = (5 < 10);   // true
const f = (5 <= 5);   // true

// Logical
const g = true and false;  // false
const h = true or false;   // true
const i = !true;           // false

// Optional handling
var x: ?i32 = 42;
var y: ?i32 = null;

// orelse (null coalescing)
const val = x orelse 0;    // 42
const val2 = y orelse 0;   // 0

// if with optionals
if (x) |value| {
    std.debug.print("{d}\\n", .{value});
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Comparison
5 == 5;     // true
5 != 3;     // true
5 > 3;      // true
5 >= 5;     // true

// Logical
true && false;   // false
true || false;   // true
!true;           // false

// Ternary
var result = x > 0 ? "positive" : "non-positive";

// Null-coalescing
string name = user ?? "default";
string city = user?.Address?.City ?? "unknown";

// Null-conditional
int? length = text?.Length;

// Pattern matching operators (C# 9+)
if (x is > 0 and < 100) { }
if (x is not null) { }`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Comparison
5 == 5;     // true
5 != 3;     // true
5 > 3;      // true
5 >= 5;     // true
(5 <=> 3);  // strong_ordering::greater (C++20)

// Logical
true && false;   // false
true || false;   // true
!true;           // false

// Ternary
auto result = x > 0 ? "positive" : "non-positive";

// No null coalescing
// Use std::optional (C++17)
std::optional<int> x = 42;
int val = x.value_or(0);  // 42`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Comparison
5 == 5;     // 1 (true)
5 != 3;     // 1
5 > 3;      // 1
5 >= 5;     // 1

// Logical
1 && 0;     // 0 (false)
1 || 0;     // 1 (true)
!1;         // 0 (false)

// Ternary
int result = x > 0 ? 1 : -1;

// Bitwise
5 & 3;      // 1  (AND)
5 | 3;      // 7  (OR)
5 ^ 3;      // 6  (XOR)
~5;         // -6 (NOT)
5 << 1;     // 10 (left shift)
5 >> 1;     // 2  (right shift)`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Comparison
5 == 5;        // true (primitives)
"a".equals("a"); // true (objects)
5 != 3;        // true
5 > 3;         // true

// Logical
true && false;   // false
true || false;   // true
!true;           // false

// Ternary
String result = x > 0 ? "positive" : "non-positive";

// instanceof (type check)
if (obj instanceof String s) {
    // s is already cast (Java 16+)
    System.out.println(s.length());
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Comparison
5 == 5      # true
5 != 3      # true
5 > 3       # true
5 >= 5      # true
5 <=> 3     # 1 (spaceship)
5 === 5     # true (case equality)

# Logical
true && false   # false
true || false   # true
!true           # false
true and false  # false (lower precedence)

# Ternary
result = x > 0 ? "positive" : "non-positive"

# Safe navigation
city = user&.address&.city

# Or-assign
name ||= "default"  # assign if nil/false`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Comparison
5 == 5     // true
5 != 3     // true
5 > 3      // true
5 >= 5     // true

// Logical
true && false   // false
true || false   // true
!true           // false

// Ternary
let result = x > 0 ? "positive" : "non-positive"

// Nil-coalescing
let name = optionalName ?? "default"

// Optional chaining
let city = user?.address?.city

// Nil-coalescing assignment
var name: String? = nil
name = name ?? "default"`
    }
  ]}
/>

## Puntos Clave

- **La sobrecarga de operadores depende del lenguaje** -- C++ y Swift permiten operadores personalizados para tipos definidos por el usuario; Rust usa traits como `Add` y `Sub` para la sobrecarga. Python permite `__add__`, `__sub__` y métodos similares para definir el comportamiento de los operadores. Go y Java prohíben la sobrecarga de operadores para tipos de usuario, por lo que se usan métodos en su lugar (por ejemplo, `a.Add(b)` en Go). Si necesitas operadores numéricos expresivos o específicos de dominio (por ejemplo, matemáticas vectoriales), prefiere C++, Rust, Swift o Python; si quieres semánticas más simples y predecibles, Go o Java pueden ser mejores.

- **Null coalescing (`??`) y optional chaining (`?.`)** -- JavaScript, C#, Swift, PHP 8+ y Ruby soportan `??` para valores por defecto cuando un valor es null/undefined y `?.` para acceso seguro a propiedades. Por ejemplo, `user?.address?.city ?? "unknown"` evita errores de puntero nulo. Go y Rust no tienen null; Go usa verificaciones explícitas de nil; Rust usa `Option` con `unwrap_or(0)` u `orelse 0` en Zig. C y Java carecen de equivalentes nativos y dependen de verificaciones manuales o bibliotecas. Al trabajar con datos anulables, prefiere lenguajes con manejo de null de primera clase para reducir código repetitivo y bugs.

- **El comportamiento del overflow difiere** -- Zig entra en pánico por overflow en builds de debug y hace wrapping en release; Rust ofrece `checked_add`, `wrapping_add` y `saturating_add` para que elijas el comportamiento. C y C++ tienen comportamiento indefinido en overflow de enteros, lo que puede llevar a problemas de seguridad. JavaScript y Python usan enteros de precisión arbitraria, por lo que el overflow está efectivamente ausente. Para código numérico seguro, usa las APIs checked de Rust o los operadores explícitos de Zig; evita depender de la semántica de overflow de C/C++.

- **Semántica de la división entera** -- El `/` de Python 3 siempre retorna un float (`5 / 3` es `1.666...`); `//` es la división entera. C, Go, Rust y Java usan división truncada para enteros (`5 / 3` es `1`). Esto afecta la portabilidad al mover código numérico entre lenguajes. Para consistencia, usa división entera explícita (`//` en Python, `@divTrunc` en Zig) o convierte a float cuando necesites resultados fraccionarios. Al portar algoritmos, verifica la semántica de la división para evitar errores de redondeo o off-by-one.

- **Los operadores de incremento/decremento están ausentes en algunos lenguajes** -- Rust, Python, Swift y Zig omiten `++` y `--`; Go los tiene pero solo como sentencias (por ejemplo, `x++`), no como expresiones. Estos lenguajes prefieren el explícito `x += 1` para mayor claridad y para evitar la confusión de pre/post-incremento (por ejemplo, `i++` vs `++i`). C, C++, C#, Java, JavaScript y PHP mantienen `++`/`--`. Si cambias entre lenguajes, usa `x += 1` por defecto donde esté disponible para evitar problemas de portabilidad y bugs sutiles.
