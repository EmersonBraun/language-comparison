---
sidebar_position: 25
description: "Gerenciamento de memória -- coleta de lixo, ownership e memória manual em 12 linguagens"
keywords: [gerenciamento de memória, coleta de lixo, ownership, RAII, smart pointers, ARC]
---

# Gerenciamento de Memória

Como uma linguagem gerencia memória é uma das decisões de design mais fundamentais. Veja como diferentes linguagens lidam com alocação, desalocação e segurança de memória.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Visão Geral do Modelo de Memória

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// GARBAGE COLLECTED (automatic)
// V8 engine uses generational GC

// Objects are heap-allocated, GC handles cleanup
let obj = { name: "John" };
obj = null;  // Eligible for garbage collection

// WeakRef (allows GC to collect)
let target = { data: "important" };
let weakRef = new WeakRef(target);
weakRef.deref();  // target or undefined

// WeakMap / WeakSet (weak references)
const cache = new WeakMap();
cache.set(obj, "cached");
// When obj is GC'd, entry is removed

// FinalizationRegistry (cleanup callback)
const registry = new FinalizationRegistry((value) => {
    console.log("Object collected:", value);
});
registry.register(obj, "my object");

// Memory leaks to watch for:
// - Forgotten timers/intervals
// - Closures holding references
// - Detached DOM nodes
// - Global variables`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// GARBAGE COLLECTED (reference counting + cycle collector)

// Objects use reference counting
$a = new stdClass();  // refcount = 1
$b = $a;              // refcount = 2
unset($a);            // refcount = 1
unset($b);            // refcount = 0 -> freed

// Circular reference detection
$a = new stdClass();
$b = new stdClass();
$a->ref = $b;
$b->ref = $a;
unset($a, $b);  // Cycle collector handles this

// Manual cleanup
unset($variable);
$variable = null;

// Memory functions
memory_get_usage();       // Current memory
memory_get_peak_usage();  // Peak memory

// PHP is request-scoped: all memory freed after request

// Generators for memory-efficient iteration
function bigRange($start, $end) {
    for ($i = $start; $i <= $end; $i++) {
        yield $i;  // Only one value in memory at a time
    }
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// OWNERSHIP SYSTEM (no GC, no manual free)
// Zero-cost abstractions, compile-time safety

// Ownership: each value has exactly one owner
let s1 = String::from("hello");
let s2 = s1;  // s1 is MOVED, no longer usable
// println!("{}", s1);  // Compile error!

// Borrowing: references without ownership
fn print_len(s: &String) {  // Immutable borrow
    println!("{}", s.len());
}

let s = String::from("hello");
print_len(&s);  // s still valid

// Mutable borrow (only one at a time)
fn push_char(s: &mut String) {
    s.push('!');
}

// Lifetimes (compiler tracks reference validity)
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

// Smart pointers
use std::rc::Rc;      // Reference counted
use std::cell::RefCell; // Interior mutability

let shared = Rc::new(42);
let clone = Rc::clone(&shared);  // Rc count: 2

// Box: heap allocation
let boxed = Box::new(42);
// Automatically freed when Box goes out of scope`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// GARBAGE COLLECTED (concurrent, tri-color mark-sweep)

// Stack vs Heap (escape analysis decides)
func example() {
    x := 42         // Likely stack-allocated
    y := new(int)   // Likely heap-allocated
    *y = 42

    // Compiler decides allocation via escape analysis
    return y  // y escapes to heap
}

// Pointers (but no pointer arithmetic)
x := 42
ptr := &x
fmt.Println(*ptr)  // 42

// Make vs New
slice := make([]int, 0, 100)  // make: slices, maps, channels
ptr := new(int)                // new: returns pointer

// Defer for cleanup (not memory, but resources)
file, _ := os.Open("data.txt")
defer file.Close()

// Finalizers (not recommended)
runtime.SetFinalizer(obj, func(o *MyType) {
    o.Cleanup()
})

// Memory stats
var m runtime.MemStats
runtime.ReadMemStats(&m)
fmt.Printf("Alloc: %d MB\\n", m.Alloc/1024/1024)

// Manual GC trigger (rarely needed)
runtime.GC()`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# GARBAGE COLLECTED (reference counting + generational GC)

import gc
import sys

# Reference counting
a = [1, 2, 3]
sys.getrefcount(a)  # Reference count

b = a    # refcount increases
del b    # refcount decreases

# Garbage collector for cycles
gc.collect()           # Manual collection
gc.get_count()         # Generation counts
gc.disable()           # Disable GC (rare)

# Weak references
import weakref
obj = SomeClass()
weak = weakref.ref(obj)
weak()  # Returns obj or None

# Context managers for resource cleanup
with open('file.txt') as f:
    data = f.read()
# File automatically closed

# __del__ (destructor, unreliable)
class Resource:
    def __del__(self):
        self.cleanup()

# Memory-efficient patterns
# Generators instead of lists
squares = (x**2 for x in range(1000000))

# __slots__ to reduce memory
class Point:
    __slots__ = ['x', 'y']
    def __init__(self, x, y):
        self.x = x
        self.y = y`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// MANUAL MEMORY (with allocator abstraction)
// No GC, no hidden allocations

// Allocator pattern
var gpa = std.heap.GeneralPurposeAllocator(.{}){};
const allocator = gpa.allocator();
defer _ = gpa.deinit();  // Detect leaks in debug

// Allocate and free
const ptr = try allocator.create(i32);
defer allocator.destroy(ptr);
ptr.* = 42;

// Allocate slice
const slice = try allocator.alloc(u8, 100);
defer allocator.free(slice);

// Arena allocator (bulk free)
var arena = std.heap.ArenaAllocator.init(std.heap.page_allocator);
defer arena.deinit();  // Frees everything at once

// Defer for cleanup (runs at scope exit)
const file = try std.fs.cwd().openFile("data.txt", .{});
defer file.close();

// No hidden heap allocations
// String concatenation, etc. require explicit allocator
const result = try std.fmt.allocPrint(allocator, "{s} {s}", .{"hello", "world"});
defer allocator.free(result);`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// GARBAGE COLLECTED (.NET GC, generational)

// Value types (stack) vs Reference types (heap)
int x = 42;           // Stack (value type)
string s = "hello";   // Heap (reference type)

// GC is generational (Gen 0, 1, 2)
GC.Collect();              // Force collection
GC.GetTotalMemory(false);  // Current memory

// IDisposable for unmanaged resources
class Connection : IDisposable
{
    public void Dispose()
    {
        // Release unmanaged resources
    }
}

// Using statement (automatic Dispose)
using var conn = new Connection();
// Disposed at end of scope

// Span<T> / Memory<T> (stack-allocated views)
Span<int> span = stackalloc int[100];

// ArrayPool (reuse arrays)
var pool = ArrayPool<byte>.Shared;
var buffer = pool.Rent(1024);
try { /* use buffer */ }
finally { pool.Return(buffer); }

// Weak references
var weak = new WeakReference<MyClass>(obj);
if (weak.TryGetTarget(out var target)) { }`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// MANUAL MEMORY (with RAII and smart pointers)

// Stack allocation (automatic)
int x = 42;  // Freed when scope exits

// Heap allocation (manual)
int* ptr = new int(42);
delete ptr;

int* arr = new int[100];
delete[] arr;

// RAII: Resource Acquisition Is Initialization
{
    std::ifstream file("data.txt");
    // Automatically closed when scope exits
}

// Smart pointers (C++11, preferred)
// unique_ptr: exclusive ownership
auto uptr = std::make_unique<int>(42);
// Automatically freed when uptr goes out of scope

// shared_ptr: shared ownership (reference counted)
auto sptr = std::make_shared<int>(42);
auto sptr2 = sptr;  // Refcount: 2

// weak_ptr: non-owning reference
std::weak_ptr<int> wptr = sptr;
if (auto locked = wptr.lock()) {
    // Use locked (shared_ptr)
}

// Move semantics
auto v1 = std::make_unique<int>(42);
auto v2 = std::move(v1);  // v1 is now null`
    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <stdlib.h>

// MANUAL MEMORY (malloc/free)

// Stack allocation
int x = 42;  // Freed when function returns

// Heap allocation
int* ptr = (int*)malloc(sizeof(int));
*ptr = 42;
free(ptr);
ptr = NULL;  // Prevent dangling pointer

// Array allocation
int* arr = (int*)calloc(100, sizeof(int));  // Zero-initialized
arr = (int*)realloc(arr, 200 * sizeof(int)); // Resize
free(arr);

// Common errors:
// - Memory leak (forget to free)
// - Double free
// - Use after free
// - Buffer overflow

// Struct allocation
typedef struct {
    char* name;
    int age;
} Person;

Person* p = malloc(sizeof(Person));
p->name = strdup("John");  // Also allocates
p->age = 30;

// Must free in reverse order
free(p->name);
free(p);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// GARBAGE COLLECTED (generational, multiple GC algorithms)

// Everything on heap (except primitives)
int x = 42;               // Stack (primitive)
String s = "hello";        // Heap (object)
Integer boxed = 42;        // Heap (autoboxed)

// GC is automatic
System.gc();  // Request GC (not guaranteed)
Runtime.getRuntime().freeMemory();
Runtime.getRuntime().totalMemory();

// try-with-resources for cleanup
try (var conn = getConnection()) {
    // Use connection
}  // Auto-closed via AutoCloseable

// Weak references
WeakReference<Object> weak = new WeakReference<>(obj);
Object ref = weak.get();  // null if GC'd

// SoftReference (cleared before OOM)
SoftReference<byte[]> cache = new SoftReference<>(data);

// JVM options
// -Xms256m  (initial heap)
// -Xmx1024m (max heap)
// -XX:+UseG1GC (GC algorithm)

// Off-heap memory (ByteBuffer)
ByteBuffer buffer = ByteBuffer.allocateDirect(1024);`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# GARBAGE COLLECTED (mark-and-sweep + generational)

# Everything is an object (heap-allocated)
x = 42
s = "hello"

# GC control
GC.start           # Force collection
GC.disable         # Disable GC
GC.enable          # Re-enable GC
GC.stat            # GC statistics

# ObjectSpace (inspect heap)
ObjectSpace.count_objects
ObjectSpace.each_object(String) { |s| puts s }

# Weak references
require 'weakref'
obj = Object.new
weak = WeakRef.new(obj)
weak.weakref_alive?  # true

# Finalizers
destructor = proc { |id| puts "Object #{id} collected" }
ObjectSpace.define_finalizer(obj, destructor)

# Memory-efficient patterns
# Symbols are interned (shared, not GC'd)
:my_symbol  # Single allocation, reused
"my_string" # New allocation each time

# Frozen strings (shared)
# frozen_string_literal: true
"hello".freeze`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// ARC (Automatic Reference Counting, compile-time)

// Value types (stack): struct, enum, tuple
struct Point { var x: Int; var y: Int }
var p1 = Point(x: 1, y: 2)
var p2 = p1  // Copy (independent)

// Reference types (heap): class
class Person {
    var name: String
    init(name: String) { self.name = name }
    deinit { print("\\(name) deallocated") }
}

var a: Person? = Person(name: "John")  // refcount: 1
var b = a   // refcount: 2
a = nil     // refcount: 1
b = nil     // refcount: 0 -> deallocated

// Weak references (breaks retain cycles)
class View {
    weak var delegate: ViewDelegate?
}

// Unowned references (non-optional, assumed valid)
class Customer {
    unowned let store: Store
}

// Retain cycle example
class A {
    var b: B?
}
class B {
    weak var a: A?  // Break cycle with weak
}

// Closure capture lists
let closure = { [weak self] in
    self?.doSomething()
}`
    }
  ]}
/>

## Principais Conclusões

- **GC vs ownership vs manual** -- A maioria das linguagens (JavaScript, Python, Go, Java, C#, Ruby, PHP) usa coleta de lixo: você aloca, e o runtime recupera quando os objetos ficam inalcançáveis. Rust usa ownership em tempo de compilação: cada valor tem um dono, e o compilador impõe regras de borrowing. C, C++ e Zig usam memória manual: você chama `malloc`/`free`, `new`/`delete` ou `allocator.alloc()`/`allocator.free()`. GC simplifica o desenvolvimento mas adiciona latência e não-determinismo; ownership (Rust) oferece segurança sem GC; gerenciamento manual oferece controle total mas exige disciplina. Escolha GC para produtividade; Rust para segurança e performance; C/C++/Zig para sistemas, embarcados ou quando precisar de alocação previsível.

- **Contagem de referências** -- Swift usa ARC (tempo de compilação): o compilador insere chamadas de retain/release, e `weak`/`unowned` quebram ciclos. C++ tem `std::shared_ptr` para ownership compartilhado: `auto sptr = std::make_shared<int>(42)`; Rust oferece `Rc<T>` (single-threaded) e `Arc<T>` (thread-safe) para ownership compartilhado. PHP e Python usam contagem de referências como parte do GC (mais detecção de ciclos). Contagem de referências fornece limpeza determinística quando a última referência é liberada, mas pode ter overhead e ciclos. Use ARC/shared_ptr/Rc quando precisar de ownership compartilhado; prefira o ownership do Rust quando ownership único for suficiente.

- **Garantias de segurança de memória** -- Rust fornece segurança de memória sem GC via ownership e borrowing: o compilador rejeita use-after-free, double-free e data races. Por exemplo, `let s2 = s1;` move `s1`, então `s1` não é mais utilizável. C e C++ não têm tais garantias; bugs como `free(ptr); use(ptr)` ou buffer overflows são comuns. O modelo manual do Zig é mais seguro que C (sem comportamento indefinido em código seguro, allocators explícitos) mas não previne use-after-free. Escolha Rust quando segurança de memória é crítica; use C/C++ apenas quando precisar de controle de baixo nível e aceitar o risco; Zig fica entre eles.

- **Padrões de limpeza de recursos** -- RAII (C++), `defer` (Go, Zig), `using` (C#) e `with` (Python) vinculam o tempo de vida do recurso ao escopo. C++: `std::ifstream file("data.txt");` -- fechado quando o escopo termina. Zig: `defer file.close();`. C não tem padrão embutido; você deve parear manualmente alocação/liberação e tratar erros. Esses padrões previnem vazamentos e simplificam caminhos de erro. Prefira linguagens com limpeza estruturada ao gerenciar arquivos, conexões ou recursos customizados.

- **Alocação heap vs stack** -- Tipos de valor (primitivos, structs em C#/Swift/Rust) geralmente vivem na stack; tipos de referência e alocações dinâmicas vão para o heap. Go usa análise de escape para decidir: `return &x` força alocação no heap. Zig requer um allocator explícito para alocação no heap: `allocator.create(i32)` e `allocator.destroy(ptr)`. O `stackalloc` e `Span<T>` do C# permitem alocação na stack para performance. Entender alocação ajuda com performance e previsibilidade. Para caminhos quentes, prefira alocação na stack quando possível; use Zig ou C quando precisar de controle explícito sobre a estratégia de alocação.
