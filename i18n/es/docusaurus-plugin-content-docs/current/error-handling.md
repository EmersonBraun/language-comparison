---
sidebar_position: 22
description: "Patrones de manejo de errores -- excepciones, tipos Result y retornos de error en 12 lenguajes"
keywords: [manejo de errores, excepciones, try-catch, tipo Result, patrones de error]
---

# Manejo de Errores

Los mecanismos de manejo de errores varían significativamente entre lenguajes. Así es como los diferentes lenguajes manejan errores y excepciones.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Manejo Básico de Errores

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Try-catch
try {
    riskyOperation();
} catch (error) {
    console.error("Error:", error.message);
} finally {
    cleanup();
}

// Throwing errors
throw new Error("Something went wrong");

// Custom errors
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Try-catch
try {
    riskyOperation();
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    cleanup();
}

// Throwing exceptions
throw new Exception("Something went wrong");

// Custom exceptions
class CustomException extends Exception {
    public function __construct($message) {
        parent::__construct($message);
    }
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Result type
fn divide(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Division by zero".to_string())
    } else {
        Ok(a / b)
    }
}

// Using Result
match divide(10.0, 2.0) {
    Ok(result) => println!("Result: {}", result),
    Err(e) => println!("Error: {}", e),
}

// Option type
fn find_item(items: &[i32], target: i32) -> Option<usize> {
    items.iter().position(|&x| x == target)
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Error return
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Using errors
result, err := divide(10, 2)
if err != nil {
    log.Fatal(err)
}
fmt.Println(result)

// Custom error type
type DivisionError struct {
    Message string
}

func (e *DivisionError) Error() string {
    return e.Message
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Try-except
try:
    risky_operation()
except ValueError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("No errors")
finally:
    cleanup()

# Raising exceptions
raise ValueError("Something went wrong")

# Custom exceptions
class CustomError(Exception):
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Error union type
fn divide(a: f64, b: f64) !f64 {
    if (b == 0) return error.DivisionByZero;
    return a / b;
}

// Using error union
const result = divide(10, 2) catch |err| {
    std.debug.print("Error: {}\\n", .{err});
    return;
};

// Error sets
const MathError = error{
    DivisionByZero,
    Overflow,
};`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Try-catch
try
{
    RiskyOperation();
}
catch (ArgumentException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"Unexpected error: {ex.Message}");
}
finally
{
    Cleanup();
}

// Throwing exceptions
throw new ArgumentException("Something went wrong");

// Custom exceptions
public class CustomException : Exception
{
    public CustomException(string message) : base(message) { }
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Try-catch
try {
    riskyOperation();
} catch (const std::exception& e) {
    std::cerr << "Error: " << e.what() << std::endl;
} catch (...) {
    std::cerr << "Unknown error" << std::endl;
}

// Throwing exceptions
throw std::runtime_error("Something went wrong");

// Custom exceptions
class CustomException : public std::exception {
    const char* what() const noexcept override {
        return "Custom error";
    }
};`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// No built-in exceptions
// Use return codes and error handling

int divide(double a, double b, double* result) {
    if (b == 0) {
        return -1;  // Error code
    }
    *result = a / b;
    return 0;  // Success
}

// Using error codes
double result;
if (divide(10, 2, &result) != 0) {
    fprintf(stderr, "Division by zero\\n");
    return;
}
printf("Result: %f\\n", result);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Try-catch
try {
    riskyOperation();
} catch (IllegalArgumentException e) {
    System.err.println("Error: " + e.getMessage());
} catch (Exception e) {
    System.err.println("Unexpected error: " + e.getMessage());
} finally {
    cleanup();
}

// Throwing exceptions
throw new IllegalArgumentException("Something went wrong");

// Custom exceptions
public class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Begin-rescue
begin
    risky_operation
rescue ArgumentError => e
    puts "Error: #{e.message}"
rescue => e
    puts "Unexpected error: #{e.message}"
ensure
    cleanup
end

# Raising exceptions
raise ArgumentError, "Something went wrong"

# Custom exceptions
class CustomError < StandardError
    def initialize(message)
        super(message)
    end
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Do-catch
do {
    try riskyOperation()
} catch let error as CustomError {
    print("Error: \\(error)")
} catch {
    print("Unexpected error: \\(error)")
}

// Throwing errors
throw CustomError.somethingWentWrong

// Error protocol
enum CustomError: Error {
    case somethingWentWrong
    case invalidInput(String)
    
    var localizedDescription: String {
        switch self {
        case .somethingWentWrong:
            return "Something went wrong"
        case .invalidInput(let message):
            return "Invalid input: \\(message)"
        }
    }
}`
    }
  ]}
/>

## Patrones Avanzados de Manejo de Errores

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Promise error handling
fetch('/api/data')
    .then(response => response.json())
    .catch(error => console.error("Error:", error));

// Async/await
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

// Error boundaries (React)
class ErrorBoundary extends React.Component {
    componentDidCatch(error, errorInfo) {
        logErrorToService(error, errorInfo);
    }
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Error handling with set_error_handler
set_error_handler(function($severity, $message, $file, $line) {
    throw new ErrorException($message, 0, $severity, $file, $line);
});

// Exception chaining
try {
    // code
} catch (Exception $e) {
    throw new CustomException("New error", 0, $e);
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Error propagation with ?
fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

// Combinators
let result = divide(10, 2)
    .map(|x| x * 2)
    .map_err(|e| format!("Error: {}", e));

// Unwrap with custom message
let value = divide(10, 2)
    .expect("Failed to divide");`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Error wrapping (Go 1.13+)
if err != nil {
    return fmt.Errorf("failed to process: %w", err)
}

// Error checking
if errors.Is(err, ErrNotFound) {
    // handle not found
}

// Error unwrapping
var targetErr *CustomError
if errors.As(err, &targetErr) {
    // handle custom error
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Exception chaining
try:
    risky_operation()
except ValueError as e:
    raise RuntimeError("Failed") from e

# Context managers for cleanup
with open('file.txt') as f:
    content = f.read()
# File automatically closed

# Suppressing exceptions
from contextlib import suppress
with suppress(FileNotFoundError):
    os.remove('file.txt')`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Error propagation
fn read_file(path: []const u8) ![]const u8 {
    const file = try std.fs.cwd().openFile(path, .{});
    defer file.close();
    return try file.reader().readAllAlloc(allocator, 1024);
}

// Catching specific errors
const result = read_file("data.txt") catch |err| switch (err) {
    error.FileNotFound => "default content",
    else => return err,
};`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Using statement (automatic disposal)
using var file = new FileStream("data.txt", FileMode.Open);
// Automatically disposed

// Exception filters (C# 6+)
try {
    ProcessData();
}
catch (Exception ex) when (ex.Message.Contains("timeout"))
{
    // Handle timeout
}

// AggregateException
var exceptions = new List<Exception>();
// ... collect exceptions
throw new AggregateException(exceptions);`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// RAII (Resource Acquisition Is Initialization)
{
    std::ifstream file("data.txt");
    // File automatically closed when out of scope
}

// Exception specifications (deprecated, use noexcept)
void function() noexcept {
    // Function that doesn't throw
}

// Nested exceptions
try {
    // outer code
} catch (...) {
    std::throw_with_nested(std::runtime_error("Outer error"));
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Error codes with errno
#include <errno.h>

FILE* file = fopen("data.txt", "r");
if (file == NULL) {
    perror("Error opening file");
    // errno contains error code
}

// setjmp/longjmp (not recommended)
#include <setjmp.h>
jmp_buf env;
if (setjmp(env) == 0) {
    // code that might call longjmp
} else {
    // error handling
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Try-with-resources (automatic close)
try (FileReader file = new FileReader("data.txt")) {
    // use file
} // automatically closed

// Multi-catch (Java 7+)
try {
    process();
} catch (IOException | SQLException e) {
    // handle both
}

// Suppressed exceptions
try (Resource1 r1 = ...; Resource2 r2 = ...) {
    // if both throw, one is suppressed
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Retry mechanism
retries = 0
begin
    risky_operation
rescue => e
    retries += 1
    retry if retries < 3
    raise
end

# Exception hierarchy
begin
    # code
rescue StandardError => e
    # catches most exceptions
rescue => e
    # catches all exceptions
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Result type (alternative to throwing)
func fetchData() -> Result<String, NetworkError> {
    // return .success("data") or .failure(.timeout)
}

// Using Result
switch fetchData() {
case .success(let data):
    print(data)
case .failure(let error):
    print("Error: \\(error)")
}

// Defer for cleanup
func processFile() {
    let file = openFile()
    defer { closeFile(file) }
    // file will be closed when function exits
}`
    }
  ]}
/>

## Puntos Clave

- **Excepciones vs retornos de error** -- JavaScript, Python, PHP, Ruby, Java, C#, C++ y Swift usan excepciones estilo try/catch: haces `throw` o `raise` y opcionalmente `catch` más adelante. Go y Zig usan retornos de error explícitos: `result, err := divide(10, 2)` en Go y `const result = divide(10, 2) catch |err| { ... }` en Zig. Rust usa `Result<T, E>` y `Option<T>` en el sistema de tipos. C usa códigos de retorno (`int divide(..., double* result)` retornando 0 o -1) y `errno`. Las excepciones permiten que los errores se propaguen implícitamente a través de la pila de llamadas; los retornos de error obligan a cada punto de llamada a decidir. Elige excepciones cuando quieras un manejo centralizado; elige retornos de error cuando quieras un flujo de control explícito y menos sorpresas.

- **Tipos Result/Option** -- `Result<T, E>` de Rust y las uniones de error `!T` de Zig codifican los errores en el sistema de tipos. Por ejemplo, `fn divide(a: f64, b: f64) -> Result<f64, String>` en Rust obliga a los llamadores a manejar `Ok` y `Err` mediante `match`, `?` o `.unwrap()`. `fn divide(a: f64, b: f64) !f64` en Zig retorna un valor o un error de un conjunto de errores en tiempo de compilación. `Result<String, NetworkError>` de Swift es opcional pero común para código asíncrono. `(value, error)` en Go es idiomático y se verifica con `if err != nil`. Los tipos Result hacen visible "esto puede fallar" en las firmas. Prefiere Rust o Zig cuando quieras garantías en tiempo de compilación de que los errores se manejan.

- **Manejo obligado por el compilador** -- Rust y Zig requieren un manejo explícito de errores: debes usar `match`, `?`, `try` o `catch`, o el código no compilará. Por ejemplo, `let contents = File::open(path)?;` en Rust propaga errores; ignorar el `?` requeriría `unwrap()` o `expect()`, que es explícito. En Python, Java o JavaScript, puedes llamar a una función que lanza excepciones sin try/catch y el error se propagará (o fallará) silenciosamente hasta ser capturado. Si tu prioridad es eliminar errores no manejados en tiempo de compilación, elige Rust o Zig; si prefieres flexibilidad y manejadores centralizados, usa lenguajes basados en excepciones.

- **Propagación y envolvimiento de errores** -- Go 1.13+ soporta `fmt.Errorf("failed: %w", err)` para envolver y `errors.Is(err, ErrNotFound)` para verificar. El operador `?` de Rust propaga errores preservando la conversión mediante `From`. Python usa `raise RuntimeError("failed") from e` para encadenamiento. Java y C# soportan encadenamiento de excepciones con `initCause`. Envolver preserva el contexto cuando los errores ascienden. Elige lenguajes con buen soporte de envolvimiento cuando construyas sistemas en capas donde los errores cruzan muchos límites.

- **Limpieza de recursos** -- RAII (C++), `defer` (Go, Zig), `using` (C#), `try-with-resources` (Java) y `with` (Python) aseguran la limpieza incluso cuando ocurren errores. Por ejemplo, `defer file.close()` en Zig y `using var file = new FileStream(...)` en C# garantizan la liberación. C no tiene un mecanismo incorporado; debes usar `goto cleanup` o condicionales anidados. Prefiere lenguajes con limpieza estructurada cuando gestiones archivos, conexiones o bloqueos para evitar fugas en rutas de error.
