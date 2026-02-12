---
sidebar_position: 9
description: "Declaración de funciones, parámetros, valores de retorno y sobrecarga en 12 lenguajes"
keywords: [funciones, parámetros, valores de retorno, sobrecarga, parámetros por defecto]
---
# Funciones

Las funciones son bloques de código reutilizable. Así es como diferentes lenguajes definen y llaman funciones.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Declaración Básica de Funciones

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Arrow function
const greet = (name) => {
    return "Hello, " + name;
};

// Arrow function (shorthand)
const greet = name => "Hello, " + name;

// Function call
greet("John");`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Function declaration
function greet($name) {
    return "Hello, " . $name;
}

// With type hints
function add(int $a, int $b): int {
    return $a + $b;
}

// Function call
greet("John");`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Function declaration
fn greet(name: &str) -> String {
    format!("Hello, {}", name)
}

// Multiple parameters
fn add(a: i32, b: i32) -> i32 {
    a + b  // No semicolon = return
}

// Function call
greet("John");`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Function declaration
func greet(name string) string {
    return "Hello, " + name
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// Function call
greet("John")`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Function declaration
def greet(name):
    return "Hello, " + name

# With type hints
def add(a: int, b: int) -> int:
    return a + b

# Default parameters
def greet(name: str = "World") -> str:
    return f"Hello, {name}"

# Function call
greet("John")`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Function declaration
fn greet(name: []const u8) ![]const u8 {
    return "Hello, " ++ name;
}

// With error handling
fn divide(a: f64, b: f64) !f64 {
    if (b == 0) return error.DivisionByZero;
    return a / b;
}

// Function call
_ = greet("John");`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Function declaration
public static string Greet(string name)
{
    return "Hello, " + name;
}

// Expression-bodied member
public static string Greet(string name) => "Hello, " + name;

// Default parameters
public static string Greet(string name = "World")
{
    return "Hello, " + name;
}

// Function call
Greet("John");`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Function declaration
std::string greet(const std::string& name) {
    return "Hello, " + name;
}

// Function with default parameter
std::string greet(const std::string& name = "World") {
    return "Hello, " + name;
}

// Function call
greet("John");`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Function declaration
char* greet(const char* name) {
    static char result[100];
    sprintf(result, "Hello, %s", name);
    return result;
}

// Function call
greet("John");`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Method declaration
public static String greet(String name) {
    return "Hello, " + name;
}

// Method call
greet("John");`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Function declaration
def greet(name)
    "Hello, " + name
end

# Default parameters
def greet(name = "World")
    "Hello, " + name
end

# Function call
greet("John")`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Function declaration
func greet(name: String) -> String {
    return "Hello, " + name
}

// Shorthand
func greet(name: String) -> String {
    "Hello, " + name
}

// Default parameters
func greet(name: String = "World") -> String {
    "Hello, " + name
}

// Function call
greet(name: "John")`
    }
  ]}
/>

## Características Avanzadas de Funciones

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Default parameters
function greet(name = "World") {
    return "Hello, " + name;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// Arrow function with this binding
const obj = {
    name: "John",
    greet: function() {
        setTimeout(() => {
            console.log(this.name);
        }, 100);
    }
};`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Default parameters
function greet($name = "World") {
    return "Hello, " . $name;
}

// Variadic functions
function sum(...$numbers) {
    return array_sum($numbers);
}

// Type declarations
function process(array $items, callable $callback): array {
    return array_map($callback, $items);
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Closures
let add = |a: i32, b: i32| a + b;

// Higher-order functions
fn apply<F>(f: F, value: i32) -> i32
where
    F: Fn(i32) -> i32,
{
    f(value)
}

// Function pointers
fn double(x: i32) -> i32 {
    x * 2
}
let func: fn(i32) -> i32 = double;`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Variadic functions
func sum(numbers ...int) int {
    total := 0
    for _, n := range numbers {
        total += n
    }
    return total
}

// Function as value
var operation func(int, int) int
operation = func(a, b int) int {
    return a + b
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Default parameters
def greet(name="World"):
    return f"Hello, {name}"

# *args and **kwargs
def process(*args, **kwargs):
    print(args)
    print(kwargs)

# Lambda functions
add = lambda a, b: a + b

# Decorators
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Function pointers
const Operation = fn(i32, i32) i32;

fn add(a: i32, b: i32) i32 {
    return a + b;
}

const op: Operation = add;

// Comptime functions
fn comptimeAdd(comptime a: i32, comptime b: i32) i32 {
    return a + b;
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Default parameters
public static string Greet(string name = "World")
{
    return "Hello, " + name;
}

// Params keyword
public static int Sum(params int[] numbers)
{
    return numbers.Sum();
}

// Lambda expressions
Func<int, int, int> add = (a, b) => a + b;

// Action and Func delegates
Action<string> print = name => Console.WriteLine(name);`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Default parameters
std::string greet(const std::string& name = "World") {
    return "Hello, " + name;
}

// Variadic templates (C++11+)
template<typename... Args>
void print(Args... args) {
    ((std::cout << args << " "), ...);
}

// Lambda functions
auto add = [](int a, int b) { return a + b; };`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Function pointers
int add(int a, int b) {
    return a + b;
}

int (*operation)(int, int) = add;

// Variadic functions
#include <stdarg.h>
int sum(int count, ...) {
    va_list args;
    va_start(args, count);
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }
    va_end(args);
    return total;
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Method overloading
public static int add(int a, int b) {
    return a + b;
}

public static double add(double a, double b) {
    return a + b;
}

// Lambda expressions (Java 8+)
Function<Integer, Integer> square = x -> x * x;

// Method references
Function<String, Integer> length = String::length;`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Default parameters
def greet(name = "World")
    "Hello, " + name
end

# Keyword arguments
def create_user(name:, email:, age: 18)
    { name: name, email: email, age: age }
end

# Blocks
[1, 2, 3].each do |n|
    puts n
end

# Procs and lambdas
square = ->(x) { x * x }`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Default parameters
func greet(name: String = "World") -> String {
    "Hello, " + name
}

// Variadic parameters
func sum(_ numbers: Int...) -> Int {
    numbers.reduce(0, +)
}

// Closures
let add = { (a: Int, b: Int) -> Int in
    return a + b
}

// Trailing closures
numbers.map { $0 * 2 }`
    }
  ]}
/>

## Puntos Clave

- **Estilos de declaración** -- `function` (JavaScript, PHP), `def` (Python, Ruby), `fn` (Rust, Zig), `func` (Go, Swift). Las funciones flecha y lambdas son comunes en lenguajes modernos.
- **Paso de parámetros** -- Los valores por defecto están soportados en la mayoría; variádicos mediante `*args`/`**kwargs` (Python), `...` (PHP, Go, Swift, C), `params` (C#). Zig usa `!` para retornos con posibilidad de error.
- **Valores de retorno** -- Go permite retornos múltiples; Rust usa `Result`/`Option`; Zig usa uniones de error; Python/Ruby permiten retornos implícitos de la última expresión.


