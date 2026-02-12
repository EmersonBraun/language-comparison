---
sidebar_position: 22
description: "Padrões de tratamento de erros -- exceções, tipos Result e retorno de erros em 12 linguagens"
keywords: [tratamento de erros, exceções, try-catch, tipo Result, padrões de erro]
---

# Tratamento de Erros

Os mecanismos de tratamento de erros variam significativamente entre as linguagens. Veja como diferentes linguagens lidam com erros e exceções.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Tratamento Básico de Erros

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

## Padrões Avançados de Tratamento de Erros

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

## Principais Conclusões

- **Exceções vs retorno de erros** -- JavaScript, Python, PHP, Ruby, Java, C#, C++ e Swift usam exceções no estilo try/catch: você `throw` ou `raise` e opcionalmente `catch` adiante. Go e Zig usam retorno explícito de erros: `result, err := divide(10, 2)` em Go e `const result = divide(10, 2) catch |err| { ... }` em Zig. Rust usa `Result<T, E>` e `Option<T>` no sistema de tipos. C usa códigos de retorno (`int divide(..., double* result)` retornando 0 ou -1) e `errno`. Exceções permitem que erros se propaguem implicitamente pela pilha de chamadas; retorno de erros força cada ponto de chamada a decidir. Escolha exceções quando quiser tratamento centralizado; escolha retorno de erros quando quiser fluxo de controle explícito e menos surpresas.

- **Tipos Result/Option** -- `Result<T, E>` do Rust e as uniões de erro `!T` do Zig codificam erros no sistema de tipos. Por exemplo, `fn divide(a: f64, b: f64) -> Result<f64, String>` em Rust força os chamadores a tratar `Ok` e `Err` via `match`, `?` ou `.unwrap()`. O `fn divide(a: f64, b: f64) !f64` do Zig retorna um valor ou um erro de um conjunto de erros em tempo de compilação. O `Result<String, NetworkError>` do Swift é opcional, mas comum para código assíncrono. O `(value, error)` do Go é idiomático e verificado com `if err != nil`. Tipos Result tornam "isto pode falhar" visível nas assinaturas. Prefira Rust ou Zig quando quiser garantias em tempo de compilação de que os erros são tratados.

- **Tratamento obrigatório pelo compilador** -- Rust e Zig exigem tratamento explícito de erros: você deve usar `match`, `?`, `try` ou `catch`, ou o código não compilará. Por exemplo, `let contents = File::open(path)?;` em Rust propaga erros; ignorar o `?` exigiria `unwrap()` ou `expect()`, que é explícito. Em Python, Java ou JavaScript, você pode chamar uma função que lança exceção sem try/catch e o erro se propagará (ou causará crash) silenciosamente até ser capturado. Se sua prioridade é eliminar erros não tratados em tempo de compilação, escolha Rust ou Zig; se preferir flexibilidade e handlers centralizados, use linguagens baseadas em exceções.

- **Propagação e encapsulamento de erros** -- Go 1.13+ suporta `fmt.Errorf("failed: %w", err)` para encapsulamento e `errors.Is(err, ErrNotFound)` para verificação. O operador `?` do Rust propaga erros preservando a conversão via `From`. Python usa `raise RuntimeError("failed") from e` para encadeamento. Java e C# suportam encadeamento de exceções com `initCause`. O encapsulamento preserva o contexto quando erros borbulham para cima. Escolha linguagens com bom suporte a encapsulamento ao construir sistemas em camadas onde erros atravessam muitas fronteiras.

- **Limpeza de recursos** -- RAII (C++), `defer` (Go, Zig), `using` (C#), `try-with-resources` (Java) e `with` (Python) garantem limpeza mesmo quando erros ocorrem. Por exemplo, `defer file.close()` do Zig e `using var file = new FileStream(...)` do C# garantem a liberação. C não possui mecanismo embutido; você deve usar `goto cleanup` ou condicionais aninhados. Prefira linguagens com limpeza estruturada ao gerenciar arquivos, conexões ou locks para evitar vazamentos em caminhos de erro.
