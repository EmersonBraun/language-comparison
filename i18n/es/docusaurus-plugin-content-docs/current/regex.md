---
sidebar_position: 17
description: "Expresiones regulares y coincidencia de patrones comparadas en 12 lenguajes de programación"
keywords: [regex, expresiones regulares, coincidencia de patrones, búsqueda, reemplazo]
---

# Regex

Las expresiones regulares (regex) son herramientas poderosas para la coincidencia de patrones y la manipulación de texto. Así es como los diferentes lenguajes manejan las operaciones con regex.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Coincidencia de Patrones Básica

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Create regex
const pattern = /hello/i;  // literal with flag
const pattern2 = new RegExp("hello", "i");  // constructor

// Test match
pattern.test("Hello World");  // true

// Find match
"Hello World".match(/hello/i);  // ["Hello"]
"Hello World".search(/hello/i);  // 0 (index)

// Find all matches
"hello hello".match(/hello/g);  // ["hello", "hello"]`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Create regex
$pattern = "/hello/i";

// Test match
preg_match($pattern, "Hello World");  // 1 (true)

// Find match
preg_match($pattern, "Hello World", $matches);  // $matches[0] = "Hello"

// Find all matches
preg_match_all("/hello/i", "hello hello", $matches);  // $matches[0] = ["hello", "hello"]`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use regex::Regex;

// Create regex
let re = Regex::new(r"hello")?;
let re_case = Regex::new(r"(?i)hello")?;  // case insensitive

// Test match
re.is_match("Hello World");  // false (case sensitive)
re_case.is_match("Hello World");  // true

// Find match
re.find("Hello World");  // Some(Match)
if let Some(mat) = re.find("Hello World") {
    println!("\{\}", mat.as_str());  // "hello"
}

// Find all matches
for mat in re.find_iter("hello hello") {
    println!("\{\}", mat.as_str());
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `import (
    "regexp"
)

// Create regex
re, _ := regexp.Compile("hello")
reCase, _ := regexp.Compile("(?i)hello")  // case insensitive

// Test match
re.MatchString("Hello World")  // false
reCase.MatchString("Hello World")  // true

// Find match
re.FindString("Hello World")  // "hello" or ""

// Find all matches
re.FindAllString("hello hello", -1)  // ["hello", "hello"]

// Find with index
re.FindStringIndex("Hello World")  // [0, 5]`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `import re

# Create regex
pattern = re.compile(r"hello", re.IGNORECASE)

# Test match
pattern.search("Hello World")  # Match object or None
bool(pattern.search("Hello World"))  # True

# Find match
pattern.search("Hello World").group()  # "Hello"
pattern.findall("hello hello")  # ["hello", "hello"]

# Find with index
match = pattern.search("Hello World")
if match:
    match.start()  # 0
    match.end()    # 5
    match.span()   # (0, 5)`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Zig doesn't have built-in regex
// Use external library like zig-regex or pcre

// Example with external library
const std = @import("std");
// const regex = @import("regex");

// Manual pattern matching for simple cases
const str = "Hello World";
const pattern = "hello";
// Use std.mem.indexOfPos for simple cases`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System.Text.RegularExpressions;

// Create regex
Regex pattern = new Regex("hello", RegexOptions.IgnoreCase);

// Test match
pattern.IsMatch("Hello World");  // true

// Find match
Match match = pattern.Match("Hello World");
if (match.Success) {
    string result = match.Value;  // "Hello"
}

// Find all matches
MatchCollection matches = pattern.Matches("hello hello");
foreach (Match m in matches) {
    Console.WriteLine(m.Value);
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <regex>
#include <string>

// Create regex
std::regex pattern("hello", std::regex_constants::icase);

// Test match
std::regex_search("Hello World", pattern);  // true

// Find match
std::smatch match;
if (std::regex_search("Hello World", match, pattern)) {
    std::string result = match.str();  // "Hello"
}

// Find all matches
std::string text = "hello hello";
std::sregex_iterator iter(text.begin(), text.end(), pattern);
std::sregex_iterator end;
for (; iter != end; ++iter) {
    std::cout << iter->str() << std::endl;
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// C doesn't have built-in regex
// Use POSIX regex (regex.h) or PCRE library

#include <regex.h>

regex_t regex;
int reti = regcomp(&regex, "hello", REG_ICASE | REG_EXTENDED);

if (reti) {
    // error
}

// Test match
reti = regexec(&regex, "Hello World", 0, NULL, 0);
if (!reti) {
    // match found
}

regfree(&regex);  // free`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.util.regex.Pattern;
import java.util.regex.Matcher;

// Create regex
Pattern pattern = Pattern.compile("hello", Pattern.CASE_INSENSITIVE);

// Test match
pattern.matcher("Hello World").find();  // true

// Find match
Matcher matcher = pattern.matcher("Hello World");
if (matcher.find()) {
    String result = matcher.group();  // "Hello"
}

// Find all matches
Matcher matcher = pattern.matcher("hello hello");
while (matcher.find()) {
    System.out.println(matcher.group());
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Create regex
pattern = /hello/i

# Test match
pattern =~ "Hello World"  # 0 (index) or nil
"Hello World" =~ pattern  # 0

# Find match
"Hello World".match(pattern)  # MatchData object
"Hello World"[pattern]  # "Hello"

# Find all matches
"hello hello".scan(pattern)  # ["hello", "hello"]

# Match with groups
/(\w+) (\w+)/.match("Hello World")
# $1 = "Hello", $2 = "World"`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

// Create regex
let pattern = try NSRegularExpression(pattern: "hello", options: .caseInsensitive)

// Test match
let range = NSRange(location: 0, length: str.utf16.count)
pattern.numberOfMatches(in: str, range: range) > 0  // true

// Find match
if let match = pattern.firstMatch(in: str, range: range) {
    let result = (str as NSString).substring(with: match.range)
}

// Find all matches
let matches = pattern.matches(in: str, range: range)
for match in matches {
    let result = (str as NSString).substring(with: match.range)
}`
    }
  ]}
/>

## Operaciones de Reemplazo

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Replace first match
"Hello World".replace(/hello/i, "Hi");  // "Hi World"

// Replace all matches
"hello hello".replace(/hello/g, "Hi");  // "Hi Hi"

// Replace with function
"hello world".replace(/\\w+/g, (match) => match.toUpperCase());  // "HELLO WORLD"`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Replace first match
preg_replace("/hello/i", "Hi", "Hello World");  // "Hi World"

// Replace all matches (default behavior)
preg_replace("/hello/i", "Hi", "hello hello");  // "Hi Hi"

// Replace with callback
preg_replace_callback("/\\w+/", function($matches) {
    return strtoupper($matches[0]);
}, "hello world");  // "HELLO WORLD"`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use regex::Regex;

let re = Regex::new(r"hello")?;

// Replace all matches
re.replace_all("hello hello", "Hi");  // "Hi Hi"

// Replace with function
re.replace_all("hello world", |caps: &regex::Captures| {
    caps[0].to_uppercase()
});  // "HELLO WORLD"`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `import "regexp"

re, _ := regexp.Compile("hello")

// Replace all matches
re.ReplaceAllString("hello hello", "Hi")  // "Hi Hi"

// Replace with function
re.ReplaceAllStringFunc("hello world", func(s string) string {
    return strings.ToUpper(s)
})  // "HELLO WORLD"`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `import re

pattern = re.compile(r"hello")

# Replace all matches
pattern.sub("Hi", "hello hello")  # "Hi Hi"
re.sub(r"hello", "Hi", "hello hello")  # "Hi Hi"

# Replace with function
pattern.sub(lambda m: m.group().upper(), "hello world")  # "HELLO WORLD"

# Replace with count
pattern.sub("Hi", "hello hello", count=1)  # "Hi hello"`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Use external regex library
// Manual replacement for simple cases
// const std = @import("std");
// Use std.mem.replace for simple string replacement`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System.Text.RegularExpressions;

Regex pattern = new Regex("hello");

// Replace all matches
pattern.Replace("hello hello", "Hi");  // "Hi Hi"

// Replace with function
pattern.Replace("hello world", match => {
    return match.Value.ToUpper();
});  // "HELLO WORLD"`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <regex>

std::regex pattern("hello");

// Replace all matches
std::string result = std::regex_replace(
    "hello hello", 
    pattern, 
    "Hi"
);  // "Hi Hi"

// Replace with format
std::regex_replace("hello world", pattern, 
    [](const std::smatch& m) {
        std::string s = m.str();
        std::transform(s.begin(), s.end(), s.begin(), ::toupper);
        return s;
    }
);`

    },
    {
      name: 'C',
      lang: 'c',
      code: `// Use POSIX regex or PCRE library
// Manual implementation or use library functions
// regcomp, regexec, regfree for matching
// Manual string replacement for simple cases`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.util.regex.Pattern;

Pattern pattern = Pattern.compile("hello");

// Replace all matches
pattern.matcher("hello hello").replaceAll("Hi");  // "Hi Hi"

// Replace first match
pattern.matcher("hello hello").replaceFirst("Hi");  // "Hi hello"

// Replace with function (Java 9+)
pattern.matcher("hello world").replaceAll(mr -> 
    mr.group().toUpperCase()
);  // "HELLO WORLD"`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `pattern = /hello/

# Replace all matches
"hello hello".gsub(pattern, "Hi")  # "Hi Hi"

# Replace first match
"hello hello".sub(pattern, "Hi")  # "Hi hello"

# Replace with block
"hello world".gsub(/\\w+/) \{ |match| match.upcase \}  # "HELLO WORLD"`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

let pattern = try NSRegularExpression(pattern: "hello")

// Replace all matches
let range = NSRange(location: 0, length: str.utf16.count)
let result = pattern.stringByReplacingMatches(
    in: str,
    range: range,
    withTemplate: "Hi"
)  // "Hi Hi"

// Replace with function (manual implementation)
var result = str
let matches = pattern.matches(in: str, range: range)
for match in matches.reversed() {
    let replacement = "Hi"
    result = (result as NSString).replacingCharacters(
        in: match.range, 
        with: replacement
    )
}`

    }
  ]}
/>

## Grupos de Captura

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Capture groups
const match = "John Doe".match(/(\w+) (\w+)/);
// match[0] = "John Doe"
// match[1] = "John"
// match[2] = "Doe"

// Named groups (ES2018+)
const named = /(?<first>\w+) (?<last>\w+)/.exec("John Doe");
named.groups.first;  // "John"
named.groups.last;   // "Doe"

// Use in replace
"John Doe".replace(/(\w+) (\w+)/, "$2, $1");  // "Doe, John"`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Capture groups
preg_match("/(\w+) (\w+)/", "John Doe", $matches);
// $matches[0] = "John Doe"
// $matches[1] = "John"
// $matches[2] = "Doe"

// Named groups
preg_match("/(?<first>\w+) (?<last>\w+)/", "John Doe", $matches);
$matches['first'];  // "John"
$matches['last'];   // "Doe"

// Use in replace
preg_replace("/(\w+) (\w+)/", "$2, $1", "John Doe");  // "Doe, John"`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use regex::Regex;

let re = Regex::new(r"(\w+) (\w+)")?;

if let Some(caps) = re.captures("John Doe") {
    let full = &caps[0];  // "John Doe"
    let first = &caps[1];  // "John"
    let last = &caps[2];   // "Doe"
}

// Named groups
let re = Regex::new(r"(?<first>\w+) (?<last>\w+)")?;
if let Some(caps) = re.captures("John Doe") {
    let first = &caps["first"];  // "John"
    let last = &caps["last"];    // "Doe"
}

// Use in replace
re.replace("John Doe", "$last, $first");  // "Doe, John"`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `import "regexp"

re := regexp.MustCompile("(\w+) (\w+)")

// Capture groups
matches := re.FindStringSubmatch("John Doe")
// matches[0] = "John Doe"
// matches[1] = "John"
// matches[2] = "Doe"

// Named groups (Go 1.11+)
re = regexp.MustCompile("(?P<first>\w+) (?P<last>\w+)")
matches := re.FindStringSubmatch("John Doe")
names := re.SubexpNames()
// Access by index or use map

// Use in replace
re.ReplaceAllString("John Doe", "$2, $1")  // "Doe, John"`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `import re

pattern = re.compile(r"(\\w+) (\\w+)")

# Capture groups
match = pattern.search("John Doe")
match.group(0)  # "John Doe"
match.group(1)  # "John"
match.group(2)  # "Doe"
match.groups()  # ("John", "Doe")

# Named groups
pattern = re.compile(r"(?P<first>\\w+) (?P<last>\\w+)")
match = pattern.search("John Doe")
match.group("first")  # "John"
match.group("last")   # "Doe"
match.groupdict()     # e.g. first="John", last="Doe"

# Use in replace
pattern.sub(r"\\2, \\1", "John Doe")  # "Doe, John"`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Use external regex library
// Capture groups supported by most regex libraries`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System.Text.RegularExpressions;

Regex pattern = new Regex("(\w+) (\w+)");

Match match = pattern.Match("John Doe");
if (match.Success) {
    string full = match.Groups[0].Value;  // "John Doe"
    string first = match.Groups[1].Value;  // "John"
    string last = match.Groups[2].Value;  // "Doe"
}

// Named groups
Regex named = new Regex("(?<first>\w+) (?<last>\w+)");
Match m = named.Match("John Doe");
string first = m.Groups["first"].Value;  // "John"
string last = m.Groups["last"].Value;   // "Doe"

// Use in replace
pattern.Replace("John Doe", "$2, $1");  // "Doe, John"`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <regex>

std::regex pattern("(\w+) (\w+)");

std::smatch match;
if (std::regex_search("John Doe", match, pattern)) {
    std::string full = match[0];   // "John Doe"
    std::string first = match[1];   // "John"
    std::string last = match[2];   // "Doe"
}

// Use in replace
std::regex_replace("John Doe", pattern, "$2, $1");  // "Doe, John"`

    },
    {
      name: 'C',
      lang: 'c',
      code: `// Use POSIX regex with regmatch_t
#include <regex.h>

regex_t regex;
regmatch_t matches[3];  // 0=full, 1=first group, 2=second group

regcomp(&regex, "\\(\\w\\+\\) \\(\\w\\+\\)", REG_EXTENDED);
regexec(&regex, "John Doe", 3, matches, 0);

// Access matches[0].rm_so, matches[0].rm_eo for positions
// Extract substring manually`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.util.regex.Pattern;
import java.util.regex.Matcher;

Pattern pattern = Pattern.compile("(\w+) (\w+)");
Matcher matcher = pattern.matcher("John Doe");

if (matcher.find()) {
    String full = matcher.group(0);   // "John Doe"
    String first = matcher.group(1);  // "John"
    String last = matcher.group(2);   // "Doe"
}

// Named groups (Java 7+)
Pattern named = Pattern.compile("(?<first>\w+) (?<last>\w+)");
Matcher m = named.matcher("John Doe");
if (m.find()) {
    String first = m.group("first");  // "John"
    String last = m.group("last");    // "Doe"
}

// Use in replace
matcher.replaceAll("$2, $1");  // "Doe, John"`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `pattern = /(\w+) (\w+)/

# Capture groups
match = pattern.match("John Doe")
match[0]  # "John Doe"
match[1]  # "John"
match[2]  # "Doe"

# Named groups
pattern = /(?<first>\w+) (?<last>\w+)/
match = pattern.match("John Doe")
match[:first]  # "John"
match["last"]  # "Doe"

# Use in replace
"John Doe".gsub(pattern, "\\2, \\1")  # "Doe, John"`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

let pattern = try NSRegularExpression(
    pattern: "(\w+) (\w+)", 
    options: []
)

let range = NSRange(location: 0, length: str.utf16.count)
if let match = pattern.firstMatch(in: str, range: range) {
    let full = (str as NSString).substring(with: match.range)
    if match.numberOfRanges > 1 {
        let first = (str as NSString).substring(with: match.range(at: 1))
    }
    if match.numberOfRanges > 2 {
        let last = (str as NSString).substring(with: match.range(at: 2))
    }
}

// Named groups (manual extraction or use external library)`

    }
  ]}
/>

## Patrones Comunes

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Email
/^[\\w\\.-]+@[\\w\\.-]+\\.[a-z]{2,}$/i

// Phone (US)
/^\\+?1?[-. ]?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

// URL
/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/

// Digits only
/^\\d+$/

// Alphanumeric
/^[a-zA-Z0-9]+$/`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Email
"/^[\\w\\.-]+@[\\w\\.-]+\\.[a-z]{2,}$/i"

// Phone (US)
"/^\\+?1?[-. ]?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/"

// URL
"/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)/"

// Digits only
"/^\\d+$/"

// Alphanumeric
"/^[a-zA-Z0-9]+$/"`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use regex::Regex;

// Email
Regex::new(r"^[\w\.-]+@[\w\.-]+\.[a-z]{2,}$")?;

// Phone (US)
Regex::new(r"^\+?1?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$")?;

// URL
Regex::new(r"https?://(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)")?;

// Digits only
Regex::new(r"^\d+$")?;

// Alphanumeric
Regex::new(r"^[a-zA-Z0-9]+$")?;`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `import "regexp"

// Email
regexp.MustCompile("^[\\w\\.-]+@[\\w\\.-]+\\.[a-z]{2,}$")

// Phone (US)
regexp.MustCompile("^\\+?1?[-. ]?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$")

// URL
regexp.MustCompile("https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)")

// Digits only
regexp.MustCompile("^\\d+$")

// Alphanumeric
regexp.MustCompile("^[a-zA-Z0-9]+$")`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `import re

# Email
re.compile(r"^[\\w\\.-]+@[\\w\\.-]+\\.[a-z]{2,}$", re.IGNORECASE)

# Phone (US)
re.compile(r"^\\+?1?[-. ]?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$")

# URL
re.compile(r"https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)")

# Digits only
re.compile(r"^\\d+$")

# Alphanumeric
re.compile(r"^[a-zA-Z0-9]+$")`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Use external regex library
// Patterns similar to other languages`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System.Text.RegularExpressions;

// Email
new Regex(@"^[\w\.-]+@[\w\.-]+\.[a-z]{2,}$", RegexOptions.IgnoreCase);

// Phone (US)
new Regex(@"^\+?1?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$");

// URL
new Regex(@"https?://(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)");

// Digits only
new Regex(@"^\d+$");

// Alphanumeric
new Regex(@"^[a-zA-Z0-9]+$");`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <regex>

// Email
std::regex email(R"(^[\w\.-]+@[\w\.-]+\.[a-z]{2,}$)", std::regex_constants::icase);

// Phone (US)
std::regex phone(R"(^\+?1?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$)");

// URL
std::regex url(R"(https?://(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))");

// Digits only
std::regex digits(R"(^\d+$)");

// Alphanumeric
std::regex alnum(R"(^[a-zA-Z0-9]+$)");`

    },
    {
      name: 'C',
      lang: 'c',
      code: `// Use POSIX regex or PCRE
// Patterns similar to other languages
// Escape sequences may differ`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.util.regex.Pattern;

// Email
Pattern.compile("^[\\w\\.-]+@[\\w\\.-]+\\.[a-z]{2,}$", Pattern.CASE_INSENSITIVE);

// Phone (US)
Pattern.compile("^\\+?1?[-. ]?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$");

// URL
Pattern.compile("https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)");

// Digits only
Pattern.compile("^\\d+$");

// Alphanumeric
Pattern.compile("^[a-zA-Z0-9]+$");`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Email
/^[\w\.-]+@[\w\.-]+\.[a-z]{2,}$/i

# Phone (US)
/^\+?1?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

# URL
/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/

# Digits only
/^\d+$/

# Alphanumeric
/^[a-zA-Z0-9]+$/`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

// Email
try NSRegularExpression(pattern: "^[\\w\\.-]+@[\\w\\.-]+\\.[a-z]{2,}$", options: .caseInsensitive)

// Phone (US)
try NSRegularExpression(pattern: "^\\+?1?[-. ]?\\(?([0-9]{3})\\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$")

// URL
try NSRegularExpression(pattern: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&\\/\\/=]*)")

// Digits only
try NSRegularExpression(pattern: "^\\d+$")

// Alphanumeric
try NSRegularExpression(pattern: "^[a-zA-Z0-9]+$")`

    }
  ]}
/>

## Puntos Clave

- **Soporte incorporado vs bibliotecas** — JavaScript (`/pattern/` o `new RegExp`), Python (módulo `re`), Ruby (`/pattern/`), Java (`Pattern`/`Matcher`), C# (`Regex`), C++ (`<regex>`) y Go (`regexp`) incluyen regex en la biblioteca estándar. C requiere `regex.h` POSIX o una biblioteca como PCRE; Zig no tiene regex incorporado y típicamente usa bibliotecas externas; Rust necesita el crate `regex`. Si estás construyendo un proyecto que usa intensivamente coincidencia de patrones, prefiere un lenguaje con soporte incorporado; para trabajo en sistemas o embebidos, ten en cuenta las dependencias de bibliotecas.

- **Variaciones de sintaxis** — La mayoría de los lenguajes usan patrones estilo PCRE. JavaScript y Ruby permiten sintaxis literal: `/hello/i` para insensible a mayúsculas. Go y Rust usan patrones basados en strings: `Regex::new(r"(?i)hello")` en Rust o `regexp.Compile("(?i)hello")` en Go. Las operaciones de reemplazo también difieren: `"hello hello".gsub(/hello/, "Hi")` en Ruby vs `re.sub(r"hello", "Hi", text)` en Python. Al portar regex entre lenguajes, presta atención a las diferencias de escape—especialmente en literales de string donde las barras invertidas pueden necesitar duplicarse.

- **Grupos de captura** — Los grupos con nombre `(?<first>\w+) (?<last>\w+)` son soportados en JavaScript, PHP, Rust, Python, C#, Java y Ruby, dando acceso limpio como `match.groups.first` o `caps["first"]`. El regex POSIX de C proporciona `regmatch_t` para grupos posicionales pero no grupos con nombre; el `NSRegularExpression` de Swift expone rangos por índice, requiriendo extracción manual. Para parsear texto estructurado (por ejemplo, líneas de log, archivos de configuración), prefiere un lenguaje con soporte de grupos con nombre para mantener el código legible.

- **Ergonomía de la API** — Ruby y JavaScript ofrecen la sintaxis más concisa: `"Hello World" =~ /hello/i` retorna el índice de coincidencia; `"hello hello".gsub(/hello/, "Hi")` hace reemplazo total en una línea. C, C++ y Swift requieren más código repetitivo: abrir archivos, iterar con `sregex_iterator`, convertir `NSRange` a índices de `String`. Para procesamiento rápido de texto y scripting, elige Ruby, Python o JavaScript; para código crítico en rendimiento o de bajo nivel, acepta la verbosidad de C/C++ o las APIs explícitas de Rust y Go.
