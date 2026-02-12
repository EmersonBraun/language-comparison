---
sidebar_position: 2
description: "Como escrever comentários e documentação em JavaScript, Python, Rust, Go e mais 8 linguagens"
keywords: [comentários, documentação, JSDoc, Javadoc, docstring, Doxygen]
---

# Comentários e Documentação

Cada linguagem tem sua própria sintaxe para comentários e documentação. Aqui está como diferentes linguagens lidam com comentários de código e geração de documentação.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Comentários

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Single-line comment

/* Multi-line
   comment */

/**
 * JSDoc documentation comment
 * @param {string} name - The user's name
 * @param {number} age - The user's age
 * @returns {string} A greeting message
 * @throws {Error} If name is empty
 * @example
 * greet("John", 30);  // "Hello, John!"
 */
function greet(name, age) {
    return "Hello, " + name + "!";
}

// TODO: Implement this feature
// FIXME: This has a bug
// NOTE: Important detail`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Single-line comment
# Shell-style comment (also single-line)

/* Multi-line
   comment */

/**
 * PHPDoc documentation comment
 *
 * @param string $name The user's name
 * @param int $age The user's age
 * @return string A greeting message
 * @throws \\InvalidArgumentException If name is empty
 *
 * @example
 * greet("John", 30);  // "Hello, John!"
 */
function greet(string $name, int $age): string
{
    return "Hello, " . $name . "!";
}

// TODO: Implement this feature
// FIXME: This has a bug`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Single-line comment

/* Multi-line
   comment (can be /* nested */) */

/// Documentation comment (generates docs)
/// Supports **Markdown** formatting
///
/// # Arguments
/// * \`name\` - The user's name
/// * \`age\` - The user's age
///
/// # Returns
/// A greeting string
///
/// # Examples
/// \`\`\`
/// let msg = greet("John", 30);
/// assert_eq!(msg, "Hello, John!");
/// \`\`\`
///
/// # Panics
/// Panics if name is empty
fn greet(name: &str, age: u32) -> String {
    format!("Hello, {}!", name)
}

//! Module-level documentation comment
//! Describes the entire module

// Generate docs: cargo doc --open`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Single-line comment

/* Multi-line
   comment */

// Greet returns a greeting for the given name.
// It takes a name and age and returns a formatted string.
//
// Example:
//
//	msg := Greet("John", 30)
//	fmt.Println(msg) // "Hello, John!"
func Greet(name string, age int) string {
    return "Hello, " + name + "!"
}

// Package documentation goes in doc.go
// or before the package declaration:

// Package mypackage provides utilities for greeting.
package mypackage

// Generate docs: go doc
// View docs: godoc -http=:6060`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Single-line comment

# There are no multi-line comments in Python
# Use multiple single-line comments

"""
Docstring (triple quotes)
Used for documentation
"""

def greet(name: str, age: int) -> str:
    """Return a greeting for the given name.

    Args:
        name: The user's name.
        age: The user's age.

    Returns:
        A greeting string.

    Raises:
        ValueError: If name is empty.

    Examples:
        >>> greet("John", 30)
        'Hello, John!'
    """
    return f"Hello, {name}!"

# Access docstring
print(greet.__doc__)

# Generate docs: sphinx, pydoc
# python -m pydoc mymodule`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Single-line comment

// No multi-line comments in Zig

/// Documentation comment (triple slash)
/// Supports **Markdown** formatting
///
/// Parameters:
///   - name: The user's name
///   - age: The user's age
///
/// Returns a greeting string.
fn greet(name: []const u8, age: u32) []const u8 {
    _ = age;
    return name;
}

//! Top-level documentation comment
//! Describes the file/module

// Generate docs: zig build-lib -femit-docs`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Single-line comment

/* Multi-line
   comment */

/// <summary>
/// Returns a greeting for the given name.
/// </summary>
/// <param name="name">The user's name.</param>
/// <param name="age">The user's age.</param>
/// <returns>A greeting string.</returns>
/// <exception cref="ArgumentException">
/// Thrown if name is empty.
/// </exception>
/// <example>
/// <code>
/// string msg = Greet("John", 30);
/// </code>
/// </example>
/// <remarks>
/// This method is thread-safe.
/// </remarks>
public static string Greet(string name, int age)
{
    return $"Hello, {name}!";
}

// Generate docs: dotnet build with <GenerateDocumentationFile>`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Single-line comment

/* Multi-line
   comment */

/**
 * @brief Returns a greeting for the given name.
 *
 * Doxygen documentation comment.
 *
 * @param name The user's name
 * @param age The user's age
 * @return A greeting string
 * @throws std::invalid_argument If name is empty
 *
 * @code
 * std::string msg = greet("John", 30);
 * @endcode
 *
 * @see also_relevant_function()
 * @note This is thread-safe
 */
std::string greet(const std::string& name, int age) {
    return "Hello, " + name + "!";
}

// Generate docs: doxygen Doxyfile`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Single-line comment (C99+)

/* Multi-line
   comment (C89+) */

/**
 * @brief Returns a greeting for the given name.
 *
 * Doxygen documentation comment.
 *
 * @param name The user's name (null-terminated string)
 * @param age The user's age
 * @param[out] buffer Output buffer for the greeting
 * @param buf_size Size of the output buffer
 * @return 0 on success, -1 on error
 *
 * @warning Buffer must be large enough
 * @note Thread-safe
 */
int greet(const char* name, int age,
          char* buffer, size_t buf_size) {
    return snprintf(buffer, buf_size, "Hello, %s!", name);
}

/* Generate docs: doxygen Doxyfile */`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Single-line comment

/* Multi-line
   comment */

/**
 * Returns a greeting for the given name.
 *
 * <p>Javadoc documentation comment.
 *
 * @param name the user's name
 * @param age  the user's age
 * @return a greeting string
 * @throws IllegalArgumentException if name is empty
 * @since 1.0
 * @see OtherClass#otherMethod()
 *
 * <pre>{@code
 * String msg = greet("John", 30);
 * }</pre>
 */
public static String greet(String name, int age) {
    return "Hello, " + name + "!";
}

// Generate docs: javadoc -d docs src/*.java`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Single-line comment

=begin
Multi-line comment
(rarely used)
=end

# RDoc documentation
#
# Returns a greeting for the given name.
#
# @param name [String] The user's name
# @param age [Integer] The user's age
# @return [String] A greeting message
# @raise [ArgumentError] if name is empty
#
# @example
#   greet("John", 30)  #=> "Hello, John!"
#
def greet(name, age)
  "Hello, #{name}!"
end

# YARD documentation (@tags)
# Generate docs: yard doc
# Or: rdoc`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Single-line comment

/* Multi-line
   comment (can be /* nested */) */

/// Returns a greeting for the given name.
///
/// Use this function to create personalized greetings.
///
/// - Parameters:
///   - name: The user's name.
///   - age: The user's age.
/// - Returns: A greeting string.
/// - Throws: \`GreetingError.emptyName\` if name is empty.
///
/// ## Example
/// \`\`\`swift
/// let msg = greet(name: "John", age: 30)
/// print(msg)  // "Hello, John!"
/// \`\`\`
///
/// - Note: This function is thread-safe.
/// - Important: Name must not be empty.
func greet(name: String, age: Int) -> String {
    return "Hello, \\(name)!"
}

// Xcode renders doc comments with Quick Help
// Generate docs: swift-docc`
    }
  ]}
/>

## Principais Conclusões

- **Ferramentas de geração de documentação** -- Cada ecossistema tem ferramentas padrão: JSDoc para JavaScript, PHPDoc para PHP, `cargo doc` para Rust, `go doc` para Go, Sphinx ou pydoc para Python, Doxygen para C/C++, Javadoc para Java, YARD para Ruby e swift-docc para Swift. Essas ferramentas analisam comentários de documentação e produzem HTML ou outros formatos. Por exemplo, `cargo doc --open` em Rust gera e abre a documentação da API; `javadoc -d docs src/*.java` faz o mesmo para Java. Ao iniciar um projeto, adote a ferramenta padrão do ecossistema cedo para que a documentação se mantenha sincronizada com o código.

- **Convenções de comentários de documentação** -- Barra tripla (`///`) é usada em Rust, Zig, C# e Swift para documentação que precede funções ou tipos. JavaScript, PHP, Java e C/C++ usam blocos `/** */` com tags como `@param`, `@returns` e `@throws`. C# também suporta tags XML como `<summary>`, `<param>` e `<returns>`. Python usa docstrings (strings entre aspas triplas) como formato principal de documentação. Escolha a convenção que corresponde às ferramentas da sua linguagem; misturar estilos em um projeto causa confusão.

- **Sintaxe e tags de comentários de documentação** -- Tags comuns entre linguagens incluem descrições de parâmetros (`@param name`), valores de retorno (`@returns` ou `@return`), exceções (`@throws`) e exemplos (`@example` ou `# Examples`). Rust e Zig suportam Markdown dentro de comentários de documentação; C# usa XML. Para máxima clareza, documente parâmetros e valores de retorno para cada função pública e adicione um exemplo curto onde isso ajude. Documentação esparsa ou inconsistente prejudica a manutenibilidade.

- **Teste de exemplos de código** -- O `cargo test` do Rust pode executar blocos de código em comentários de documentação, então os exemplos permanecem executáveis e corretos. O doctest do Python executa trechos com `>>>` em docstrings como testes. Java e Javadoc suportam blocos `{@code}` para exibição, mas não execução automática. Investir em exemplos testáveis (Rust, Python) reduz documentação desatualizada ou quebrada. Quando sua linguagem suportar, adicione exemplos executáveis e execute-os no CI.
