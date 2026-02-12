---
sidebar_position: 10
description: "Closures, lambdas, funções anônimas e funções de ordem superior em 12 linguagens"
keywords: [closures, lambdas, funções anônimas, funções de ordem superior, callbacks]
---
# Closures & Lambdas

Closures são funções que capturam variáveis do escopo ao redor. Veja como diferentes linguagens lidam com closures, lambdas e funções de ordem superior.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Closures & Funções Anônimas

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Arrow functions (closures)
const add = (a, b) => a + b;
const square = x => x * x;

// Capturing variables
function counter() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count,
    };
}
const c = counter();
c.increment();  // 1
c.increment();  // 2
c.getCount();   // 2

// IIFE (Immediately Invoked)
const result = ((x) => x * 2)(5);  // 10

// Closures in loops
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
    // Prints 0, 1, 2 (let creates new scope)
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Anonymous functions
$add = function($a, $b) { return $a + $b; };
$add(1, 2);  // 3

// Arrow functions (PHP 7.4+)
$square = fn($x) => $x * $x;

// Capturing variables (use keyword)
$multiplier = 3;
$multiply = function($x) use ($multiplier) {
    return $x * $multiplier;
};
$multiply(5);  // 15

// Capture by reference
$count = 0;
$increment = function() use (&$count) {
    $count++;
};
$increment();  // $count is now 1

// Arrow functions auto-capture by value
$factor = 2;
$double = fn($x) => $x * $factor;`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Closures
let add = |a, b| a + b;
let square = |x: i32| -> i32 { x * x };

// Capturing by reference (borrow)
let name = String::from("hello");
let greet = || println!("{}", name);  // borrows name

// Capturing by value (move)
let name = String::from("hello");
let greet = move || println!("{}", name);
// name is no longer accessible here

// Closure types
// Fn: borrows immutably
// FnMut: borrows mutably
// FnOnce: takes ownership

fn apply<F: Fn(i32) -> i32>(f: F, x: i32) -> i32 {
    f(x)
}

// Mutable closure
let mut count = 0;
let mut increment = || {
    count += 1;
    count
};`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Anonymous functions
add := func(a, b int) int { return a + b }
add(1, 2)  // 3

// Closures (capture by reference)
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

c := counter()
c()  // 1
c()  // 2

// Immediately invoked
result := func(x int) int { return x * 2 }(5)

// Closures in goroutines
for i := 0; i < 3; i++ {
    go func(n int) {
        fmt.Println(n)  // Pass i as parameter
    }(i)
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Lambda functions
add = lambda a, b: a + b
square = lambda x: x * x

# Closures
def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

c = counter()
c()  # 1
c()  # 2

# functools.partial (partial application)
from functools import partial

def multiply(a, b):
    return a * b

double = partial(multiply, 2)
double(5)  # 10

# Decorators (higher-order functions)
def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log_calls
def greet(name):
    return f"Hello, {name}"`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Zig has limited closure support
// Use function pointers and context

// Function pointer
const Op = fn (i32, i32) i32;

fn add(a: i32, b: i32) i32 {
    return a + b;
}

const op: Op = add;
const result = op(1, 2);  // 3

// Closure-like with struct
fn makeMultiplier(factor: i32) fn (i32) i32 {
    const Closure = struct {
        fn multiply(x: i32) i32 {
            // Note: can't capture runtime values
            return x * 2;
        }
    };
    return Closure.multiply;
}

// Comptime closures
fn applyComptime(
    comptime f: fn (i32) i32,
    value: i32
) i32 {
    return f(value);
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Lambda expressions
Func<int, int, int> add = (a, b) => a + b;
Func<int, int> square = x => x * x;

// Multi-statement lambda
Func<int, string> describe = x =>
{
    if (x > 0) return "positive";
    if (x < 0) return "negative";
    return "zero";
};

// Closures (capture by reference)
int count = 0;
Action increment = () => count++;
increment();  // count is 1

// Action (void return)
Action<string> greet = name =>
    Console.WriteLine($"Hello, {name}");

// Predicate
Predicate<int> isEven = x => x % 2 == 0;

// Local functions (C# 7+)
int Multiply(int a, int b) => a * b;

// Static lambda (no capture, C# 9+)
Func<int, int> doubleIt = static x => x * 2;`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Lambda expressions
auto add = [](int a, int b) { return a + b; };
auto square = [](int x) { return x * x; };

// Capture by value [=]
int factor = 3;
auto multiply = [factor](int x) { return x * factor; };

// Capture by reference [&]
int count = 0;
auto increment = [&count]() { count++; };

// Mixed capture
auto func = [=, &count](int x) {
    count++;
    return x * factor;
};

// Mutable (modify captured value copy)
auto counter = [count = 0]() mutable {
    return ++count;
};

// Generic lambda (C++14)
auto identity = [](auto x) { return x; };

// Immediately invoked
auto result = [](int x) { return x * 2; }(5);`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// C has no closures or lambdas
// Use function pointers

typedef int (*Operation)(int, int);

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

// Pass function as argument
int apply(Operation op, int a, int b) {
    return op(a, b);
}

int result = apply(add, 3, 4);       // 7
int result2 = apply(multiply, 3, 4); // 12

// Simulate closure with struct + function pointer
typedef struct {
    int factor;
    int (*multiply)(int, int);
} Multiplier;

int mult(int x, int factor) {
    return x * factor;
}
// Must pass context manually`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Lambda expressions (Java 8+)
Function<Integer, Integer> square = x -> x * x;
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;

// Multi-statement
Function<Integer, String> describe = x -> {
    if (x > 0) return "positive";
    if (x < 0) return "negative";
    return "zero";
};

// Effectively final (captures must be final)
int factor = 3;
Function<Integer, Integer> multiply = x -> x * factor;
// factor = 4;  // Error! Must be effectively final

// Method references
Function<String, Integer> len = String::length;
Consumer<String> printer = System.out::println;

// Functional interfaces
Predicate<Integer> isEven = x -> x % 2 == 0;
Supplier<String> greeting = () -> "Hello";
Consumer<String> logger = msg -> System.out.println(msg);
Runnable task = () -> System.out.println("Running");`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Blocks
[1, 2, 3].each { |n| puts n }
[1, 2, 3].each do |n|
  puts n
end

# Procs
square = Proc.new { |x| x * x }
square.call(5)  # 25
square.(5)      # 25
square[5]       # 25

# Lambdas
add = ->(a, b) { a + b }
add.call(1, 2)  # 3

# Lambda vs Proc differences
# Lambda checks arity, Proc doesn't
# Lambda return exits lambda, Proc return exits method

# Closures (capture by reference)
def counter
  count = 0
  increment = -> { count += 1; count }
  get_count = -> { count }
  [increment, get_count]
end

inc, get = counter
inc.call  # 1
inc.call  # 2
get.call  # 2

# Method objects
method_obj = method(:puts)
method_obj.call("hello")`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Closures
let add = { (a: Int, b: Int) -> Int in a + b }
let square: (Int) -> Int = { $0 * $0 }

// Trailing closure syntax
let sorted = numbers.sorted { $0 < $1 }

// Capturing values
func makeCounter() -> () -> Int {
    var count = 0
    return {
        count += 1
        return count
    }
}

let counter = makeCounter()
counter()  // 1
counter()  // 2

// Escaping closures
func fetchData(completion: @escaping (String) -> Void) {
    DispatchQueue.global().async {
        completion("data")
    }
}

// Autoclosure
func assert(_ condition: @autoclosure () -> Bool) {
    if !condition() { print("Failed") }
}
assert(2 + 2 == 4)  // Expression auto-wrapped`
    }
  ]}
/>

## Funções de Ordem Superior

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Map, filter, reduce
const nums = [1, 2, 3, 4, 5];

nums.map(x => x * 2);          // [2, 4, 6, 8, 10]
nums.filter(x => x % 2 === 0); // [2, 4]
nums.reduce((acc, x) => acc + x, 0); // 15

// Function composition
const compose = (f, g) => x => f(g(x));
const double = x => x * 2;
const addOne = x => x + 1;
const doubleThenAdd = compose(addOne, double);
doubleThenAdd(3);  // 7

// Currying
const curry = fn => a => b => fn(a, b);
const add = curry((a, b) => a + b);
const add5 = add(5);
add5(3);  // 8`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
$nums = [1, 2, 3, 4, 5];

array_map(fn($x) => $x * 2, $nums);
array_filter($nums, fn($x) => $x % 2 === 0);
array_reduce($nums, fn($acc, $x) => $acc + $x, 0);

// Function composition
function compose(callable $f, callable $g): Closure {
    return fn($x) => $f($g($x));
}

// Currying
function curry(callable $fn): Closure {
    return fn($a) => fn($b) => $fn($a, $b);
}

$add = curry(fn($a, $b) => $a + $b);
$add5 = $add(5);
$add5(3);  // 8`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `let nums = vec![1, 2, 3, 4, 5];

// Iterator methods
let doubled: Vec<i32> = nums.iter()
    .map(|x| x * 2).collect();
let evens: Vec<&i32> = nums.iter()
    .filter(|x| *x % 2 == 0).collect();
let sum: i32 = nums.iter()
    .fold(0, |acc, x| acc + x);

// Chaining
let result: Vec<i32> = nums.iter()
    .filter(|x| *x % 2 == 0)
    .map(|x| x * 3)
    .collect();

// Accepting closures as parameters
fn apply_twice<F: Fn(i32) -> i32>(f: F, x: i32) -> i32 {
    f(f(x))
}

let double = |x| x * 2;
apply_twice(double, 3);  // 12`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Go doesn't have built-in map/filter/reduce
// Manual higher-order functions

func Map(slice []int, f func(int) int) []int {
    result := make([]int, len(slice))
    for i, v := range slice {
        result[i] = f(v)
    }
    return result
}

func Filter(slice []int, f func(int) bool) []int {
    var result []int
    for _, v := range slice {
        if f(v) {
            result = append(result, v)
        }
    }
    return result
}

nums := []int{1, 2, 3, 4, 5}
doubled := Map(nums, func(x int) int { return x * 2 })
evens := Filter(nums, func(x int) bool { return x%2 == 0 })`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `nums = [1, 2, 3, 4, 5]

# Built-in higher-order functions
list(map(lambda x: x * 2, nums))
list(filter(lambda x: x % 2 == 0, nums))

from functools import reduce
reduce(lambda acc, x: acc + x, nums, 0)

# Prefer comprehensions
[x * 2 for x in nums]
[x for x in nums if x % 2 == 0]

# Function as argument
def apply_twice(f, x):
    return f(f(x))

apply_twice(lambda x: x * 2, 3)  # 12

# Composition with functools
from functools import reduce
def compose(*funcs):
    return reduce(lambda f, g: lambda x: f(g(x)), funcs)`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Higher-order with function pointers
fn map(arr: []const i32, f: fn(i32) i32, out: []i32) void {
    for (arr, 0..) |val, i| {
        out[i] = f(val);
    }
}

fn double(x: i32) i32 {
    return x * 2;
}

var input = [_]i32{ 1, 2, 3, 4, 5 };
var output: [5]i32 = undefined;
map(&input, double, &output);

// Inline for + comptime
inline for (.{ add, subtract, multiply }) |op| {
    // Apply each operation
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `var nums = new[] { 1, 2, 3, 4, 5 };

// LINQ methods
nums.Select(x => x * 2);
nums.Where(x => x % 2 == 0);
nums.Aggregate(0, (acc, x) => acc + x);

// Chaining
var result = nums
    .Where(x => x % 2 == 0)
    .Select(x => x * 3)
    .ToArray();

// Function as parameter
int ApplyTwice(Func<int, int> f, int x) => f(f(x));
ApplyTwice(x => x * 2, 3);  // 12`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <algorithm>
#include <numeric>

std::vector<int> nums = {1, 2, 3, 4, 5};

// transform (map)
std::vector<int> doubled;
std::transform(nums.begin(), nums.end(),
    std::back_inserter(doubled),
    [](int x) { return x * 2; });

// accumulate (reduce)
int sum = std::accumulate(nums.begin(), nums.end(), 0);

// Ranges (C++20)
#include <ranges>
auto result = nums
    | std::views::filter([](int x) { return x % 2 == 0; })
    | std::views::transform([](int x) { return x * 3; });

// Function as parameter
template<typename F>
int applyTwice(F f, int x) {
    return f(f(x));
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Function pointers as arguments
void map(int* in, int* out, int n, int (*f)(int)) {
    for (int i = 0; i < n; i++) {
        out[i] = f(in[i]);
    }
}

int double_val(int x) { return x * 2; }

int arr[] = {1, 2, 3, 4, 5};
int result[5];
map(arr, result, 5, double_val);

// qsort with comparator
int compare_desc(const void* a, const void* b) {
    return *(int*)b - *(int*)a;
}
qsort(arr, 5, sizeof(int), compare_desc);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `var nums = List.of(1, 2, 3, 4, 5);

// Stream API
nums.stream().map(x -> x * 2).toList();
nums.stream().filter(x -> x % 2 == 0).toList();
nums.stream().reduce(0, Integer::sum);

// Chaining
var result = nums.stream()
    .filter(x -> x % 2 == 0)
    .map(x -> x * 3)
    .toList();

// Function composition
Function<Integer, Integer> doubleIt = x -> x * 2;
Function<Integer, Integer> addOne = x -> x + 1;
var doubleThenAdd = doubleIt.andThen(addOne);
doubleThenAdd.apply(3);  // 7`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `nums = [1, 2, 3, 4, 5]

nums.map { |x| x * 2 }
nums.select { |x| x.even? }
nums.reduce(0) { |acc, x| acc + x }

# Chaining
nums.select(&:even?).map { |x| x * 3 }

# Symbol to proc
nums.map(&:to_s)  # ["1", "2", "3", "4", "5"]

# Yielding to blocks
def apply_twice(x)
  yield(yield(x))
end

apply_twice(3) { |x| x * 2 }  # 12`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `let nums = [1, 2, 3, 4, 5]

nums.map { $0 * 2 }
nums.filter { $0 % 2 == 0 }
nums.reduce(0) { $0 + $1 }
nums.reduce(0, +)  // Shorthand

// Chaining
let result = nums
    .filter { $0 % 2 == 0 }
    .map { $0 * 3 }

// Function as parameter
func applyTwice(_ f: (Int) -> Int, _ x: Int) -> Int {
    f(f(x))
}

applyTwice({ $0 * 2 }, 3)  // 12`
    }
  ]}
/>

## Principais Conclusões

- **Semântica de captura** -- C++ usa `[=]` para captura por valor e `[&]` para por referência; PHP usa `use ($x)` para por valor e `use (&$x)` para por referência. Rust distingue `Fn` (empréstimo imutável), `FnMut` (empréstimo mutável) e `FnOnce` (toma posse). Por exemplo, `let mut count = 0; let inc = || { count += 1; count };` em Rust requer `FnMut` porque a closure muta `count`. Escolha captura explícita quando precisar controlar tempo de vida e mutabilidade; os traits de Rust impõem isso em tempo de compilação e previnem movimentos acidentais ou conflitos de empréstimo.

- **Tipos de closure em Rust** -- Os traits `Fn`, `FnMut` e `FnOnce` de Rust codificam a semântica de captura em tempo de compilação. Uma closure que apenas lê variáveis capturadas implementa `Fn`; uma que as muta implementa `FnMut`; uma que as consome (ex: `move`) implementa `FnOnce`. Ao aceitar closures como parâmetros, use `impl Fn(i32) -> i32` ou `F: Fn(i32) -> i32` para restringir o que o chamador pode passar. Isso importa porque `FnOnce` só pode ser chamada uma vez, então não pode ser usada em um loop. Se você escreve closures que capturam estado, entenda qual trait sua closure implementa para evitar erros de ownership.

- **Limitações de lambda em C** -- C não tem closures ou lambdas; apenas ponteiros de função (`int (*op)(int, int)`). Para simular "closures", você deve passar uma struct de contexto manualmente: `typedef struct { int factor; } Context; int apply(int x, Context* ctx) { return x * ctx->factor; }`. Isso é verboso e propenso a erros. Para código com muitos callbacks em C, considere passar um contexto `void*` junto com o ponteiro de função; para novos projetos, prefira linguagens com closures nativas (Go, Rust, C++) se precisar de semântica de captura.

- **Effectively final em Java** -- Lambdas em Java só podem capturar variáveis que são final ou effectively final (nunca reatribuídas). Por exemplo, `int factor = 3; Function<Integer, Integer> mul = x -> x * factor;` funciona, mas `factor = 4;` depois seria um erro de compilação. Isso previne mutação de estado capturado e simplifica o modelo, mas limita closures que precisam manter estado mutável. Para capturas imutáveis ou sem estado, lambdas de Java são suficientes; para estado mutável, use um array de um elemento ou `AtomicInteger` como alternativa, ou prefira uma linguagem com captura completa de closures (ex: JavaScript, C#).

- **Funções de ordem superior e built-ins** -- JavaScript, Python, Ruby, C# e Swift têm `map`, `filter`, `reduce` (ou equivalentes) built-in. Go não tem; você deve implementá-los ou usar uma biblioteca. C usa `qsort` com um ponteiro de função comparador. Rust usa métodos de iterador (`.map()`, `.filter()`, `.fold()`). Zig usa ponteiros de função e loops manuais. Se você depende muito de pipelines funcionais, escolha uma linguagem com APIs ricas de iterador/coleção; caso contrário, espere código imperativo mais verboso.

- **Quando escolher qual** -- Para código web e orientado a eventos, closures de JavaScript são idiomáticas. Para sistemas com segurança e performance, closures de Rust com `Fn`/`FnMut`/`FnOnce` equilibram expressividade e controle. Para Java empresarial, lambdas e streams funcionam bem dentro da restrição "effectively final". Para C/C++/Zig, ponteiros de função são a norma; use closures apenas quando tiver C++ ou Rust disponível. Combine o suporte a closures com seu caso de uso: pesado em callbacks vs. predominantemente procedural vs. pipelines funcionais.
