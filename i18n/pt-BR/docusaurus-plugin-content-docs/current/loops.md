---
sidebar_position: 7
description: "Loops for, loops while, iteradores e loops baseados em range comparados em 12 linguagens"
keywords: [loops, loop for, loop while, iteração, iteradores, range]
---

# Loops

Loops permitem executar código repetidamente. Veja como diferentes linguagens lidam com loops for, loops while e iteração.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Loops For

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Traditional for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For...of (arrays)
const arr = [1, 2, 3];
for (const item of arr) {
    console.log(item);
}

// For...in (objects)
for (const key in obj) {
    console.log(key, obj[key]);
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Traditional for loop
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

// Foreach (arrays)
$arr = [1, 2, 3];
foreach ($arr as $item) {
    echo $item;
}

// Foreach with keys
foreach ($arr as $key => $value) {
    echo "$key: $value";
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Range-based for loop
for i in 0..5 {
    println!("{}", i);
}

// Iterating over vector
let vec = vec![1, 2, 3];
for item in vec.iter() {
    println!("{}", item);
}

// With index
for (i, item) in vec.iter().enumerate() {
    println!("{}: {}", i, item);
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Traditional for loop
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// Range-based for loop
arr := []int{1, 2, 3}
for index, value := range arr {
    fmt.Printf("%d: %d\\n", index, value)
}

// Value only
for _, value := range arr {
    fmt.Println(value)
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Range-based for loop
for i in range(5):
    print(i)

# Iterating over list
arr = [1, 2, 3]
for item in arr:
    print(item)

# With index
for i, item in enumerate(arr):
    print(f"{i}: {item}")`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Traditional for loop
var i: usize = 0;
while (i < 5) : (i += 1) {
    std.debug.print("{}\\n", .{i});
}

// For loop (Zig style)
for (arr, 0..) |item, index| {
    std.debug.print("{}: {}\\n", .{index, item});
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Traditional for loop
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

// Foreach
int[] arr = {1, 2, 3};
foreach (int item in arr)
{
    Console.WriteLine(item);
}

// With index
foreach (var (index, item) in arr.Select((value, i) => (i, value)))
{
    Console.WriteLine($"{index}: {item}");
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Traditional for loop
for (int i = 0; i < 5; i++) {
    std::cout << i << std::endl;
}

// Range-based for (C++11+)
std::vector<int> vec = {1, 2, 3};
for (int item : vec) {
    std::cout << item << std::endl;
}

// With index
for (size_t i = 0; i < vec.size(); i++) {
    std::cout << i << ": " << vec[i] << std::endl;
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Traditional for loop
for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);
}

// Iterating over array
int arr[] = {1, 2, 3};
int size = sizeof(arr) / sizeof(arr[0]);
for (int i = 0; i < size; i++) {
    printf("%d\\n", arr[i]);
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Traditional for loop
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// Enhanced for loop
int[] arr = {1, 2, 3};
for (int item : arr) {
    System.out.println(item);
}

// With index
for (int i = 0; i < arr.length; i++) {
    System.out.println(i + ": " + arr[i]);
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Range-based for loop
(0...5).each do |i|
    puts i
end

# Iterating over array
arr = [1, 2, 3]
arr.each do |item|
    puts item
end

# With index
arr.each_with_index do |item, index|
    puts "#{index}: #{item}"
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Range-based for loop
for i in 0..<5 {
    print(i)
}

// Iterating over array
let arr = [1, 2, 3]
for item in arr {
    print(item)
}

// With index
for (index, item) in arr.enumerated() {
    print("\(index): \(item)")
}`
    }
  ]}
/>

## Loops While

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// While loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// While loop
$i = 0;
while ($i < 5) {
    echo $i;
    $i++;
}

// Do-while loop
$j = 0;
do {
    echo $j;
    $j++;
} while ($j < 5);`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// While loop
let mut i = 0;
while i < 5 {
    println!("{}", i);
    i += 1;
}

// Loop with break
loop {
    if i >= 5 {
        break;
    }
    println!("{}", i);
    i += 1;
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// While loop (for with condition)
i := 0
for i < 5 {
    fmt.Println(i)
    i++
}

// Infinite loop
for {
    if i >= 5 {
        break
    }
    fmt.Println(i)
    i++
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# While loop
i = 0
while i < 5:
    print(i)
    i += 1

# Infinite loop with break
while True:
    if i >= 5:
        break
    print(i)
    i += 1`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// While loop
var i: usize = 0;
while (i < 5) {
    std.debug.print("{}\\n", .{i});
    i += 1;
}

// While with continue
while (i < 10) : (i += 1) {
    if (i % 2 == 0) continue;
    std.debug.print("{}\\n", .{i});
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// While loop
int i = 0;
while (i < 5)
{
    Console.WriteLine(i);
    i++;
}

// Do-while loop
int j = 0;
do
{
    Console.WriteLine(j);
    j++;
} while (j < 5);`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// While loop
int i = 0;
while (i < 5) {
    std::cout << i << std::endl;
    i++;
}

// Do-while loop
int j = 0;
do {
    std::cout << j << std::endl;
    j++;
} while (j < 5);`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// While loop
int i = 0;
while (i < 5) {
    printf("%d\\n", i);
    i++;
}

// Do-while loop
int j = 0;
do {
    printf("%d\\n", j);
    j++;
} while (j < 5);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// While loop
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// Do-while loop
int j = 0;
do {
    System.out.println(j);
    j++;
} while (j < 5);`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# While loop
i = 0
while i < 5
    puts i
    i += 1
end

# Until loop (opposite of while)
i = 0
until i >= 5
    puts i
    i += 1
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// While loop
var i = 0
while i < 5 {
    print(i)
    i += 1
}

// Repeat-while (do-while equivalent)
var j = 0
repeat {
    print(j)
    j += 1
} while j < 5`
    }
  ]}
/>

## Principais Conclusões

- **Estilos de loop for** -- Estilo C `for (i=0; i<n; i++)` em C/C++/Java/JavaScript; baseado em range em Python (`for i in range(5)`), Rust (`0..5`), Swift (`0..<5`); Go usa `for` para ambos.
- **Iteração baseada em range** -- `for...of` (JavaScript), `foreach` (PHP, C#), `for...in`/`enumerate` (Python), `range` (Go). Zig usa `for (arr) |item|`.
- **While e iteração** -- Go não tem a palavra-chave `while` (use `for condition`); Ruby adiciona `until`; Rust oferece `loop` com `break`; Swift usa `repeat-while` em vez de do-while.
