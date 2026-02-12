---
sidebar_position: 16
description: "Generics, templates, and type constraints compared across 12 programming languages"
keywords: [generics, templates, type parameters, constraints, type-safe]
---

# Generics & Templates

Generics allow you to write type-safe, reusable code. Here's how different languages handle generic programming.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Basic Generics

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// JavaScript has no built-in generics
// Use TypeScript for generic support

// TypeScript generics:
// function identity<T>(value: T): T {
//     return value;
// }
// identity<string>("hello");
// identity<number>(42);

// Generic interface (TypeScript)
// interface Container<T> {
//     value: T;
//     getValue(): T;
// }

// Generic class (TypeScript)
// class Box<T> {
//     constructor(private value: T) {}
//     get(): T { return this.value; }
// }
// const box = new Box<string>("hello");`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// PHP has limited generics (PHPStan/Psalm annotations)

// Template annotation (PHPStan)
/**
 * @template T
 * @param T $value
 * @return T
 */
function identity($value) {
    return $value;
}

/**
 * @template T
 */
class Box {
    /** @var T */
    private $value;

    /** @param T $value */
    public function __construct($value) {
        $this->value = $value;
    }

    /** @return T */
    public function get() {
        return $this->value;
    }
}

// Usage analyzed by static analysis tools
$box = new Box("hello");  // Box<string>`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Generic function
fn identity<T>(value: T) -> T {
    value
}

let s = identity("hello");
let n = identity(42);

// Generic struct
struct Box<T> {
    value: T,
}

impl<T> Box<T> {
    fn new(value: T) -> Self {
        Box { value }
    }

    fn get(&self) -> &T {
        &self.value
    }
}

let box_str = Box::new("hello");
let box_num = Box::new(42);

// Multiple type parameters
struct Pair<A, B> {
    first: A,
    second: B,
}

let pair = Pair { first: "key", second: 42 };`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Generic function (Go 1.18+)
func Identity[T any](value T) T {
    return value
}

s := Identity("hello")
n := Identity(42)

// Generic struct
type Box[T any] struct {
    Value T
}

func NewBox[T any](value T) Box[T] {
    return Box[T]{Value: value}
}

box := NewBox("hello")

// Multiple type parameters
type Pair[A any, B any] struct {
    First  A
    Second B
}

pair := Pair[string, int]{First: "key", Second: 42}

// Generic interface
type Container[T any] interface {
    Get() T
    Set(value T)
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Type hints with generics (Python 3.12+)
def identity[T](value: T) -> T:
    return value

# Older syntax (Python 3.9+)
from typing import TypeVar, Generic

T = TypeVar('T')

def identity(value: T) -> T:
    return value

# Generic class
class Box(Generic[T]):
    def __init__(self, value: T) -> None:
        self.value = value

    def get(self) -> T:
        return self.value

box: Box[str] = Box("hello")
box_num: Box[int] = Box(42)

# Multiple type parameters
from typing import Tuple
K = TypeVar('K')
V = TypeVar('V')

class Pair(Generic[K, V]):
    def __init__(self, key: K, value: V):
        self.key = key
        self.value = value`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Comptime generics
fn identity(comptime T: type, value: T) T {
    return value;
}

const s = identity([]const u8, "hello");
const n = identity(i32, 42);

// Generic struct (function returning type)
fn Box(comptime T: type) type {
    return struct {
        value: T,

        const Self = @This();

        pub fn init(value: T) Self {
            return .{ .value = value };
        }

        pub fn get(self: Self) T {
            return self.value;
        }
    };
}

const StringBox = Box([]const u8);
const box = StringBox.init("hello");

// Generic with multiple types
fn Pair(comptime A: type, comptime B: type) type {
    return struct { first: A, second: B };
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Generic method
T Identity<T>(T value) => value;

string s = Identity("hello");
int n = Identity(42);

// Generic class
class Box<T>
{
    public T Value { get; }
    public Box(T value) => Value = value;
    public T Get() => Value;
}

var box = new Box<string>("hello");

// Multiple type parameters
class Pair<TKey, TValue>
{
    public TKey Key { get; }
    public TValue Value { get; }
    public Pair(TKey key, TValue value)
    {
        Key = key;
        Value = value;
    }
}

// Generic interface
interface IContainer<T>
{
    T Get();
    void Set(T value);
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Function template
template<typename T>
T identity(T value) {
    return value;
}

auto s = identity(std::string("hello"));
auto n = identity(42);

// Class template
template<typename T>
class Box {
    T value_;
public:
    Box(T value) : value_(value) {}
    T get() const { return value_; }
};

Box<std::string> box("hello");
Box<int> boxNum(42);

// Multiple type parameters
template<typename A, typename B>
struct Pair {
    A first;
    B second;
};

Pair<std::string, int> pair{"key", 42};

// Variadic templates
template<typename... Args>
void print(Args... args) {
    ((std::cout << args << " "), ...);
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// C has no generics
// Use void pointers for generic-like behavior

// Generic swap using void*
void swap(void* a, void* b, size_t size) {
    void* temp = malloc(size);
    memcpy(temp, a, size);
    memcpy(a, b, size);
    memcpy(b, temp, size);
    free(temp);
}

int a = 1, b = 2;
swap(&a, &b, sizeof(int));

// _Generic (C11 type-generic expressions)
#define print_val(x) _Generic((x), \\
    int: printf("%d\\n", x),          \\
    double: printf("%f\\n", x),       \\
    char*: printf("%s\\n", x)         \\
)

print_val(42);       // prints int
print_val(3.14);     // prints double
print_val("hello");  // prints string`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Generic method
<T> T identity(T value) {
    return value;
}

String s = identity("hello");
Integer n = identity(42);

// Generic class
class Box<T> {
    private T value;

    public Box(T value) { this.value = value; }
    public T get() { return value; }
}

Box<String> box = new Box<>("hello");

// Multiple type parameters
class Pair<K, V> {
    private K key;
    private V value;
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }
}

// Wildcards
void printList(List<?> list) { }
void addNumbers(List<? super Integer> list) { }
void readNumbers(List<? extends Number> list) { }`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Ruby is dynamically typed, no generics needed
# Duck typing serves a similar purpose

# Generic-like behavior via duck typing
class Box
  attr_reader :value

  def initialize(value)
    @value = value
  end

  def get
    @value
  end
end

box_str = Box.new("hello")
box_num = Box.new(42)

# RBS type signatures (for type checking)
# class Box[T]
#   attr_reader value: T
#   def initialize: (T) -> void
#   def get: () -> T
# end

# Sorbet (static type checker)
# sig { type_parameters(:T).params(value: T).returns(T) }
# def identity(value); value; end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Generic function
func identity<T>(_ value: T) -> T {
    return value
}

let s = identity("hello")
let n = identity(42)

// Generic struct
struct Box<T> {
    let value: T

    func get() -> T {
        return value
    }
}

let box = Box(value: "hello")

// Multiple type parameters
struct Pair<A, B> {
    let first: A
    let second: B
}

let pair = Pair(first: "key", second: 42)

// Generic enum
enum Result<Success, Failure: Error> {
    case success(Success)
    case failure(Failure)
}`
    }
  ]}
/>

## Type Constraints

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// TypeScript constraints
// function max<T extends number>(a: T, b: T): T {
//     return a > b ? a : b;
// }

// Interface constraint
// interface HasLength { length: number; }
// function logLength<T extends HasLength>(item: T): void {
//     console.log(item.length);
// }
// logLength("hello");     // OK
// logLength([1, 2, 3]);   // OK
// logLength(42);           // Error

// keyof constraint
// function getProperty<T, K extends keyof T>(
//     obj: T, key: K
// ): T[K] {
//     return obj[key];
// }`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// PHPStan template bounds

/**
 * @template T of Comparable
 * @param T $a
 * @param T $b
 * @return T
 */
function max_val($a, $b) {
    return $a->compareTo($b) > 0 ? $a : $b;
}

/**
 * @template T of \\Countable
 * @param T $item
 * @return int
 */
function getCount($item): int {
    return count($item);
}

// Runtime: use interfaces for constraints
interface Printable {
    public function toString(): string;
}

function printItem(Printable $item): void {
    echo $item->toString();
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Trait bounds
fn max<T: PartialOrd>(a: T, b: T) -> T {
    if a > b { a } else { b }
}

// Multiple bounds
fn print_debug<T: std::fmt::Debug + Clone>(value: T) {
    println!("{:?}", value);
}

// Where clause (cleaner for complex bounds)
fn process<T>(value: T) -> String
where
    T: std::fmt::Display + Clone + Send,
{
    format!("{}", value)
}

// Associated type bounds
fn sum<I>(iter: I) -> i32
where
    I: Iterator<Item = i32>,
{
    iter.fold(0, |acc, x| acc + x)
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Type constraints with interfaces
type Number interface {
    ~int | ~int64 | ~float64
}

func Max[T Number](a, b T) T {
    if a > b {
        return a
    }
    return b
}

// comparable constraint
func Contains[T comparable](slice []T, item T) bool {
    for _, v := range slice {
        if v == item {
            return true
        }
    }
    return false
}

// Custom constraint interface
type Stringer interface {
    String() string
}

func PrintAll[T Stringer](items []T) {
    for _, item := range items {
        fmt.Println(item.String())
    }
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `from typing import TypeVar, Protocol

# Bound type variable
from typing import Comparable
T = TypeVar('T', bound=int)

def max_val(a: T, b: T) -> T:
    return a if a > b else b

# Protocol (structural typing)
class HasLength(Protocol):
    def __len__(self) -> int: ...

def log_length(item: HasLength) -> None:
    print(len(item))

log_length("hello")    # OK
log_length([1, 2, 3])  # OK

# Constrained TypeVar
T = TypeVar('T', int, float, str)

def add(a: T, b: T) -> T:
    return a + b`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Comptime constraints via compile errors
fn max(comptime T: type, a: T, b: T) T {
    // Check for ordering support at comptime
    switch (@typeInfo(T)) {
        .Int, .Float => {},
        else => @compileError("Type must be numeric"),
    }
    return if (a > b) a else b;
}

// Interface-like via function pointers
fn Sortable(comptime T: type) type {
    return struct {
        lessThan: fn (T, T) bool,
    };
}

// Trait-like pattern
fn print(value: anytype) void {
    // Works with any type that supports formatting
    std.debug.print("{any}\\n", .{value});
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Interface constraint
T Max<T>(T a, T b) where T : IComparable<T>
{
    return a.CompareTo(b) > 0 ? a : b;
}

// Multiple constraints
void Process<T>(T value)
    where T : class, IDisposable, new()
{
    using (value) { /* work */ }
}

// Constraint types:
// where T : struct        // Value type
// where T : class         // Reference type
// where T : new()         // Has parameterless ctor
// where T : BaseClass     // Derives from class
// where T : IInterface    // Implements interface
// where T : notnull       // Non-nullable (C# 8+)

// Generic math (C# 11+)
T Sum<T>(T[] values) where T : INumber<T>
{
    T sum = T.Zero;
    foreach (var v in values) sum += v;
    return sum;
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Concepts (C++20)
template<typename T>
concept Comparable = requires(T a, T b) {
    { a < b } -> std::convertible_to<bool>;
    { a > b } -> std::convertible_to<bool>;
};

template<Comparable T>
T max_val(T a, T b) {
    return a > b ? a : b;
}

// requires clause
template<typename T>
    requires std::is_arithmetic_v<T>
T add(T a, T b) {
    return a + b;
}

// SFINAE (pre-C++20)
template<typename T,
    typename = std::enable_if_t<std::is_integral_v<T>>>
T square(T x) {
    return x * x;
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// C has no type constraints
// Use preprocessor macros for type-generic code

#define MAX(a, b) ((a) > (b) ? (a) : (b))

int max_int = MAX(3, 5);
double max_double = MAX(3.14, 2.71);

// Type-generic math (C11)
#include <tgmath.h>

// sqrt works for float, double, long double
double d = sqrt(16.0);
float f = sqrt(16.0f);

// _Static_assert for compile-time checks
#define ASSERT_NUMERIC(x) _Static_assert( \\
    _Generic((x),                          \\
        int: 1, float: 1, double: 1,      \\
        default: 0                         \\
    ), "Must be numeric")`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Upper bound
<T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}

// Multiple bounds
<T extends Comparable<T> & Serializable>
void process(T value) { }

// Bounded wildcards
// Upper bound: read-only
void printAll(List<? extends Number> list) {
    for (Number n : list) System.out.println(n);
}

// Lower bound: write-only
void addIntegers(List<? super Integer> list) {
    list.add(42);
}

// Type erasure: generics are compile-time only
// At runtime, Box<String> and Box<Integer>
// are both just Box`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Ruby uses duck typing instead of constraints
# No compile-time type checking

# Convention: check capabilities at runtime
def process(item)
  unless item.respond_to?(:length)
    raise ArgumentError, "must have length"
  end
  item.length
end

# RBS type signatures
# interface _Comparable
#   def <=>: (untyped) -> Integer
# end
#
# def max: [T < _Comparable] (T, T) -> T

# Sorbet generics with bounds
# sig do
#   type_parameters(:T)
#     .params(a: T, b: T)
#     .returns(T)
#     .where(T: Comparable)
# end
# def max(a, b); a > b ? a : b; end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Protocol constraint
func max<T: Comparable>(_ a: T, _ b: T) -> T {
    return a > b ? a : b
}

// Multiple constraints
func process<T: Hashable & Codable>(_ value: T) {
    // T must be both Hashable and Codable
}

// Where clause
func allEqual<T>(_ a: T, _ b: T) -> Bool
    where T: Equatable {
    return a == b
}

// Associated type constraints
protocol Container {
    associatedtype Item: Equatable
    func contains(_ item: Item) -> Bool
}

// Protocol with Self constraint
protocol Copyable {
    func copy() -> Self
}`
    }
  ]}
/>

## Key Takeaways

- **Type erasure vs monomorphization** -- Java and TypeScript erase generics at runtime (one shared representation); C++, Rust, Swift, and Go generate specialized code per type (monomorphization) for zero-cost abstraction.
- **Constraint systems vary in expressiveness** -- Rust's traits and C++ concepts offer rich bounds; Go's type sets (`~int | ~float64`) and Swift's protocol constraints are simpler; Java's `extends` and wildcards are more limited.
- **Languages without generics use workarounds** -- C uses `void*` and macros; JavaScript/Ruby rely on duck typing; PHP uses docblock annotations for static analysis; Zig uses comptime type parameters.
- **Comptime generics (Zig) are unique** -- Zig passes types as compile-time values, enabling zero-cost generics without a separate type parameter syntax; types are first-class at compile time.
- **Python and PHP have late generics** -- Python 3.12+ and PHPStan/Psalm add generic syntax; type checking is static only—runtime behavior is unchanged—unlike compiled languages.
