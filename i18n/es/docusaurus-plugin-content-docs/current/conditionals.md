---
sidebar_position: 6
description: "If/else, switch, match y operadores ternarios comparados en 12 lenguajes de programación"
keywords: [condicionales, if else, switch, match, ternario, flujo de control]
---

# Condicionales

Las sentencias condicionales permiten que tu programa tome decisiones. Así es como funcionan if/else y switch en diferentes lenguajes.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Sentencias If/Else

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

## Sentencias Switch/Case

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

## Puntos Clave

- **Sintaxis if/else** -- Los lenguajes de la familia C (C, C++, Java, JavaScript, C#) usan llaves y `else if`; Python usa `elif` con dos puntos e indentación; Ruby usa `elsif` y `end`; PHP usa `elseif` (una sola palabra). El estilo de Python `if cond:` sin llaves reduce el ruido pero requiere indentación consistente. Si prefieres delimitadores de bloque explícitos y vienes de C/Java, elige un lenguaje basado en llaves; si valoras la concisión y legibilidad, Python o Ruby pueden resultar más limpios.

- **Switch vs match** -- El `switch` estilo C (C, C++, Java, JavaScript, PHP) requiere `break` para evitar el fallthrough; olvidarlo es un error común. El `match` de Rust está basado en expresiones—devuelve un valor y no tiene fallthrough, por lo que `let x = match n { 1 => "one", _ => "other" };` es idiomático. Python 3.10+ y C# 8+ agregan expresiones `match`/`switch` con coincidencia de patrones. Para lógica con múltiples ramas, prefiere el `match` de Rust o Swift cuando la exhaustividad importa; usa `switch` estilo C cuando necesites fallthrough explícito o trabajes en bases de código heredadas.

- **Operadores ternarios** -- La mayoría de los lenguajes usan `cond ? a : b` (C, C++, Java, JavaScript, C#, Swift, PHP). Go omite deliberadamente `?:` y usa `if cond { a } else { b }` para asignación, favoreciendo la claridad sobre la brevedad. Python usa `a if cond else b` (la condición va en el medio). Rust y Zig usan `if` como expresiones: `let x = if cond { a } else { b };`. Si quieres condicionales inline compactos, usa ternario; si prefieres la explicitud al estilo Go, evita ternarios anidados y opta por bloques if/else simples.

- **Expresión vs sentencia** -- En Rust, Zig y Ruby, `if` puede ser una expresión que produce un valor; C, Java y Go tratan `if` solo como una sentencia. JavaScript usa el ternario para expresiones. Esto afecta cómo asignas condicionalmente: Rust permite `let grade = if score >= 90 { "A" } else { "B" };` sin una variable separada ni múltiples asignaciones. Elige lenguajes basados en expresiones cuando quieras evitar estado mutable y escribir código más declarativo.

- **Cuándo elegir cuál** -- Para programación de sistemas o máxima explicitud, el if/else de Go y la ausencia de ternario reducen las sorpresas. Para código funcional orientado a expresiones, Rust y Zig destacan. Para prototipado rápido y legibilidad, el `elif` de Python y `a if cond else b` son accesibles. Para backends empresariales o web, C#, Java y PHP ofrecen condicionales familiares estilo C con buen soporte de herramientas.
