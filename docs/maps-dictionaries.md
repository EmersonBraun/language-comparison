---
sidebar_position: 14
description: "Hash maps, dictionaries, and associative arrays compared across 12 programming languages"
keywords: [maps, dictionaries, hash maps, associative arrays, key-value]
---
# Maps & Dictionaries

Maps (also known as dictionaries, hash maps, or associative arrays) store key-value pairs. Here's how different languages handle them.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Creating & Accessing Maps

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Object (string keys only)
const obj = { name: "John", age: 30 };
obj.name;         // "John"
obj["age"];       // 30

// Map (any key type)
const map = new Map();
map.set("key", "value");
map.set(42, "number key");
map.set(obj, "object key");

map.get("key");       // "value"
map.has("key");       // true
map.size;             // 3
map.delete("key");

// Initialize Map
const map2 = new Map([
    ["a", 1], ["b", 2], ["c", 3]
]);

// WeakMap (keys are garbage collected)
const weakMap = new WeakMap();
weakMap.set(obj, "data");`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Associative array
$map = [
    "name" => "John",
    "age" => 30,
];

$map["name"];         // "John"
$map["city"] = "NYC"; // Add
isset($map["name"]);  // true
unset($map["age"]);   // Delete
count($map);          // Size

// Array functions
array_key_exists("name", $map);  // true
array_keys($map);       // ["name", "city"]
array_values($map);     // ["John", "NYC"]

// Merge
$merged = array_merge($map1, $map2);

// SplObjectStorage (object keys)
$storage = new SplObjectStorage();
$storage[$obj] = "data";`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use std::collections::HashMap;

// Create
let mut map = HashMap::new();
map.insert("name", "John");
map.insert("city", "NYC");

// Access
map.get("name");        // Some("John")
map["name"];            // "John" (panics if missing)
map.contains_key("name"); // true

// Initialize with collect
let map: HashMap<&str, i32> = vec![
    ("a", 1), ("b", 2), ("c", 3),
].into_iter().collect();

// Entry API (insert if missing)
map.entry("count")
   .or_insert(0);
*map.entry("count").or_insert(0) += 1;

// Remove
map.remove("name");
map.len();  // Size

// BTreeMap (ordered)
use std::collections::BTreeMap;
let ordered = BTreeMap::new();`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Create
m := map[string]string{
    "name": "John",
    "city": "NYC",
}

// Access
name := m["name"]         // "John"
value, ok := m["missing"] // "", false

// Check existence
if val, ok := m["name"]; ok {
    fmt.Println(val)
}

// Add / Update
m["age"] = "30"

// Delete
delete(m, "age")

// Size
len(m)

// Make with capacity
m2 := make(map[string]int, 100)

// Iterate
for key, value := range m {
    fmt.Printf("%s: %s\\n", key, value)
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Dict literal
d = {"name": "John", "age": 30}

# Access
d["name"]               # "John"
d.get("name")           # "John"
d.get("missing", "default")  # "default"

# Add / Update
d["city"] = "NYC"
d.update({"city": "NYC", "zip": "10001"})

# Delete
del d["age"]
d.pop("age", None)  # Remove with default

# Check
"name" in d          # True
len(d)               # Size

# Methods
d.keys()             # dict_keys
d.values()           # dict_values
d.items()            # dict_items

# Dict comprehension
squares = {x: x**2 for x in range(5)}

# defaultdict
from collections import defaultdict
dd = defaultdict(list)
dd["key"].append(1)  # Auto-creates list

# OrderedDict (maintains insertion order)
# Note: regular dict is ordered since Python 3.7`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// HashMap
var map = std.StringHashMap(i32).init(allocator);
defer map.deinit();

// Insert
try map.put("name", 42);
try map.put("age", 30);

// Access
const value = map.get("name");  // ?i32
if (map.get("name")) |v| {
    std.debug.print("{d}\\n", .{v});
}

// Remove
_ = map.remove("name");

// Contains
const exists = map.contains("name");

// Size
const size = map.count();

// Iterate
var it = map.iterator();
while (it.next()) |entry| {
    std.debug.print("{s}: {d}\\n",
        .{entry.key_ptr.*, entry.value_ptr.*});
}

// AutoHashMap (auto-managed)
var auto_map = std.AutoHashMap(i32, []const u8).init(allocator);`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Dictionary
var dict = new Dictionary<string, string>
{
    ["name"] = "John",
    ["city"] = "NYC",
};

// Access
dict["name"];                // "John"
dict.TryGetValue("name", out var value); // true
dict.ContainsKey("name");    // true

// Add / Update
dict["age"] = "30";
dict.Add("zip", "10001");   // Throws if exists

// Remove
dict.Remove("age");
dict.Count;                  // Size

// Iterate
foreach (var (key, val) in dict)
{
    Console.WriteLine($"{key}: {val}");
}

// SortedDictionary (ordered by key)
var sorted = new SortedDictionary<string, int>();

// ConcurrentDictionary (thread-safe)
var concurrent = new ConcurrentDictionary<string, int>();`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <map>
#include <unordered_map>

// unordered_map (hash map)
std::unordered_map<std::string, int> map;
map["name"] = 42;
map["age"] = 30;

// Access
map["name"];                 // 42
map.at("name");              // 42 (throws if missing)
map.count("name");           // 1 or 0
map.find("name") != map.end(); // true

// Insert
map.insert({"city", 1});
map.emplace("zip", 2);

// Remove
map.erase("age");
map.size();

// Initialize
std::unordered_map<std::string, int> m = {
    {"a", 1}, {"b", 2}, {"c", 3}
};

// std::map (ordered, tree-based)
std::map<std::string, int> ordered;`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// No built-in hash map
// Common approaches:

// Simple struct array
#define MAX_ENTRIES 100
typedef struct {
    char key[50];
    int value;
} Entry;

Entry map[MAX_ENTRIES];
int map_size = 0;

// Add
void map_put(const char* key, int value) {
    strcpy(map[map_size].key, key);
    map[map_size].value = value;
    map_size++;
}

// Find (linear search)
int* map_get(const char* key) {
    for (int i = 0; i < map_size; i++) {
        if (strcmp(map[i].key, key) == 0)
            return &map[i].value;
    }
    return NULL;
}

// For real projects, use libraries like
// uthash, glib GHashTable, etc.`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// HashMap
Map<String, Integer> map = new HashMap<>();
map.put("name", 42);
map.put("age", 30);

// Access
map.get("name");           // 42
map.getOrDefault("missing", 0); // 0
map.containsKey("name");   // true

// Add / Update
map.put("city", 1);
map.putIfAbsent("city", 2); // Won't overwrite

// Remove
map.remove("age");
map.size();

// Initialize (Java 9+)
var m = Map.of("a", 1, "b", 2, "c", 3);

// Iterate
for (var entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
map.forEach((k, v) -> System.out.println(k + ": " + v));

// TreeMap (sorted)
Map<String, Integer> sorted = new TreeMap<>();

// ConcurrentHashMap (thread-safe)
Map<String, Integer> concurrent = new ConcurrentHashMap<>();`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Hash literal
hash = { name: "John", age: 30 }
hash2 = { "name" => "John", "age" => 30 }

# Access
hash[:name]              # "John"
hash.fetch(:name)        # "John" (raises if missing)
hash.fetch(:missing, "default")  # "default"

# Add / Update
hash[:city] = "NYC"
hash.merge!({ zip: "10001" })

# Delete
hash.delete(:age)
hash.size                # Size

# Check
hash.key?(:name)         # true
hash.value?("John")      # true

# Iterate
hash.each { |k, v| puts "#{k}: #{v}" }

# Transform
hash.map { |k, v| [k, v.to_s] }.to_h
hash.select { |k, v| v.is_a?(String) }
hash.transform_values { |v| v.to_s }

# Dig (nested access)
data = { user: { address: { city: "NYC" } } }
data.dig(:user, :address, :city)  # "NYC"`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Dictionary literal
var dict: [String: Int] = [
    "name": 42,
    "age": 30,
]

// Access (returns Optional)
dict["name"]               // Optional(42)
dict["missing"]            // nil
dict["missing", default: 0]  // 0

// Add / Update
dict["city"] = 1
dict.updateValue(2, forKey: "city")

// Remove
dict.removeValue(forKey: "age")
dict.count                 // Size

// Check
dict.keys.contains("name")  // true

// Iterate
for (key, value) in dict {
    print("\\(key): \\(value)")
}

// Transform
let mapped = dict.mapValues { $0 * 2 }
let filtered = dict.filter { $0.value > 10 }

// Grouping
let grouped = Dictionary(grouping: items) { $0.category }`
    }
  ]}
/>

## Key Takeaways

- **Built-in syntax support** -- JavaScript, Python, Ruby, Go, and Swift have dedicated map/dict literal syntax (e.g., `{"name": "John"}` in Python, `map[string]string{"name": "John"}` in Go). C has no built-in hash map and requires libraries like uthash or manual implementation. Literal syntax improves readability and reduces boilerplate. If you work heavily with key-value data (config, caches, JSON), choose a language with first-class map support; for C, plan to integrate a library early.

- **Ordered vs unordered** -- Python dicts (3.7+), PHP arrays, and JavaScript `Map` preserve insertion order. Rust's `HashMap` is unordered; use `BTreeMap` for key-ordered iteration. Go maps are unordered; Java's `HashMap` is unordered (use `LinkedHashMap` for insertion order). Order matters for reproducible output, LRU caches, or when order encodes meaning. Prefer Python, PHP, or JavaScript `Map` when order is important; Rust's `BTreeMap` when you need sorted keys.

- **Safe access patterns** -- Go's `value, ok := m["key"]` returns a boolean for existence; Swift's optional subscript (`dict["key"]`) returns `nil` for missing keys; Python's `dict.get("key", default)` and Ruby's `hash.fetch(:key, default)` avoid exceptions. Direct indexing in Rust (`map["key"]`) panics if the key is missing; C++ `map["key"]` creates an entry with a default value. Use safe access when keys may be absent (e.g., user input, optional config); direct indexing when keys are guaranteed.

- **Key and value types** -- JavaScript's plain objects support only string keys; `Map` allows any type including objects. Python dicts require hashable keys (e.g., strings, numbers, tuples). Go maps require comparable keys. Rust's `HashMap` needs keys implementing `Hash` and `Eq`. Choose `Map` in JavaScript when you need non-string keys; in Rust, consider `BTreeMap` for custom key types that don't implement `Hash` well.

- **Thread safety and concurrency** -- Java's `ConcurrentHashMap` and C#'s `ConcurrentDictionary` are built for concurrent access. Go maps are not safe for concurrent writes; use `sync.Map` or mutexes. Rust's ownership model prevents data races without a separate concurrent map type. For shared mutable state across threads, prefer Java or C#; in Go, wrap maps with mutexes or use `sync.Map`; in Rust, use channels or `Arc<Mutex<HashMap>>`.
