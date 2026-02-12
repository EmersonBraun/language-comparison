---
sidebar_position: 23
description: "Seguridad ante nulos, tipos Optional y manejo de nil comparados en 12 lenguajes de programación"
keywords: [seguridad ante nulos, Optional, nullable, nil, coalescencia nula, opcionales]
---

# Seguridad ante Nulos y Opcionales

Manejar valores null/nil es una fuente común de errores. Así es como los diferentes lenguajes abordan la seguridad ante nulos.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Tipos Nullable y Opcionales

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// null and undefined are distinct
let a = null;       // Intentionally empty
let b = undefined;  // Not yet assigned
let c;              // undefined

// Checking for null/undefined
if (value === null) { }
if (value === undefined) { }
if (value == null) { }  // checks both null & undefined

// Nullish coalescing (??)
const name = user ?? "default";
const age = data.age ?? 0;

// Optional chaining (?.)
const city = user?.address?.city;
const first = arr?.[0];
const result = func?.();

// Nullish coalescing assignment
let x = null;
x ??= "default";  // x is now "default"

// Logical OR (includes falsy values)
const name2 = user || "default";  // "" -> "default"
const name3 = user ?? "default";  // "" -> ""`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Null
$value = null;
is_null($value);     // true
isset($value);       // false

// Null coalescing
$name = $user ?? "default";
$name ??= "default";  // PHP 7.4+

// Null safe operator (PHP 8.0+)
$city = $user?->getAddress()?->getCity();

// Nullable types
function find(?int $id): ?User {
    if ($id === null) return null;
    return User::find($id);
}

// Union types with null
function process(string|null $value): string {
    return $value ?? "default";
}

// Null strict comparison
$value === null;   // Strict check
$value == null;    // Also matches false, 0, ""`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// No null! Use Option<T>
let some_value: Option<i32> = Some(42);
let no_value: Option<i32> = None;

// Pattern matching
match some_value {
    Some(v) => println!("Got: {}", v),
    None => println!("Nothing"),
}

// if let
if let Some(v) = some_value {
    println!("Got: {}", v);
}

// Unwrap methods
some_value.unwrap();           // Panics if None
some_value.unwrap_or(0);       // Default value
some_value.unwrap_or_default(); // Type's default
some_value.expect("must exist"); // Panic with message

// Combinators
some_value.map(|v| v * 2);         // Some(84)
no_value.map(|v| v * 2);           // None
some_value.and_then(|v| Some(v + 1)); // Some(43)
some_value.filter(|v| *v > 50);    // None
no_value.or(Some(0));              // Some(0)

// ? operator (propagate None)
fn get_city(user: &Option<User>) -> Option<String> {
    let city = user.as_ref()?.address.as_ref()?.city.clone();
    Some(city)
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// nil is the zero value for pointers, interfaces,
// maps, slices, channels, and functions
var ptr *int = nil
var slice []int = nil
var m map[string]int = nil

// Check for nil
if ptr != nil {
    fmt.Println(*ptr)
}

// Pointer for optional values
func findUser(id int) *User {
    // return nil if not found
    return nil
}

user := findUser(1)
if user != nil {
    fmt.Println(user.Name)
}

// Error pattern (idiomatic Go)
func getCity(user *User) (string, error) {
    if user == nil {
        return "", errors.New("user is nil")
    }
    if user.Address == nil {
        return "", errors.New("address is nil")
    }
    return user.Address.City, nil
}

// Zero values (no nil needed)
var s string  // "" (not nil)
var n int     // 0 (not nil)
var b bool    // false (not nil)`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# None is Python's null
value = None

# Check for None (use 'is', not '==')
if value is None:
    print("no value")

if value is not None:
    print(value)

# Optional type hints
from typing import Optional

def find_user(id: int) -> Optional[User]:
    # Returns User or None
    return None

# Union syntax (Python 3.10+)
def find_user(id: int) -> User | None:
    return None

# Default values
name = user.name if user else "default"

# Walrus operator for safe access
if (user := find_user(1)) is not None:
    print(user.name)

# getattr with default
name = getattr(user, 'name', 'default')

# dict.get with default
city = data.get('city', 'unknown')`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Optional type: ?T
var value: ?i32 = 42;
var empty: ?i32 = null;

// Unwrap with orelse
const result = value orelse 0;       // 42
const result2 = empty orelse 0;      // 0

// Unwrap with if
if (value) |v| {
    std.debug.print("Got: {d}\\n", .{v});
} else {
    std.debug.print("null\\n", .{});
}

// Unwrap with .?  (assert non-null)
const v = value.?;  // panics if null

// Optional pointers
var ptr: ?*i32 = null;

// Chaining optionals
fn getCity(user: ?*User) ?[]const u8 {
    const u = user orelse return null;
    const addr = u.address orelse return null;
    return addr.city;
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Nullable value types
int? nullableInt = null;
int? withValue = 42;

// Null check
if (nullableInt.HasValue)
    Console.WriteLine(nullableInt.Value);

// Null-coalescing
string name = user ?? "default";
int age = nullableAge ?? 0;

// Null-coalescing assignment
string? name = null;
name ??= "default";

// Null-conditional (safe navigation)
string? city = user?.Address?.City;
int? length = text?.Length;
int? first = list?.FirstOrDefault();

// Nullable reference types (C# 8+)
#nullable enable
string nonNull = "hello";     // Cannot be null
string? canBeNull = null;     // Can be null

// Pattern matching with null
if (value is not null) { }
if (value is string s) { }

// Null-forgiving operator
string s = possiblyNull!;  // Trust me, not null`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Pointers can be null
int* ptr = nullptr;

if (ptr != nullptr) {
    std::cout << *ptr;
}

// std::optional (C++17)
#include <optional>

std::optional<int> findValue(int id) {
    if (id > 0) return 42;
    return std::nullopt;
}

auto result = findValue(1);

// Check and access
if (result.has_value()) {
    std::cout << result.value();
}

// value_or (default)
int val = result.value_or(0);

// Dereference (undefined if empty)
if (result) {
    std::cout << *result;
}

// std::unique_ptr / std::shared_ptr
auto ptr = std::make_unique<int>(42);
if (ptr) {
    std::cout << *ptr;
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// NULL pointer
int* ptr = NULL;

// Check before use
if (ptr != NULL) {
    printf("%d\\n", *ptr);
}

// Common patterns
// Return NULL for "not found"
char* find_name(int id) {
    if (id < 0) return NULL;
    return "John";
}

char* name = find_name(-1);
if (name != NULL) {
    printf("%s\\n", name);
}

// Sentinel values (no optionals)
#define NOT_FOUND -1

int find_index(int* arr, int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) return i;
    }
    return NOT_FOUND;
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// null reference
String name = null;

// NullPointerException if not checked
// name.length();  // throws NPE!

// Optional<T> (Java 8+)
Optional<String> opt = Optional.of("hello");
Optional<String> empty = Optional.empty();
Optional<String> nullable = Optional.ofNullable(name);

// Access
opt.get();                    // "hello" (throws if empty)
opt.orElse("default");        // "hello"
empty.orElse("default");      // "default"
opt.orElseGet(() -> compute()); // Lazy default

// Transform
opt.map(String::toUpperCase); // Optional("HELLO")
opt.flatMap(this::findUser);  // Flatten nested Optional
opt.filter(s -> s.length() > 3); // Optional("hello")

// Check
opt.isPresent();              // true
opt.isEmpty();                // false (Java 11+)
opt.ifPresent(s -> System.out.println(s));

// Chaining
Optional<String> city = Optional.ofNullable(user)
    .map(User::getAddress)
    .map(Address::getCity);`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# nil is Ruby's null
value = nil

# Check for nil
value.nil?       # true
value == nil     # true

# Safe navigation operator (&.)
city = user&.address&.city

# Default with ||
name = user_name || "default"

# Default with ||= (assign if nil/false)
@name ||= "default"

# Dig method (safe nested access)
city = data.dig(:user, :address, :city)

# &. with method calls
length = text&.length  # nil if text is nil

# Presence check (Rails)
# name.present?  # false for nil, "", " "
# name.presence || "default"

# Compact (remove nils from array)
[1, nil, 2, nil, 3].compact  # [1, 2, 3]`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Optionals (core language feature)
var name: String? = nil       // Optional String
var age: Int? = 42            // Optional Int

// Forced unwrap (crashes if nil!)
let n = name!  // Don't do this unless sure

// Optional binding (if let)
if let name = name {
    print(name)
}

// Guard let (early return)
guard let name = name else {
    return
}
print(name)  // name is now non-optional

// Nil-coalescing
let result = name ?? "default"

// Optional chaining
let city = user?.address?.city

// Map / flatMap
let upper = name.map { $0.uppercased() }
let user = id.flatMap { findUser($0) }

// Implicitly unwrapped optional
var label: String!  // Assumed non-nil after init

// Multiple optional binding
if let name = name, let age = age {
    print("\\(name) is \\(age)")
}`
    }
  ]}
/>

## Puntos Clave

- **Tipos Option/Optional** -- Rust (`Option<T>`), Swift (`T?`), Zig (`?T`) y Java (`Optional<T>`) proporcionan tipos opcionales explícitos en lugar de referencias anulables. En Rust, `let x: Option<i32> = Some(42)` o `None` -- no existe `null`; usas `match`, `if let` o `unwrap_or(0)`. `var name: String? = nil` de Swift y `var value: ?i32 = null` de Zig hacen de la opcionalidad parte del tipo. `Optional<String> opt = Optional.ofNullable(name)` de Java envuelve valores anulables. Estos tipos te obligan a manejar la ausencia explícitamente. Elige Option/Optional cuando quieras aplicación en tiempo de compilación; usa referencias anulables (JavaScript, Python, C) cuando prefieras flexibilidad y verificaciones en tiempo de ejecución.

- **Operadores de coalescencia nula** -- La mayoría de los lenguajes soportan `??` para valores por defecto: `const name = user ?? "default"` en JavaScript, `$name = $user ?? "default"` en PHP, `string name = user ?? "default"` en C#, `let result = name ?? "default"` en Swift y `const result = value orelse 0` en Zig. Estos ignoran valores falsy como `""` o `0` (a diferencia de `||` en JavaScript). Go no tiene `??`; usas `if user != nil { name = user.Name } else { name = "default" }` o funciones auxiliares. Elige lenguajes con `??` cuando necesites valores por defecto seguros con frecuencia; en Go, encapsula los valores por defecto en pequeñas funciones auxiliares.

- **Lenguajes que eliminan null** -- Rust no tiene null; los valores opcionales usan `Option<T>`. Swift y Zig usan tipos opcionales como mecanismo principal: en Swift, `String?` es distinto de `String`, y desenvolver con `!` o `if let` es explícito. `?T` de Zig obliga a usar `orelse` o `if` para manejar null. Esto evita el "error del billón de dólares" de las desreferencias nulas. Python, JavaScript, Java y C permiten `null`/`None`/`undefined` en cualquier lugar, lo que lleva a `NullPointerException` o `TypeError` en tiempo de ejecución. Si eliminar errores de nulos es una prioridad, elige Rust; Swift y Zig ofrecen un manejo fuerte de opcionales con menos estrictez que Rust.

- **Navegación segura** -- El encadenamiento opcional (`?.`) en JavaScript, PHP, C#, Swift y Ruby previene errores de desreferencia nula al recorrer estructuras anidadas. Por ejemplo, `user?.address?.city` retorna `undefined` o `nil` si algún eslabón es nulo en lugar de lanzar una excepción. `arr?.[0]` y `func?.()` de JavaScript extienden esto a arrays y llamadas. Sin `?.`, escribes `user && user.address && user.address.city` (JavaScript) o verificaciones `if` anidadas. Go no tiene `?.`; verificas `if user != nil && user.Address != nil { city = user.Address.City }`. Prefiere `?.` cuando trabajes con datos profundamente anidados y de tipado flexible (APIs, configuraciones).

- **Asignación de coalescencia nula** -- JavaScript (`x ??= "default"`), PHP (`$name ??= "default"`) y C# (`name ??= "default"`) asignan un valor por defecto solo cuando la variable es null o undefined. Esto mantiene el código conciso al inicializar campos opcionales. Go y Rust requieren `if` o `match` explícitos. Usa `??=` cuando tengas configuración opcional o valores por defecto perezosos; en Go y Rust, usa patrones `Option`/`if` para mayor claridad.
