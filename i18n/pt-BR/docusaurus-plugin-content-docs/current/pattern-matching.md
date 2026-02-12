---
sidebar_position: 8
description: "Pattern matching, destructuring e expressões switch comparados em 12 linguagens de programação"
keywords: [pattern matching, destructuring, switch, match, guards]
---
# Pattern Matching

Pattern matching permite verificar valores contra padrões e desestruturar dados. Veja como diferentes linguagens lidam com pattern matching.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Pattern Matching Básico

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Switch statement
switch (value) {
    case 1:
        console.log("one");
        break;
    case 2:
    case 3:
        console.log("two or three");
        break;
    default:
        console.log("other");
}

// Destructuring (object)
const { name, age } = person;
const { name: userName, ...rest } = person;

// Destructuring (array)
const [first, second, ...remaining] = arr;
const [a, , c] = [1, 2, 3];  // skip second

// Nested destructuring
const { address: { city } } = person;

// Default values
const { name = "unknown" } = person;`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Match expression (PHP 8.0+)
$result = match($status) {
    'active' => 'User is active',
    'inactive', 'banned' => 'User is not active',
    default => 'Unknown status',
};

// Match with no argument (like if/else)
$result = match(true) {
    $age < 18 => 'minor',
    $age < 65 => 'adult',
    default => 'senior',
};

// Array destructuring
[$first, $second] = [1, 2];
[, , $third] = [1, 2, 3];  // skip first two

// List destructuring
list($a, $b, $c) = [1, 2, 3];

// Associative destructuring
['name' => $name, 'age' => $age] = $person;`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Match expression (exhaustive)
match value {
    1 => println!("one"),
    2 | 3 => println!("two or three"),
    4..=10 => println!("four to ten"),
    _ => println!("other"),
}

// Match with return value
let msg = match value {
    0 => "zero",
    1 => "one",
    _ => "many",
};

// Destructuring structs
struct Point { x: i32, y: i32 }
let Point { x, y } = point;

// Destructuring enums
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

match shape {
    Shape::Circle(r) => println!("Circle: {}", r),
    Shape::Rectangle(w, h) => println!("Rect: {}x{}", w, h),
}

// Guards
match value {
    x if x < 0 => println!("negative"),
    x if x > 0 => println!("positive"),
    _ => println!("zero"),
}

// Nested patterns
match point {
    Point { x: 0, y: 0 } => println!("origin"),
    Point { x, y: 0 } => println!("on x-axis at {}", x),
    Point { x: 0, y } => println!("on y-axis at {}", y),
    Point { x, y } => println!("({}, {})", x, y),
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Switch (no break needed)
switch value {
case 1:
    fmt.Println("one")
case 2, 3:
    fmt.Println("two or three")
default:
    fmt.Println("other")
}

// Switch with no condition
switch {
case age < 18:
    fmt.Println("minor")
case age < 65:
    fmt.Println("adult")
default:
    fmt.Println("senior")
}

// Type switch
switch v := value.(type) {
case int:
    fmt.Println("integer:", v)
case string:
    fmt.Println("string:", v)
case []int:
    fmt.Println("int slice:", v)
default:
    fmt.Println("unknown type")
}

// Multiple return value "destructuring"
value, err := someFunction()
_, err := someFunction()  // ignore first`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Match statement (Python 3.10+)
match command:
    case "quit":
        quit_game()
    case "go" | "move":
        move_player()
    case _:
        print("unknown command")

# Structural pattern matching
match point:
    case (0, 0):
        print("origin")
    case (x, 0):
        print(f"on x-axis at {x}")
    case (0, y):
        print(f"on y-axis at {y}")
    case (x, y):
        print(f"({x}, {y})")

# Class patterns
match shape:
    case Circle(radius=r):
        print(f"Circle: {r}")
    case Rectangle(width=w, height=h):
        print(f"Rect: {w}x{h}")

# Guards
match value:
    case x if x < 0:
        print("negative")
    case x if x > 0:
        print("positive")
    case _:
        print("zero")

# Destructuring
a, b, *rest = [1, 2, 3, 4, 5]  # a=1, b=2, rest=[3,4,5]
(x, y) = (10, 20)`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Switch expression
const result = switch (value) {
    1 => "one",
    2, 3 => "two or three",
    4...10 => "four to ten",
    else => "other",
};

// Switch on tagged unions (enums)
const Shape = union(enum) {
    circle: f64,
    rectangle: struct { w: f64, h: f64 },
};

switch (shape) {
    .circle => |r| std.debug.print("Circle: {d}\\n", .{r}),
    .rectangle => |rect| std.debug.print(
        "Rect: {d}x{d}\\n", .{rect.w, rect.h}
    ),
}

// Switch with captures
switch (optional_value) {
    null => std.debug.print("null\\n", .{}),
    else => |val| std.debug.print("{d}\\n", .{val}),
}

// Inline for with switch
inline for (items) |item| {
    switch (item) {
        .a => doA(),
        .b => doB(),
    }
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Switch expression (C# 8+)
var result = value switch
{
    1 => "one",
    2 or 3 => "two or three",
    >= 4 and <= 10 => "four to ten",
    _ => "other",
};

// Pattern matching with is
if (obj is string s && s.Length > 0) { }
if (value is > 0 and < 100) { }
if (value is not null) { }

// Type patterns
var msg = shape switch
{
    Circle c => $"Circle: {c.Radius}",
    Rectangle r => $"Rect: {r.Width}x{r.Height}",
    _ => "Unknown shape",
};

// Property patterns
var discount = customer switch
{
    { Age: < 18 } => 0.5,
    { IsMember: true, Age: >= 65 } => 0.3,
    { IsMember: true } => 0.1,
    _ => 0.0,
};

// Tuple patterns
var quadrant = (x, y) switch
{
    ( > 0, > 0) => "Q1",
    ( < 0, > 0) => "Q2",
    ( < 0, < 0) => "Q3",
    ( > 0, < 0) => "Q4",
    _ => "On axis",
};

// Deconstruction
var (name, age) = person;`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Switch statement
switch (value) {
    case 1:
        std::cout << "one" << std::endl;
        break;
    case 2:
    case 3:
        std::cout << "two or three" << std::endl;
        break;
    default:
        std::cout << "other" << std::endl;
}

// Structured bindings (C++17)
auto [x, y] = std::make_pair(1, 2);

struct Point { int x; int y; };
auto [px, py] = Point{10, 20};

// std::variant with std::visit (C++17)
using Shape = std::variant<Circle, Rectangle>;

std::visit([](auto&& shape) {
    using T = std::decay_t<decltype(shape)>;
    if constexpr (std::is_same_v<T, Circle>) {
        std::cout << "Circle: " << shape.radius;
    } else if constexpr (std::is_same_v<T, Rectangle>) {
        std::cout << "Rect: " << shape.w << "x" << shape.h;
    }
}, shape);`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Switch statement
switch (value) {
    case 1:
        printf("one\\n");
        break;
    case 2:
    case 3:
        printf("two or three\\n");
        break;
    default:
        printf("other\\n");
        break;
}

// No destructuring in C
// Manual extraction
struct Point { int x; int y; };
struct Point p = {10, 20};
int x = p.x;
int y = p.y;

// Tagged unions (manual pattern matching)
enum ShapeType { CIRCLE, RECTANGLE };
struct Shape {
    enum ShapeType type;
    union {
        double radius;
        struct { double w, h; } rect;
    };
};

switch (shape.type) {
    case CIRCLE:
        printf("Circle: %f\\n", shape.radius);
        break;
    case RECTANGLE:
        printf("Rect: %fx%f\\n", shape.rect.w, shape.rect.h);
        break;
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Switch expression (Java 14+)
String result = switch (value) {
    case 1 -> "one";
    case 2, 3 -> "two or three";
    default -> "other";
};

// Pattern matching instanceof (Java 16+)
if (obj instanceof String s) {
    System.out.println(s.length());
}

// Switch with patterns (Java 21+)
String msg = switch (shape) {
    case Circle c -> "Circle: " + c.radius();
    case Rectangle r -> "Rect: " + r.width() + "x" + r.height();
    default -> "Unknown";
};

// Guarded patterns (Java 21+)
String desc = switch (value) {
    case Integer i when i < 0 -> "negative";
    case Integer i when i > 0 -> "positive";
    case Integer i -> "zero";
    default -> "not an integer";
};

// Records (Java 16+) with deconstruction
record Point(int x, int y) {}
if (obj instanceof Point(var x, var y)) {
    System.out.println(x + ", " + y);
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Case/when (pattern matching)
case value
when 1
  puts "one"
when 2, 3
  puts "two or three"
when 4..10
  puts "four to ten"
else
  puts "other"
end

# Pattern matching (Ruby 3.0+)
case [1, 2, 3]
in [Integer => a, Integer => b, *rest]
  puts "a=#{a}, b=#{b}, rest=#{rest}"
end

# Hash patterns
case person
in { name: String => name, age: (18..) => age }
  puts "Adult: #{name}, #{age}"
in { name: String => name, age: age }
  puts "Minor: #{name}, #{age}"
end

# Find pattern
case items
in [*, { name: /Ruby/ } => item, *]
  puts "Found Ruby item: #{item}"
end

# Destructuring
a, b, *rest = [1, 2, 3, 4, 5]
first, = [1, 2, 3]  # first = 1`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Switch (exhaustive)
switch value {
case 1:
    print("one")
case 2, 3:
    print("two or three")
case 4...10:
    print("four to ten")
default:
    print("other")
}

// Enum pattern matching
switch shape {
case .circle(let radius):
    print("Circle: \\(radius)")
case .rectangle(let w, let h):
    print("Rect: \\(w)x\\(h)")
}

// Tuple matching
switch (x, y) {
case (0, 0):
    print("origin")
case (let x, 0):
    print("on x-axis at \\(x)")
case (0, let y):
    print("on y-axis at \\(y)")
case let (x, y):
    print("(\\(x), \\(y))")
}

// Where clause (guard)
switch value {
case let x where x < 0:
    print("negative")
case let x where x > 0:
    print("positive")
default:
    print("zero")
}

// if case (pattern in condition)
if case .circle(let r) = shape, r > 5 {
    print("large circle")
}`
    }
  ]}
/>

## Principais Conclusões

- **Matching exaustivo** -- Rust e Swift exigem que `match`/`switch` cubram todos os casos, prevenindo bugs de ramificações esquecidas; outras linguagens usam `default`/`else` como catch-all.
- **Suporte a destructuring** -- Rust, Swift, Python e C# oferecem destructuring rico de structs, tuplas e enums; C e Go têm destructuring mínimo ou inexistente.
- **Cláusulas guard** -- Rust (`if`), Swift (`where`), Python (`if`), Java 21+ (`when`) e C# suportam guards de padrão para lógica condicional dentro de braços de match.
- **Tipos de dados algébricos** -- Enums de Rust e Swift com valores associados permitem pattern matching em variantes que carregam dados; tagged unions de Zig oferecem capacidades semelhantes.
