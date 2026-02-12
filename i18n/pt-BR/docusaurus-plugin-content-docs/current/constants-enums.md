---
sidebar_position: 5
description: "Constantes, enumerações e padrões de imutabilidade em 12 linguagens de programação"
keywords: [constantes, enums, enumerações, imutabilidade, const, final]
---

# Constantes e Enums

Constantes e enumerações ajudam a criar código legível e manutenível. Aqui está como diferentes linguagens lidam com elas.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Constantes

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// const (block-scoped, not deeply immutable)
const PI = 3.14159;
const MAX_SIZE = 100;
const API_URL = "https://api.example.com";

// const objects can be mutated!
const config = { debug: true };
config.debug = false;  // OK!

// Object.freeze (shallow immutable)
const frozen = Object.freeze({ a: 1, b: 2 });
// frozen.a = 3;  // Silently fails (or error in strict)

// Deep freeze (recursive)
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.values(obj).forEach(v => {
        if (typeof v === 'object') deepFreeze(v);
    });
    return obj;
}

// Enum pattern (no native enums in JS)
const Status = Object.freeze({
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    BANNED: 'banned',
});`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// define() (global)
define('PI', 3.14159);
define('MAX_SIZE', 100);

// const (class/namespace scope)
const API_URL = "https://api.example.com";

// Class constants
class Config {
    const DEBUG = true;
    const VERSION = '1.0.0';

    // Typed constants (PHP 8.3+)
    const string APP_NAME = 'MyApp';
}

echo Config::DEBUG;  // true

// Enum (PHP 8.1+)
enum Status: string {
    case Active = 'active';
    case Inactive = 'inactive';
    case Banned = 'banned';
}

$s = Status::Active;
$s->value;  // 'active'
$s->name;   // 'Active'

// Enum with methods
enum Color {
    case Red;
    case Green;
    case Blue;

    public function hex(): string {
        return match($this) {
            Color::Red => '#FF0000',
            Color::Green => '#00FF00',
            Color::Blue => '#0000FF',
        };
    }
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Constants (compile-time, must have type)
const PI: f64 = 3.14159;
const MAX_SIZE: usize = 100;

// Static (fixed memory address)
static API_URL: &str = "https://api.example.com";
static mut COUNTER: i32 = 0;  // Unsafe to access

// Enum (algebraic data types)
enum Status {
    Active,
    Inactive,
    Banned,
}

// Enum with values
enum Color {
    Red,
    Green,
    Blue,
    Custom(u8, u8, u8),  // Tuple variant
}

// Enum with methods
impl Color {
    fn hex(&self) -> String {
        match self {
            Color::Red => "#FF0000".into(),
            Color::Green => "#00FF00".into(),
            Color::Blue => "#0000FF".into(),
            Color::Custom(r, g, b) =>
                format!("#{:02X}{:02X}{:02X}", r, g, b),
        }
    }
}

// Enum with data (tagged unions)
enum Shape {
    Circle { radius: f64 },
    Rectangle { width: f64, height: f64 },
    Triangle { base: f64, height: f64 },
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Constants
const PI = 3.14159
const MaxSize = 100
const ApiURL = "https://api.example.com"

// Multiple constants
const (
    StatusActive   = "active"
    StatusInactive = "inactive"
    StatusBanned   = "banned"
)

// iota (auto-incrementing)
const (
    Red   = iota  // 0
    Green         // 1
    Blue          // 2
)

// Typed constants
type Status int
const (
    Active   Status = iota  // 0
    Inactive                // 1
    Banned                  // 2
)

// Bit flags with iota
const (
    ReadPerm   = 1 << iota  // 1
    WritePerm               // 2
    ExecPerm                // 4
)

// String method for enum-like
func (s Status) String() string {
    names := [...]string{"active", "inactive", "banned"}
    if s < Active || s > Banned { return "unknown" }
    return names[s]
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Constants (convention: UPPER_CASE)
PI = 3.14159
MAX_SIZE = 100
API_URL = "https://api.example.com"
# Python has no true constants (can be reassigned)

# typing.Final (type hint, not enforced at runtime)
from typing import Final
PI: Final = 3.14159

# Enum
from enum import Enum, auto

class Status(Enum):
    ACTIVE = 'active'
    INACTIVE = 'inactive'
    BANNED = 'banned'

s = Status.ACTIVE
s.value  # 'active'
s.name   # 'ACTIVE'

# IntEnum (auto values)
class Color(Enum):
    RED = auto()
    GREEN = auto()
    BLUE = auto()

# Enum with methods
class Direction(Enum):
    NORTH = 'N'
    SOUTH = 'S'
    EAST = 'E'
    WEST = 'W'

    def opposite(self):
        opposites = {
            Direction.NORTH: Direction.SOUTH,
            Direction.SOUTH: Direction.NORTH,
            Direction.EAST: Direction.WEST,
            Direction.WEST: Direction.EAST,
        }
        return opposites[self]`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Comptime constants
const PI: f64 = 3.14159;
const MAX_SIZE: usize = 100;
const API_URL = "https://api.example.com";

// Enums
const Status = enum {
    active,
    inactive,
    banned,
};

const s = Status.active;

// Enum with explicit values
const Color = enum(u8) {
    red = 0,
    green = 1,
    blue = 2,
};

// Tagged unions (enum + data)
const Shape = union(enum) {
    circle: f64,
    rectangle: struct { width: f64, height: f64 },
    triangle: struct { base: f64, height: f64 },
};

const shape = Shape{ .circle = 5.0 };

switch (shape) {
    .circle => |r| std.debug.print("Circle: {d}\\n", .{r}),
    .rectangle => |rect| std.debug.print(
        "Rect: {d}x{d}\\n", .{rect.width, rect.height}),
    .triangle => |tri| std.debug.print(
        "Tri: {d}x{d}\\n", .{tri.base, tri.height}),
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Constants
const double PI = 3.14159;
const int MaxSize = 100;
const string ApiUrl = "https://api.example.com";

// Static readonly (runtime constants)
static readonly DateTime StartDate = DateTime.Now;

// Enum
enum Status
{
    Active,
    Inactive,
    Banned
}

Status s = Status.Active;

// Enum with values
enum Color : byte
{
    Red = 0,
    Green = 1,
    Blue = 2
}

// Flags enum
[Flags]
enum Permissions
{
    None = 0,
    Read = 1,
    Write = 2,
    Execute = 4,
    All = Read | Write | Execute
}

var perms = Permissions.Read | Permissions.Write;
bool canRead = perms.HasFlag(Permissions.Read);`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Constants
const double PI = 3.14159;
constexpr int MAX_SIZE = 100;  // Compile-time
const std::string API_URL = "https://api.example.com";

// constexpr (evaluated at compile time)
constexpr int square(int x) { return x * x; }
constexpr int val = square(5);  // 25 at compile time

// Enum (old-style)
enum Color { Red, Green, Blue };

// Enum class (scoped, type-safe, C++11)
enum class Status {
    Active,
    Inactive,
    Banned
};

Status s = Status::Active;

// Enum with underlying type
enum class Color : uint8_t {
    Red = 0,
    Green = 1,
    Blue = 2
};

// constexpr if (C++17)
template<typename T>
auto process(T val) {
    if constexpr (std::is_integral_v<T>) {
        return val * 2;
    } else {
        return val;
    }
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Constants
#define PI 3.14159
#define MAX_SIZE 100
#define API_URL "https://api.example.com"

// const (read-only, not true compile-time constant)
const double pi = 3.14159;
const int max_size = 100;

// Enum
enum Status {
    ACTIVE,    // 0
    INACTIVE,  // 1
    BANNED     // 2
};

enum Status s = ACTIVE;

// Enum with explicit values
enum Color {
    RED = 0,
    GREEN = 1,
    BLUE = 2
};

// Bit flags
enum Permissions {
    PERM_NONE    = 0,
    PERM_READ    = 1,
    PERM_WRITE   = 2,
    PERM_EXECUTE = 4,
    PERM_ALL     = 7
};

int perms = PERM_READ | PERM_WRITE;
if (perms & PERM_READ) { /* can read */ }`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Constants
static final double PI = 3.14159;
static final int MAX_SIZE = 100;
static final String API_URL = "https://api.example.com";

// Enum
enum Status {
    ACTIVE, INACTIVE, BANNED
}

Status s = Status.ACTIVE;
s.name();     // "ACTIVE"
s.ordinal();  // 0

// Enum with fields and methods
enum Color {
    RED("#FF0000"),
    GREEN("#00FF00"),
    BLUE("#0000FF");

    private final String hex;

    Color(String hex) { this.hex = hex; }
    public String getHex() { return hex; }
}

// Enum with abstract methods
enum Shape {
    CIRCLE {
        double area(double dim) { return Math.PI * dim * dim; }
    },
    SQUARE {
        double area(double dim) { return dim * dim; }
    };

    abstract double area(double dim);
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Constants (uppercase)
PI = 3.14159
MAX_SIZE = 100
API_URL = "https://api.example.com"

# Warning on reassignment
PI = 3.14  # warning: already initialized constant

# Freeze to prevent modification
API_URL = "https://api.example.com".freeze

# Module constants
module Config
  DEBUG = true
  VERSION = '1.0.0'
end
Config::VERSION  # '1.0.0'

# No built-in enum, use symbols or constants
module Status
  ACTIVE = :active
  INACTIVE = :inactive
  BANNED = :banned

  ALL = [ACTIVE, INACTIVE, BANNED].freeze
end

# Or use symbols directly
status = :active

# With Comparable-like behavior
class Color
  COLORS = %i[red green blue].freeze

  def self.valid?(color)
    COLORS.include?(color)
  end
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Constants
let pi = 3.14159
let maxSize = 100
let apiUrl = "https://api.example.com"

// Type-level constants
struct Config {
    static let debug = true
    static let version = "1.0.0"
}

// Enum
enum Status {
    case active
    case inactive
    case banned
}

var s = Status.active

// Enum with raw values
enum Color: String {
    case red = "#FF0000"
    case green = "#00FF00"
    case blue = "#0000FF"
}

Color.red.rawValue  // "#FF0000"

// Enum with associated values
enum Shape {
    case circle(radius: Double)
    case rectangle(width: Double, height: Double)
    case triangle(base: Double, height: Double)
}

// Enum with methods
enum Direction {
    case north, south, east, west

    var opposite: Direction {
        switch self {
        case .north: return .south
        case .south: return .north
        case .east:  return .west
        case .west:  return .east
        }
    }
}`
    }
  ]}
/>

## Principais Conclusões

- **Imutabilidade verdadeira** -- `const` em Rust, `const` em Zig e `constexpr` em C++ fornecem constantes em tempo de compilação que não podem ser alteradas. `const` em JavaScript apenas previne reatribuição: `const obj = {}; obj.x = 1` é permitido. Python não tem constantes verdadeiras; `PI = 3.14` pode ser reatribuído. Use `Object.freeze()` em JavaScript ou `typing.Final` em Python para imutabilidade baseada em convenção, mas estas não são aplicadas tão rigidamente quanto em Rust ou Zig. Para máxima segurança, prefira linguagens com constantes aplicadas pelo compilador.

- **Tipos algébricos de dados** -- Enums de Rust e Swift podem carregar valores associados, habilitando tipos soma. Por exemplo, `enum Shape { Circle(f64), Rectangle(f64, f64) }` em Rust permite que cada variante contenha dados. Tagged unions do Zig e `enum Shape { case circle(radius: Double) }` do Swift funcionam de forma similar. Isso habilita pattern matching exaustivo e evita estados inválidos. Ao modelar máquinas de estado ou variantes com payloads, prefira Rust, Swift ou Zig em vez de enums inteiros simples.

- **Capacidades de enum por linguagem** -- Enums de Java e C# suportam métodos e campos: `enum Color { RED("#FF0000"); private String hex; Color(String h) { hex = h; } }`. Go usa `iota` para enums inteiros: `const (Red = iota; Green; Blue)`. Enums de C são inteiros simples sem segurança de tipo; eles poluem o namespace global. PHP 8.1+ e o módulo `enum` do Python fornecem enums de primeira classe. Quando você precisa de enums com comportamento ou segurança de tipo, prefira Java, C#, Rust, Swift ou Python; para flags simples, C ou `iota` do Go podem ser suficientes.

- **Definindo constantes** -- C usa `#define` para constantes do pré-processador; C++ adiciona `const` e `constexpr`. Java e C# usam `static final`; Go usa `const`; Rust usa `const` (tempo de compilação) ou `static` (tempo de execução, instância única). Python e Ruby dependem de convenções de nomenclatura (UPPER_CASE). Para avaliação em tempo de compilação e inlining, prefira `constexpr` (C++) ou `const` (Rust, Zig); para constantes de tempo de execução computadas uma vez, use `static` em Rust ou `static readonly` em C#.
