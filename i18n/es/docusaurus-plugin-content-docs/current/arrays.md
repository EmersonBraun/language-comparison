---
sidebar_position: 11
description: "Arrays, listas, slices y operaciones con colecciones comparadas en 12 lenguajes de programación"
keywords: [arrays, listas, slices, colecciones, map, filter, reduce]
---
# Arrays

Los arrays y listas son estructuras de datos fundamentales. Así es como diferentes lenguajes manejan la creación, manipulación e iteración de arrays.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Creación e Inicialización de Arrays

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Array literal
const arr = [1, 2, 3];

// Empty array
const empty = [];

// Array constructor
const arr2 = new Array(1, 2, 3);

// Array with size
const sized = new Array(5);

// Array methods
arr.push(4);        // Add to end
arr.pop();          // Remove from end
arr.unshift(0);     // Add to beginning
arr.shift();        // Remove from beginning`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Array literal
$arr = [1, 2, 3];

// Empty array
$empty = [];

// Array function
$arr2 = array(1, 2, 3);

// Associative array
$assoc = ['name' => 'John', 'age' => 30];

// Array methods
array_push($arr, 4);    // Add to end
array_pop($arr);        // Remove from end
array_unshift($arr, 0); // Add to beginning
array_shift($arr);      // Remove from beginning`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Array (fixed size)
let arr: [i32; 3] = [1, 2, 3];

// Vector (dynamic)
let mut vec = vec![1, 2, 3];

// Empty vector
let mut empty = Vec::new();

// Vector methods
vec.push(4);        // Add to end
vec.pop();          // Remove from end
vec.insert(0, 0);   // Insert at index
vec.remove(0);      // Remove at index`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Slice (dynamic array)
arr := []int{1, 2, 3}

// Empty slice
var empty []int

// Array (fixed size)
var fixed [5]int

// Slice methods
arr = append(arr, 4)  // Add to end
arr = arr[:len(arr)-1] // Remove from end

// Built-in functions
len(arr)              // Length
cap(arr)              // Capacity`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# List literal
arr = [1, 2, 3]

# Empty list
empty = []

# List methods
arr.append(4)        # Add to end
arr.pop()            # Remove from end
arr.insert(0, 0)     # Insert at index
arr.remove(2)        # Remove value

# List comprehension
squares = [x**2 for x in range(10)]`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Array (fixed size)
var arr = [_]i32{ 1, 2, 3 };

// ArrayList (dynamic)
var list = std.ArrayList(i32).init(allocator);
defer list.deinit();

// ArrayList methods
try list.append(4);      // Add to end
_ = list.pop();          // Remove from end
try list.insert(0, 0);   // Insert at index
_ = list.orderedRemove(0); // Remove at index`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Array (fixed size)
int[] arr = {1, 2, 3};

// List (dynamic)
List<int> list = new List<int> {1, 2, 3};

// Empty list
var empty = new List<int>();

// List methods
list.Add(4);           // Add to end
list.RemoveAt(list.Count - 1); // Remove from end
list.Insert(0, 0);     // Insert at index
list.Remove(2);        // Remove value`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Array (fixed size)
int arr[3] = {1, 2, 3};

// Vector (dynamic)
std::vector<int> vec = {1, 2, 3};

// Empty vector
std::vector<int> empty;

// Vector methods
vec.push_back(4);      // Add to end
vec.pop_back();        // Remove from end
vec.insert(vec.begin(), 0); // Insert at beginning
vec.erase(vec.begin());     // Remove at beginning`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Array (fixed size)
int arr[3] = {1, 2, 3};

// Empty array
int empty[10];

// No built-in dynamic arrays
// Need to use malloc/realloc for dynamic arrays

// Array access
arr[0] = 10;
int value = arr[1];`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Array (fixed size)
int[] arr = {1, 2, 3};

// ArrayList (dynamic)
ArrayList<Integer> list = new ArrayList<>();
list.add(1);
list.add(2);
list.add(3);

// List methods
list.add(4);           // Add to end
list.remove(list.size() - 1); // Remove from end
list.add(0, 0);        // Insert at index
list.remove(0);        // Remove at index`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Array literal
arr = [1, 2, 3]

# Empty array
empty = []

# Array methods
arr << 4              # Add to end (shovel operator)
arr.push(4)           # Add to end
arr.pop               # Remove from end
arr.unshift(0)        # Add to beginning
arr.shift             # Remove from beginning

# Array operations
arr + [4, 5]          # Concatenation
arr * 2               # Repetition`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Array literal
var arr = [1, 2, 3]

// Empty array
var empty: [Int] = []

// Array methods
arr.append(4)         // Add to end
arr.removeLast()      // Remove from end
arr.insert(0, at: 0)   // Insert at index
arr.remove(at: 0)      // Remove at index

// Array operations
arr + [4, 5]          // Concatenation`
    }
  ]}
/>

## Manipulación de Arrays

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `const arr = [1, 2, 3, 4, 5];

// Map
const doubled = arr.map(x => x * 2);

// Filter
const evens = arr.filter(x => x % 2 === 0);

// Reduce
const sum = arr.reduce((acc, x) => acc + x, 0);

// Find
const found = arr.find(x => x > 3);

// Slice
const slice = arr.slice(1, 3);  // [2, 3]

// Sort
const sorted = [...arr].sort((a, b) => b - a);`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
$arr = [1, 2, 3, 4, 5];

// Map
$doubled = array_map(fn($x) => $x * 2, $arr);

// Filter
$evens = array_filter($arr, fn($x) => $x % 2 === 0);

// Reduce
$sum = array_reduce($arr, fn($acc, $x) => $acc + $x, 0);

// Find
$found = array_search(4, $arr);

// Slice
$slice = array_slice($arr, 1, 2);  // [2, 3]

// Sort
$sorted = $arr;
rsort($sorted);`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `let arr = vec![1, 2, 3, 4, 5];

// Map
let doubled: Vec<i32> = arr.iter().map(|x| x * 2).collect();

// Filter
let evens: Vec<i32> = arr.iter().filter(|x| x % 2 == 0).collect();

// Reduce (fold)
let sum: i32 = arr.iter().fold(0, |acc, x| acc + x);

// Find
let found = arr.iter().find(|x| **x > 3);

// Slice
let slice = &arr[1..3];  // [2, 3]

// Sort
let mut sorted = arr.clone();
sorted.sort_by(|a, b| b.cmp(a));`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `arr := []int{1, 2, 3, 4, 5}

// Map (manual)
doubled := make([]int, len(arr))
for i, v := range arr {
    doubled[i] = v * 2
}

// Filter (manual)
var evens []int
for _, v := range arr {
    if v%2 == 0 {
        evens = append(evens, v)
    }
}

// Sort
import "sort"
sorted := make([]int, len(arr))
copy(sorted, arr)
sort.Ints(sorted)`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `arr = [1, 2, 3, 4, 5]

# Map
doubled = list(map(lambda x: x * 2, arr))
# Or list comprehension
doubled = [x * 2 for x in arr]

# Filter
evens = list(filter(lambda x: x % 2 == 0, arr))
# Or list comprehension
evens = [x for x in arr if x % 2 == 0]

# Reduce
from functools import reduce
sum_val = reduce(lambda acc, x: acc + x, arr, 0)

# Find
found = next((x for x in arr if x > 3), None)

# Slice
slice = arr[1:3]  # [2, 3]

# Sort
sorted_arr = sorted(arr, reverse=True)`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `var arr = [_]i32{ 1, 2, 3, 4, 5 };

// Manual operations
var doubled: [5]i32 = undefined;
for (arr, 0..) |val, i| {
    doubled[i] = val * 2;
}

// Filter (manual)
var evens = std.ArrayList(i32).init(allocator);
for (arr) |val| {
    if (val % 2 == 0) {
        try evens.append(val);
    }
}

// Sort
std.mem.sort(i32, &arr, {}, comptime std.sort.asc(i32));`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `var arr = new[] {1, 2, 3, 4, 5};

// Map
var doubled = arr.Select(x => x * 2).ToArray();

// Filter
var evens = arr.Where(x => x % 2 == 0).ToArray();

// Reduce (Aggregate)
var sum = arr.Aggregate(0, (acc, x) => acc + x);

// Find
var found = arr.FirstOrDefault(x => x > 3);

// Slice
var slice = arr[1..3];  // C# 8+

// Sort
var sorted = arr.OrderByDescending(x => x).ToArray();`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `std::vector<int> vec = {1, 2, 3, 4, 5};

// Transform (map)
std::vector<int> doubled;
std::transform(vec.begin(), vec.end(), 
               std::back_inserter(doubled),
               [](int x) { return x * 2; });

// Remove if (filter)
vec.erase(std::remove_if(vec.begin(), vec.end(),
                         [](int x) { return x % 2 != 0; }),
          vec.end());

// Accumulate (reduce)
int sum = std::accumulate(vec.begin(), vec.end(), 0);

// Find
auto found = std::find_if(vec.begin(), vec.end(),
                          [](int x) { return x > 3; });

// Sort
std::sort(vec.begin(), vec.end(), std::greater<int>());`
    },
    {
      name: 'C',
      lang: 'c',
      code: `int arr[] = {1, 2, 3, 4, 5};
int size = 5;

// Manual operations
int doubled[5];
for (int i = 0; i < size; i++) {
    doubled[i] = arr[i] * 2;
}

// Filter (manual)
int evens[5];
int count = 0;
for (int i = 0; i < size; i++) {
    if (arr[i] % 2 == 0) {
        evens[count++] = arr[i];
    }
}

// Sort (qsort)
#include <stdlib.h>
int compare(const void* a, const void* b) {
    return *(int*)b - *(int*)a;
}
qsort(arr, size, sizeof(int), compare);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);

// Map
List<Integer> doubled = list.stream()
    .map(x -> x * 2)
    .collect(Collectors.toList());

// Filter
List<Integer> evens = list.stream()
    .filter(x -> x % 2 == 0)
    .collect(Collectors.toList());

// Reduce
int sum = list.stream()
    .reduce(0, (acc, x) -> acc + x);

// Find
Optional<Integer> found = list.stream()
    .filter(x -> x > 3)
    .findFirst();

// Sort
List<Integer> sorted = list.stream()
    .sorted(Collections.reverseOrder())
    .collect(Collectors.toList());`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `arr = [1, 2, 3, 4, 5]

# Map
doubled = arr.map { |x| x * 2 }

# Filter
evens = arr.select { |x| x.even? }

# Reduce
sum = arr.reduce(0) { |acc, x| acc + x }

# Find
found = arr.find { |x| x > 3 }

# Slice
slice = arr[1, 2]  # [2, 3]

# Sort
sorted = arr.sort.reverse`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `let arr = [1, 2, 3, 4, 5]

// Map
let doubled = arr.map { $0 * 2 }

// Filter
let evens = arr.filter { $0 % 2 == 0 }

// Reduce
let sum = arr.reduce(0) { $0 + $1 }

// Find
let found = arr.first { $0 > 3 }

// Slice
let slice = Array(arr[1..<3])  // [2, 3]

// Sort
let sorted = arr.sorted(by: >)`
    }
  ]}
/>

## Puntos Clave

- **Fijos vs dinámicos** -- C, Zig y Go usan arrays de tamaño fijo (e.g., `int arr[3]` en C, `var arr = [_]i32{1,2,3}` en Zig). JavaScript, Python, Ruby y PHP usan listas dinámicas por defecto. Rust ofrece ambos: `[T; N]` para tamaño fijo y `Vec<T>` para dinámico. Elige arrays fijos cuando el tamaño se conoce en tiempo de compilación y quieres asignación en el stack; usa estructuras dinámicas cuando el tamaño varía en tiempo de ejecución o necesitas redimensionar frecuentemente.

- **Slices** -- Los slices de Go (`[]int`) son el tipo dinámico principal y referencian arrays subyacentes. Rust y Zig usan referencias a slices (`&[T]`) para vistas sin copia. Python y C# usan sintaxis de slice (`arr[1:3]`, `arr[1..3]`) para subarrays. Los slices evitan copiar datos—esencial para el rendimiento al pasar subrangos. Prefiere lenguajes con soporte de slices al construir parsers, procesadores de streams o APIs que frecuentemente pasan segmentos de arrays.

- **Map, filter, reduce** -- JavaScript, Python, Ruby y Swift proporcionan métodos `map`, `filter` y `reduce` incorporados. C# usa LINQ (`Select`, `Where`, `Aggregate`). Java usa Streams. Go y C requieren bucles manuales. Elige lenguajes con primitivas funcionales de primera clase cuando hagas pipelines de transformación de datos; de lo contrario, espera código imperativo más verboso.

- **Operaciones de agregar/eliminar** -- La mayoría de lenguajes usan `push`/`pop` para operaciones al final (e.g., `arr.push(4)` en JavaScript, `vec.push(4)` en Rust). Go usa `append(arr, 4)` y slicing para eliminación. El `ArrayList` de Zig requiere asignación explícita y `try list.append(4)`. Considera la ergonomía de la API: si necesitas inserciones frecuentes en posiciones arbitrarias, el `list.insert()` de Python o el `arr.unshift` de Ruby pueden ser más simples que la reasignación manual de C.

- **Estilo funcional vs bucles manuales** -- Lenguajes como JavaScript y Python te permiten encadenar `arr.map(x => x*2).filter(x => x > 0)`. Go y C fuerzan bucles explícitos. Los Streams de Java hacen de puente con `.map().filter().collect()`. Si tu equipo prefiere código declarativo, favorece JavaScript, Python o Java; para máximo control y mínima abstracción, C o Go funciona mejor.


