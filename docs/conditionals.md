---
sidebar_position: 6
description: "If/else, switch, match, and ternary operators compared across 12 programming languages"
keywords: [conditionals, if else, switch, match, ternary, control flow]
---

# Conditionals

Conditional statements allow your program to make decisions. Here's how if/else and switch statements work across different languages.

import LanguageComparison from '@site/src/components/LanguageComparison';

## If/Else Statements

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Basic if/else
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";

// Nested ternary
const result = x > 0 ? (y > 0 ? "Both positive" : "X positive") : "X not positive";

// Chained ternary
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

// Else if
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Basic if/else
if ($age >= 18) {
    echo "Adult";
} else {
    echo "Minor";
}

// Ternary operator
$status = $age >= 18 ? "Adult" : "Minor";

// Nested ternary
$result = $x > 0 ? ($y > 0 ? "Both positive" : "X positive") : "X not positive";

// Chained ternary (PHP 7.4+ null coalescing)
$grade = $score >= 90 ? "A" : ($score >= 80 ? "B" : "C");

// Else if
if ($score >= 90) {
    $grade = "A";
} elseif ($score >= 80) {
    $grade = "B";
} else {
    $grade = "C";
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Basic if/else
if age >= 18 {
    println!("Adult");
} else {
    println!("Minor");
}

// Ternary operator (if as expression)
let status = if age >= 18 { "Adult" } else { "Minor" };

// Nested ternary
let result = if x > 0 { 
    if y > 0 { "Both positive" } else { "X positive" }
} else { 
    "X not positive" 
};

// Else if
let grade = if score >= 90 {
    "A"
} else if score >= 80 {
    "B"
} else {
    "C"
};`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Basic if/else
if age >= 18 {
    fmt.Println("Adult")
} else {
    fmt.Println("Minor")
}

// Ternary operator - Go doesn't have traditional ternary
// Use if/else expression pattern instead
var status string
if age >= 18 {
    status = "Adult"
} else {
    status = "Minor"
}

// If with initialization
if status := "Adult"; age >= 18 {
    fmt.Println(status)
}

// Else if
if score >= 90 {
    grade = "A"
} else if score >= 80 {
    grade = "B"
} else {
    grade = "C"
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Basic if/else
if age >= 18:
    print("Adult")
else:
    print("Minor")

# Ternary operator (Python 2.5+)
status = "Adult" if age >= 18 else "Minor"

# Nested ternary
result = "Both positive" if x > 0 and y > 0 else ("X positive" if x > 0 else "X not positive")

# Chained ternary
grade = "A" if score >= 90 else ("B" if score >= 80 else "C")

# Elif
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Basic if/else
if (age >= 18) {
    std.debug.print("Adult\\n", .{});
} else {
    std.debug.print("Minor\\n", .{});
}

// Ternary operator (if as expression)
const status = if (age >= 18) "Adult" else "Minor";

// Nested ternary
const result = if (x > 0) 
    (if (y > 0) "Both positive" else "X positive")
else 
    "X not positive";

// Else if
const grade = if (score >= 90) "A" 
    else if (score >= 80) "B" 
    else "C";`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Basic if/else
if (age >= 18)
{
    Console.WriteLine("Adult");
}
else
{
    Console.WriteLine("Minor");
}

// Ternary operator
string status = age >= 18 ? "Adult" : "Minor";

// Nested ternary
string result = x > 0 ? (y > 0 ? "Both positive" : "X positive") : "X not positive";

// Chained ternary
string grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

// Else if
if (score >= 90)
{
    grade = "A";
}
else if (score >= 80)
{
    grade = "B";
}
else
{
    grade = "C";
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Basic if/else
if (age >= 18) {
    std::cout << "Adult" << std::endl;
} else {
    std::cout << "Minor" << std::endl;
}

// Ternary operator
std::string status = age >= 18 ? "Adult" : "Minor";

// Nested ternary
std::string result = x > 0 ? (y > 0 ? "Both positive" : "X positive") : "X not positive";

// Chained ternary
std::string grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

// Else if
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Basic if/else
if (age >= 18) {
    printf("Adult\\n");
} else {
    printf("Minor\\n");
}

// Ternary operator
const char* status = age >= 18 ? "Adult" : "Minor";

// Nested ternary
const char* result = x > 0 ? (y > 0 ? "Both positive" : "X positive") : "X not positive";

// Chained ternary
char grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';

// Else if
if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else {
    grade = 'C';
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Basic if/else
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

// Ternary operator
String status = age >= 18 ? "Adult" : "Minor";

// Nested ternary
String result = x > 0 ? (y > 0 ? "Both positive" : "X positive") : "X not positive";

// Chained ternary
String grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";

// Else if
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Basic if/else
if age >= 18
    puts "Adult"
else
    puts "Minor"
end

# Ternary operator
status = age >= 18 ? "Adult" : "Minor"

# Nested ternary
result = x > 0 ? (y > 0 ? "Both positive" : "X positive") : "X not positive"

# Chained ternary
grade = score >= 90 ? "A" : score >= 80 ? "B" : "C"

# Elsif
if score >= 90
    grade = "A"
elsif score >= 80
    grade = "B"
else
    grade = "C"
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Basic if/else
if age >= 18 {
    print("Adult")
} else {
    print("Minor")
}

// Ternary operator
let status = age >= 18 ? "Adult" : "Minor"

// Nested ternary
let result = x > 0 ? (y > 0 ? "Both positive" : "X positive") : "X not positive"

// Chained ternary
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C"

// Else if
if score >= 90 {
    grade = "A"
} else if score >= 80 {
    grade = "B"
} else {
    grade = "C"
}`
    }
  ]}
/>

## Switch/Case Statements

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Switch statement
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}

// Switch expression (no break needed)
switch (day) {
    case 1: return "Monday";
    case 2: return "Tuesday";
    default: return "Other";
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Switch statement
switch ($day) {
    case 1:
        echo "Monday";
        break;
    case 2:
        echo "Tuesday";
        break;
    default:
        echo "Other day";
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Match expression (Rust's switch)
match day {
    1 => println!("Monday"),
    2 => println!("Tuesday"),
    _ => println!("Other day"),
}

// Match as expression
let day_name = match day {
    1 => "Monday",
    2 => "Tuesday",
    _ => "Other day",
};`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Switch statement
switch day {
case 1:
    fmt.Println("Monday")
case 2:
    fmt.Println("Tuesday")
default:
    fmt.Println("Other day")
}

// Switch without condition
switch {
case day == 1:
    fmt.Println("Monday")
case day == 2:
    fmt.Println("Tuesday")
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Python 3.10+ match/case
match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case _:
        print("Other day")

# Traditional approach (dict)
days = {
    1: "Monday",
    2: "Tuesday"
}
print(days.get(day, "Other day"))`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Switch expression
const day_name = switch (day) {
    1 => "Monday",
    2 => "Tuesday",
    else => "Other day",
};`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Switch statement
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("Other day");
        break;
}

// Switch expression (C# 8+)
string dayName = day switch
{
    1 => "Monday",
    2 => "Tuesday",
    _ => "Other day"
};`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Switch statement
switch (day) {
    case 1:
        std::cout << "Monday" << std::endl;
        break;
    case 2:
        std::cout << "Tuesday" << std::endl;
        break;
    default:
        std::cout << "Other day" << std::endl;
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Switch statement
switch (day) {
    case 1:
        printf("Monday\\n");
        break;
    case 2:
        printf("Tuesday\\n");
        break;
    default:
        printf("Other day\\n");
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Switch statement
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Other day");
}

// Switch expression (Java 14+)
String dayName = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    default -> "Other day";
};`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Case statement
case day
when 1
    puts "Monday"
when 2
    puts "Tuesday"
else
    puts "Other day"
end

# Case as expression
day_name = case day
when 1 then "Monday"
when 2 then "Tuesday"
else "Other day"
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Switch statement
switch day {
case 1:
    print("Monday")
case 2:
    print("Tuesday")
default:
    print("Other day")
}

// Switch with ranges
switch score {
case 90...100:
    grade = "A"
case 80..<90:
    grade = "B"
default:
    grade = "C"
}`
    }
  ]}
/>

## Key Takeaways

- **If/else syntax** -- C-family languages (C, C++, Java, JavaScript, C#) use braces and `else if`; Python uses `elif` with colon-and-indent; Ruby uses `elsif` and `end`; PHP uses `elseif` (one word). The Python-style `if cond:` without braces reduces noise but requires consistent indentation. If you prefer explicit block delimiters and come from C/Java, choose a brace-based language; if you value conciseness and readability, Python or Ruby may feel cleaner.

- **Switch vs match** -- C-style `switch` (C, C++, Java, JavaScript, PHP) requires `break` to prevent fallthrough; forgetting it is a common bug. Rust's `match` is expression-based—it returns a value and has no fallthrough, so `let x = match n { 1 => "one", _ => "other" };` is idiomatic. Python 3.10+ and C# 8+ add `match`/`switch` expressions with pattern matching. For multi-branch logic, prefer Rust or Swift `match` when exhaustiveness matters; use C-style `switch` when you need explicit fallthrough or work in legacy codebases.

- **Ternary operators** -- Most languages use `cond ? a : b` (C, C++, Java, JavaScript, C#, Swift, PHP). Go deliberately omits `?:` and uses `if cond { a } else { b }` for assignment, favoring clarity over brevity. Python uses `a if cond else b` (condition in the middle). Rust and Zig use `if` as expressions: `let x = if cond { a } else { b };`. If you want compact inline conditionals, use ternary; if you prefer Go-style explicitness, avoid nested ternaries and favor simple if/else blocks.

- **Expression vs statement** -- In Rust, Zig, and Ruby, `if` can be an expression that yields a value; C, Java, and Go treat `if` as a statement only. JavaScript uses ternary for expressions. This affects how you assign conditionally: Rust allows `let grade = if score >= 90 { "A" } else { "B" };` without a separate variable and multiple assignments. Choose expression-based languages when you want to avoid mutable state and write more declarative code.

- **When to choose which** -- For systems programming or maximum explicitness, Go's if/else and lack of ternary reduce surprises. For functional-style, expression-oriented code, Rust and Zig shine. For rapid prototyping and readability, Python's `elif` and `a if cond else b` are approachable. For enterprise or web backends, C#, Java, and PHP offer familiar C-style conditionals with good tooling.
