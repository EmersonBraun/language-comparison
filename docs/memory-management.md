---
sidebar_position: 25
description: "Memory management -- garbage collection, ownership, and manual memory across 12 languages"
keywords: [memory management, garbage collection, ownership, RAII, smart pointers, ARC]
---

# Memory Management

How a language manages memory is one of the most fundamental design decisions. Here's how different languages handle memory allocation, deallocation, and safety.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Memory Model Overview

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

## Key Takeaways

- **GC vs ownership vs manual** -- Most languages (JavaScript, Python, Go, Java, C#, Ruby, PHP) use garbage collection: you allocate, and the runtime reclaims when objects are unreachable. Rust uses compile-time ownership: each value has one owner, and the compiler enforces borrowing rules. C, C++, and Zig use manual memory: you call `malloc`/`free`, `new`/`delete`, or `allocator.alloc()`/`allocator.free()`. GC simplifies development but adds latency and non-determinism; ownership (Rust) gives safety without GC; manual management gives full control but demands discipline. Choose GC for productivity; Rust for safety and performance; C/C++/Zig for systems, embedded, or when you need predictable allocation.

- **Reference counting** -- Swift uses ARC (compile-time): the compiler inserts retain/release calls, and `weak`/`unowned` break cycles. C++ has `std::shared_ptr` for shared ownership: `auto sptr = std::make_shared<int>(42)`; Rust offers `Rc<T>` (single-threaded) and `Arc<T>` (thread-safe) for shared ownership. PHP and Python use refcounting as part of GC (plus cycle detection). Reference counting provides deterministic cleanup when the last reference is released but can incur overhead and cycles. Use ARC/share_ptr/Rc when you need shared ownership; prefer Rust's ownership when single ownership is sufficient.

- **Memory safety guarantees** -- Rust provides memory safety without GC via ownership and borrowing: the compiler rejects use-after-free, double-free, and data races. For example, `let s2 = s1;` moves `s1`, so `s1` is not usable afterward. C and C++ have no such guarantees; bugs like `free(ptr); use(ptr)` or buffer overflows are common. Zig's manual model is safer than C (no undefined behavior in safe code, explicit allocators) but does not prevent use-after-free. Choose Rust when memory safety is critical; use C/C++ only when you need low-level control and accept the risk; Zig sits between them.

- **Resource cleanup patterns** -- RAII (C++), `defer` (Go, Zig), `using` (C#), and `with` (Python) tie resource lifetime to scope. C++: `std::ifstream file("data.txt");` -- closed when scope exits. Zig: `defer file.close();`. C has no built-in pattern; you must manually pair allocate/free and handle errors. These patterns prevent leaks and simplify error paths. Prefer languages with structured cleanup when managing files, connections, or custom resources.

- **Heap vs stack allocation** -- Value types (primitives, structs in C#/Swift/Rust) often live on the stack; reference types and dynamic allocations go on the heap. Go uses escape analysis to decide: `return &x` forces heap allocation. Zig requires an explicit allocator for heap allocation: `allocator.create(i32)` and `allocator.destroy(ptr)`. C#'s `stackalloc` and `Span<T>` allow stack allocation for performance. Understanding allocation helps with performance and predictability. For hot paths, prefer stack allocation when possible; use Zig or C when you need explicit control over allocation strategy.
