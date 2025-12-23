# Variables & Types

Different languages handle variable declaration and typing in various ways. Let's compare how each language declares variables and handles types.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Variable Declaration

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Primitives
let name = "John";
const age = 30;
let isActive = true;

// Arrays
let numbers = [1, 2, 3];
let items = ["apple", "banana"];

// Objects
let person = { name: "John", age: 30 };
let user = new Object();

// Maps
let map = new Map();
map.set("key", "value");

// Sets
let set = new Set([1, 2, 3]);

// Dynamic typing
let value = 42;
value = "now a string"; // allowed`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Primitives
$name = "John";
$age = 30;
$isActive = true;

// Arrays
$numbers = [1, 2, 3];
$items = array("apple", "banana");

// Associative arrays (maps)
$map = ["key" => "value"];
$person = ["name" => "John", "age" => 30];

// Objects
$obj = new stdClass();
$obj->name = "John";

// Type hints (optional)
function greet(string $name): string {
    return "Hello, " . $name;
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Primitives
let name = "John";
let age: i32 = 30;
let is_active: bool = true;

// Arrays
let numbers: [i32; 3] = [1, 2, 3];
let items = vec!["apple", "banana"];

// Structs
struct Person {
    name: String,
    age: i32,
}
let person = Person { name: String::from("John"), age: 30 };

// HashMaps (Maps)
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("key", "value");

// HashSets (Sets)
use std::collections::HashSet;
let mut set = HashSet::new();
set.insert(1);

// Mutable variables
let mut count = 0;
count += 1;`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `package main

// Primitives
var name string = "John"
var age = 30  // type inferred
var isActive bool = true

// Arrays
var numbers [3]int = [3]int{1, 2, 3}
var items []string = []string{"apple", "banana"}

// Structs
type Person struct {
    Name string
    Age  int
}
var person Person = Person{Name: "John", Age: 30}

// Maps
var m map[string]string = make(map[string]string)
m["key"] = "value"

// Short declaration
name := "John"
numbers := []int{1, 2, 3}

// Multiple variables
var x, y int = 1, 2`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Primitives
name = "John"
age = 30
is_active = True

# Lists (arrays)
numbers = [1, 2, 3]
items = ["apple", "banana"]

# Tuples
point = (1, 2)
coordinates = (10, 20, 30)

# Dictionaries (maps)
person = {"name": "John", "age": 30}
map_dict = {"key": "value"}

# Sets
numbers_set = {1, 2, 3}
items_set = set(["apple", "banana"])

# Type hints (optional, Python 3.5+)
name: str = "John"
age: int = 30

# Multiple assignment
x, y = 1, 2`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Primitives
const name = "John";
var age: i32 = 30;
var is_active: bool = true;

// Arrays
var numbers: [3]i32 = [3]i32{ 1, 2, 3 };
var items = [_][]const u8{ "apple", "banana" };

// Slices
var slice: []i32 = &numbers;

// Structs
const Person = struct {
    name: []const u8,
    age: i32,
};
var person = Person{ .name = "John", .age = 30 };

// Type inference with const
const count = 42; // comptime_int

// Mutable
var mutable: i32 = 10;`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Primitives
string name = "John";
int age = 30;
bool isActive = true;

// Arrays
int[] numbers = {1, 2, 3};
string[] items = {"apple", "banana"};

// Lists
List<int> numbersList = new List<int> {1, 2, 3};

// Objects/Classes
class Person {
    public string Name { get; set; }
    public int Age { get; set; }
}
var person = new Person { Name = "John", Age = 30 };

// Dictionaries (Maps)
Dictionary<string, string> map = new Dictionary<string, string>();
map["key"] = "value";

// HashSet (Sets)
HashSet<int> set = new HashSet<int> {1, 2, 3};

// var keyword (type inference)
var city = "New York";

// Multiple declaration
int x = 1, y = 2;`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Primitives
std::string name = "John";
int age = 30;
bool isActive = true;

// Arrays
int numbers[3] = {1, 2, 3};
std::vector<int> numbersVec = {1, 2, 3};

// Structs
struct Person {
    std::string name;
    int age;
};
Person person = {"John", 30};

// Maps
std::map<std::string, std::string> map;
map["key"] = "value";

// Sets
std::set<int> set = {1, 2, 3};

// auto keyword (C++11+)
auto city = "New York";

// Multiple declaration
int x = 1, y = 2;`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Primitives
char name[] = "John";
int age = 30;
int isActive = 1;  // boolean as int

// Arrays
int numbers[3] = {1, 2, 3};
char items[][10] = {"apple", "banana"};

// Structs
struct Person {
    char name[50];
    int age;
};
struct Person person = {"John", 30};

// Pointers
int* ptr = &age;

// Multiple declaration
int x = 1, y = 2;`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Primitives
String name = "John";
int age = 30;
boolean isActive = true;

// Arrays
int[] numbers = {1, 2, 3};
String[] items = {"apple", "banana"};

// Lists
List<Integer> numbersList = new ArrayList<>();
numbersList.add(1);

// Objects/Classes
class Person {
    String name;
    int age;
}
Person person = new Person();
person.name = "John";

// Maps
Map<String, String> map = new HashMap<>();
map.put("key", "value");

// Sets
Set<Integer> set = new HashSet<>();
set.add(1);

// var keyword (Java 10+)
var city = "New York";`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Primitives
name = "John"
age = 30
is_active = true

# Arrays
numbers = [1, 2, 3]
items = ["apple", "banana"]

# Hashes (maps)
person = {name: "John", age: 30}
map = {"key" => "value"}

# Sets
require 'set'
set = Set.new([1, 2, 3])

# Constants (convention: uppercase)
NAME = "John"

# Multiple assignment
x, y = 1, 2`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Primitives
let name = "John"  // String
var age = 30       // Int
var isActive = true  // Bool

// Arrays
var numbers = [1, 2, 3]
var items: [String] = ["apple", "banana"]

// Structs
struct Person {
    var name: String
    var age: Int
}
var person = Person(name: "John", age: 30)

// Dictionaries (Maps)
var map: [String: String] = ["key": "value"]
var personDict = ["name": "John", "age": "30"]

// Sets
var set: Set<Int> = [1, 2, 3]

// Explicit types
let city: String = "New York"
var count: Int = 0

// Multiple declaration
var (x, y) = (1, 2)`
    }
  ]}
/>

## Type System

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Type checking - primitives
typeof 42;           // "number"
typeof "hello";      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"

// Type checking - advanced
Array.isArray([1, 2]);        // true
instanceof Date;              // check instance
Object.prototype.toString.call([]);  // "[object Array]"

// Implicit conversions
"5" + 3;        // "53" (string concatenation)
"5" - 3;        // 2 (numeric conversion)
true + 1;       // 2 (boolean to number)

// Explicit conversions
Number("42");           // 42
String(42);             // "42"
Boolean(1);             // true
parseInt("42px");       // 42
parseFloat("3.14");     // 3.14`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `// Type checking - primitives
gettype(42);        // "integer"
gettype("hello");   // "string"
gettype(true);      // "boolean"
is_int(42);         // true
is_string("hello"); // true
is_array([1, 2]);   // true

// Type checking - advanced
is_array([1, 2]);           // true
is_object(new stdClass());   // true
instanceof DateTime;         // check instance

// Implicit conversions (type juggling)
"5" + 3;        // 8 (numeric conversion)
"5" . 3;        // "53" (string concatenation)
true + 1;       // 2 (boolean to number)

// Explicit conversions
(int)"42";              // 42
(string)42;             // "42"
(bool)1;                // true
(float)"3.14";          // 3.14
array(1, 2, 3);         // [1, 2, 3]`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Type checking
use std::any::TypeId;
TypeId::of::<i32>() == value.type_id();  // check type
std::mem::size_of::<i32>();               // size check

// Pattern matching for types
match value {
    n if n is i32 => println!("integer"),
    _ => println!("other"),
}

// No implicit conversions - compile error
// let x: i32 = 42.5;  // error

// Explicit conversions
let num: i32 = "42".parse().unwrap();
let float: f64 = 42.0;
let int_from_float: i32 = 42.5 as i32;      // 42
let float_from_int: f64 = 42 as f64;        // 42.0
let string: String = 42.to_string();         // "42"`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Type checking
import "reflect"
reflect.TypeOf(42)           // reflect.Type
reflect.ValueOf(42).Kind()   // reflect.Int
_, ok := value.(int)         // type assertion

// No implicit conversions
// var x int = 42.5  // compile error

// Explicit conversions
var num int = int(42.5)              // 42
var float float64 = float64(42)      // 42.0
var str string = string(65)          // "A" (rune to string)
var str2 string = strconv.Itoa(42)  // "42" (int to string)
var num2, _ = strconv.Atoi("42")    // 42 (string to int)`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Type checking - primitives
type(42)              # <class 'int'>
type("hello")          # <class 'str'>
isinstance(42, int)    # True
isinstance("hello", str)  # True

# Type checking - advanced
isinstance([1, 2], list)      # True
isinstance({"key": "value"}, dict)  # True
isinstance({1, 2}, set)       # True
hasattr(obj, '__iter__')      # check if iterable

# Implicit conversions
"5" + str(3)          # "53" (explicit needed for +)
5 + 3.0               # 8.0 (int to float)
True + 1              # 2 (bool to int)

# Explicit conversions
int("42")             # 42
str(42)               # "42"
float("3.14")         # 3.14
bool(1)               # True
list("hello")         # ['h', 'e', 'l', 'l', 'o']`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Type checking at compile time
@TypeOf(42)           // comptime type
@typeInfo(@TypeOf(42))  // type information

// No implicit conversions
// var x: i32 = 42.5;  // compile error

// Explicit conversions
var num: i32 = @intFromFloat(42.5);      // 42
var float: f64 = @floatFromInt(42);      // 42.0
var int_from_float: i32 = @intCast(42.5);  // 42
var string = try std.fmt.allocPrint(allocator, "{d}", 42);  // "42"`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Type checking
42.GetType()              // System.Int32
typeof(int)               // System.Type
value is int              // true
value.GetType() == typeof(int)  // true

// Type checking - advanced
arr is Array              // true
obj is List<int>          // type check
obj.GetType().IsArray     // check if array

// Implicit conversions (widening)
int x = 42;
long y = x;               // implicit (int to long)
float f = 42;             // implicit (int to float)

// Explicit conversions
int num = (int)42.5;              // 42 (cast)
int num2 = Convert.ToInt32(42.5); // 42
string str = value.ToString();    // "42"
int parsed = int.Parse("42");     // 42
bool success = int.TryParse("42", out int result);`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Type checking
#include <typeinfo>
typeid(42).name()         // type name
typeid(value) == typeid(int)  // type comparison

// Type checking - advanced
#include <type_traits>
std::is_array<int[5]>::value  // true
std::is_integral<int>::value  // true

// Implicit conversions (promotions)
int x = 42;
long y = x;               // implicit (int to long)
float f = 42;             // implicit (int to float)

// Explicit conversions
int num = static_cast<int>(42.5);        // 42 (safe cast)
int num2 = (int)42.5;                    // 42 (C-style cast)
std::string str = std::to_string(42);    // "42"
int parsed = std::stoi("42");            // 42`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Type checking (limited at runtime)
sizeof(int)              // size of type
_Generic(value, int: 1, default: 0)  // type selection (C11)

// Implicit conversions (promotions)
int x = 42;
long y = x;              // implicit (int to long)
float f = 42;            // implicit (int to float)

// Explicit conversions (casting)
int num = (int)42.5;              // 42
float fnum = (float)42;           // 42.0
char str[20];
sprintf(str, "%d", value);        // "42"
int parsed = atoi("42");          // 42
double parsed_d = atof("3.14");   // 3.14`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Type checking
value.getClass()              // Class<?>
value instanceof Integer      // true
Integer.class.isInstance(value)  // true

// Type checking - advanced
arr instanceof int[]          // array check
obj instanceof List           // interface check
obj.getClass().isArray()      // check if array

// Implicit conversions (widening)
int x = 42;
long y = x;                   // implicit (int to long)
float f = 42;                 // implicit (int to float)

// Explicit conversions
int num = (int)42.5;                  // 42 (cast)
int num2 = Integer.valueOf("42");     // 42 (boxing)
String str = String.valueOf(42);     // "42"
int parsed = Integer.parseInt("42");  // 42
Integer boxed = 42;                  // autoboxing`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Type checking - primitives
42.class              # Integer
"hello".class          # String
true.class             # TrueClass
[1, 2].class           # Array

# Type checking - advanced
value.is_a?(Integer)   # true
value.is_a?(Array)     # check if array
value.is_a?(Hash)      # check if hash
value.respond_to?(:each)  # check if iterable

# Implicit conversions
"5" + 3.to_s           # "53" (explicit needed)
5 + 3.0                # 8.0 (int to float)
true.to_i              # 1 (bool to int)

# Explicit conversions
"42".to_i              # 42
42.to_s                # "42"
"3.14".to_f            # 3.14
1.to_bool              # true (if defined)
[1, 2, 3].to_a         # [1, 2, 3]`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Type checking
type(of: 42)           // Int.Type
value is Int           // true
value is String        // false

// Type checking - advanced
arr is [Int]           // array type check
obj is [String: Any]   // dictionary check
value is AnyCollection // protocol check

// Implicit conversions (limited)
let x: Int = 42
let y: Double = Double(x)  // explicit needed

// Explicit conversions
let num = Int(42.5)              // 42
let float = Double(42)            // 42.0
let str = String(42)              // "42"
let parsed = Int("42")            // Optional(42)
if let num = Int("42") {          // safe unwrap
    // use num
}`
    }
  ]}
/>


