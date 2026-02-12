---
sidebar_position: 2
description: "How to write comments and documentation in JavaScript, Python, Rust, Go, and 8 more languages"
keywords: [comments, documentation, JSDoc, Javadoc, docstring, Doxygen]
---

# Comments & Documentation

Every language has its own syntax for comments and documentation. Here's how different languages handle code comments and documentation generation.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Comments

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

## Key Takeaways

- **Documentation generation tools** -- Each ecosystem has standard tools: JSDoc for JavaScript, PHPDoc for PHP, `cargo doc` for Rust, `go doc` for Go, Sphinx or pydoc for Python, Doxygen for C/C++, Javadoc for Java, YARD for Ruby, and swift-docc for Swift. These tools scan doc comments and produce HTML or other formats. For example, `cargo doc --open` in Rust generates and opens API docs; `javadoc -d docs src/*.java` does the same for Java. When starting a project, adopt the ecosystem's default tool early so docs stay in sync with code.

- **Doc-comment conventions** -- Triple-slash (`///`) is used in Rust, Zig, C#, and Swift for documentation that precedes functions or types. JavaScript, PHP, Java, and C/C++ use `/** */` blocks with tags like `@param`, `@returns`, and `@throws`. C# also supports XML tags such as `<summary>`, `<param>`, and `<returns>`. Python uses docstrings (triple-quoted strings) as the primary doc format. Choose the convention that matches your language's tooling; mixing styles in one project causes confusion.

- **Doc-comment syntax and tags** -- Common tags across languages include parameter descriptions (`@param name`), return values (`@returns` or `@return`), exceptions (`@throws`), and examples (`@example` or `# Examples`). Rust and Zig support Markdown inside doc comments; C# uses XML. For maximum clarity, document parameters and return values for every public function, and add a short example where it helps. Sparse or inconsistent docs hurt maintainability.

- **Code example testing** -- Rust's `cargo test` can execute code blocks in doc comments, so examples stay runnable and correct. Python's doctest runs `>>>` snippets in docstrings as tests. Java and Javadoc support `{@code}` blocks for display but not automatic execution. Investing in testable examples (Rust, Python) reduces stale or broken docs. When your language supports it, add runnable examples and run them in CI.

