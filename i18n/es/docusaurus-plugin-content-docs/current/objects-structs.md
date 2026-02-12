---
sidebar_position: 13
description: "Objetos, structs y tipos de datos estructurados comparados en 12 lenguajes de programación"
keywords: [objetos, structs, estructuras, propiedades, métodos]
---
# Objetos y Structs

Diferentes lenguajes tienen diferentes formas de representar datos estructurados. Así es como funcionan los objetos, structs y construcciones similares en diferentes lenguajes.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Creación de Objetos/Structs

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Object literal
const person = {
    name: "John",
    age: 30,
    greet: function() {
        return "Hello, " + this.name;
    }
};

// Access properties
person.name;
person["age"];

// Add properties
person.city = "NYC";

// Object methods
Object.keys(person);
Object.values(person);`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Associative array
$person = [
    'name' => 'John',
    'age' => 30
];

// Access properties
$person['name'];
$person['age'];

// Add properties
$person['city'] = 'NYC';

// Object (class instance)
class Person {
    public $name;
    public $age;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
}

$person = new Person('John', 30);`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Struct
struct Person {
    name: String,
    age: u32,
}

// Create instance
let person = Person {
    name: String::from("John"),
    age: 30,
};

// Access fields
person.name;
person.age;

// Struct with methods
impl Person {
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }
    
    fn greet(&self) -> String {
        format!("Hello, {}", self.name)
    }
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Struct
type Person struct {
    Name string
    Age  int
}

// Create instance
person := Person{
    Name: "John",
    Age:  30,
}

// Access fields
person.Name
person.Age

// Methods
func (p Person) Greet() string {
    return "Hello, " + p.Name
}

// Pointer receiver
func (p *Person) SetAge(age int) {
    p.Age = age
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Dictionary
person = {
    "name": "John",
    "age": 30
}

# Access properties
person["name"]
person.get("age")

# Add properties
person["city"] = "NYC"

# Dataclass (Python 3.7+)
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int
    
    def greet(self):
        return f"Hello, {self.name}"

person = Person("John", 30)`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Struct
const Person = struct {
    name: []const u8,
    age: u32,
    
    pub fn greet(self: Person) []const u8 {
        return "Hello, " ++ self.name;
    }
};

// Create instance
const person = Person{
    .name = "John",
    .age = 30,
};

// Access fields
person.name
person.age`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Class
public class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
    
    public string Greet()
    {
        return $"Hello, {Name}";
    }
}

// Create instance
var person = new Person("John", 30);

// Record (C# 9+)
public record Person(string Name, int Age);`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Struct
struct Person {
    std::string name;
    int age;
    
    Person(const std::string& n, int a) 
        : name(n), age(a) {}
    
    std::string greet() const {
        return "Hello, " + name;
    }
};

// Create instance
Person person("John", 30);

// Access fields
person.name
person.age`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Struct
typedef struct {
    char name[50];
    int age;
} Person;

// Create instance
Person person;
strcpy(person.name, "John");
person.age = 30;

// Access fields
person.name
person.age

// Function to work with struct
void greet(Person* p) {
    printf("Hello, %s\\n", p->name);
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Class
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String greet() {
        return "Hello, " + name;
    }
}

// Create instance
Person person = new Person("John", 30);`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Hash
person = {
    name: "John",
    age: 30
}

# Access properties
person[:name]
person[:age]

# Add properties
person[:city] = "NYC"

# Class
class Person
    attr_accessor :name, :age
    
    def initialize(name, age)
        @name = name
        @age = age
    end
    
    def greet
        "Hello, #{@name}"
    end
end

person = Person.new("John", 30)`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Struct
struct Person {
    var name: String
    var age: Int
    
    func greet() -> String {
        "Hello, \\(name)"
    }
}

// Create instance
var person = Person(name: "John", age: 30)

// Access fields
person.name
person.age

// Class
class Person {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func greet() -> String {
        "Hello, \\(name)"
    }
}`
    }
  ]}
/>

## Trabajando con Objetos

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Object destructuring
const {name, age} = person;

// Spread operator
const updated = {...person, age: 31};

// Object methods
Object.assign({}, person, {city: "NYC"});
Object.freeze(person);  // Immutable
Object.seal(person);    // Prevent adding/deleting
Object.keys(person);    // ["name", "age"]
Object.values(person);  // ["John", 30]
Object.entries(person); // [["name", "John"], ["age", 30]]

// Check property exists
"name" in person;       // true
person.hasOwnProperty("name");  // true

// Delete property
delete person.age;

// Iterate over properties
for (const key in person) {
    console.log(key, person[key]);
}
Object.keys(person).forEach(key => {
    console.log(key, person[key]);
});

// Merge objects
const merged = Object.assign({}, person, {city: "NYC"});
const merged2 = {...person, ...{city: "NYC"}};

// Compare objects
JSON.stringify(obj1) === JSON.stringify(obj2);

// Check if empty
Object.keys(person).length === 0;

// JSON
JSON.stringify(person);
JSON.parse(jsonString);`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Array access
$name = $person['name'];

// Array merge
$updated = array_merge($person, ['age' => 31]);
$merged = array_merge($person, ['city' => 'NYC']);

// Get keys/values
array_keys($person);    // ['name', 'age']
array_values($person);  // ['John', 30]

// Check key exists
array_key_exists('name', $person);  // true
isset($person['name']);             // true

// Delete key
unset($person['age']);

// Iterate
foreach ($person as $key => $value) {
    echo "$key: $value";
}

// Count
count($person);  // number of elements

// Check if empty
empty($person);  // false

// JSON
json_encode($person);
json_decode($jsonString, true);

// Object methods (for class instances)
get_object_vars($person);  // get properties
property_exists($person, 'name');  // check property`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Struct update syntax
let updated = Person {
    age: 31,
    ..person
};

// Clone
let cloned = person.clone();

// Debug print
#[derive(Debug)]
struct Person { ... }
println!("{:?}", person);

// Compare
#[derive(PartialEq, Eq)]
struct Person { ... }
person1 == person2;

// Iterate over fields (manual or use macro)
// Use macros like serde or custom derive

// Check if struct has default values
impl Default for Person {
    fn default() -> Self {
        Person { name: String::new(), age: 0 }
    }
}
let empty = Person::default();

// Serialization (with serde)
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
struct Person { ... }

let json = serde_json::to_string(&person)?;
let person: Person = serde_json::from_str(&json)?;

// Convert to/from HashMap
use std::collections::HashMap;
let map: HashMap<String, String> = HashMap::new();`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Struct literal update
updated := Person{
    Name: person.Name,
    Age:  31,
}

// Pointer
p := &person
p.Age = 31

// Copy
cloned := person

// Compare (if fields are comparable)
person1 == person2

// Iterate over struct fields (use reflection)
import "reflect"
v := reflect.ValueOf(person)
for i := 0; i < v.NumField(); i++ {
    field := v.Field(i)
    // process field
}

// Check if zero value
var empty Person
person == empty  // check if empty

// JSON
import "encoding/json"

jsonBytes, _ := json.Marshal(person)
var p Person
json.Unmarshal(jsonBytes, &p)

// Convert to map
import "encoding/json"
var m map[string]interface{}
json.Unmarshal(jsonBytes, &m)

// Tags for JSON
type Person struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Dictionary update
updated = {**person, "age": 31}

# Dictionary copy
cloned = person.copy()  # shallow copy
import copy
deep_cloned = copy.deepcopy(person)  # deep copy

# Get keys/values/items
person.keys()      # dict_keys(['name', 'age'])
person.values()    # dict_values(['John', 30])
person.items()     # dict_items([('name', 'John'), ('age', 30)])

# Check key exists
"name" in person   # True
person.get("name") # "John" or None
person.get("name", "Default")  # with default

# Delete key
del person["age"]
person.pop("age")  # returns value
person.pop("age", None)  # with default

# Iterate
for key in person:
    print(key, person[key])
for key, value in person.items():
    print(key, value)

# Merge dictionaries
merged = {**person, **{"city": "NYC"}}
person.update({"city": "NYC"})

# Check if empty
len(person) == 0
not person
bool(person)  # False if empty

# Clear all
person.clear()

# JSON
import json
json_str = json.dumps(person)
person = json.loads(json_str)

# Dataclass methods
from dataclasses import dataclass, asdict, fields
person_dict = asdict(person)  # convert to dict
for field in fields(person):
    print(field.name)`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Struct update
const updated = Person{
    .age = 31,
    .name = person.name,
};

// Copy
const cloned = person;

// Compare (manual or use std.mem.eql)
std.mem.eql(u8, person1.name, person2.name);

// Iterate over fields (use @TypeOf and reflection)
const T = @TypeOf(person);
const fields = @typeInfo(T).Struct.fields;
for (fields) |field| {
    // access field info
}

// Check if zero value
const zero = Person{ .name = "", .age = 0 };
std.mem.eql(Person, &person, &zero);

// Debug print
std.debug.print("{any}\\n", .{person});

// JSON (use external library)
// zig-json or similar

// Convert to array (manual)
var arr: [2]u8 = undefined;
arr[0] = person.age;`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Object initializer
var updated = new Person(person.Name, 31);

// With expression (C# 9+)
var updated = person with { Age = 31 };

// Clone
var cloned = new Person(person.Name, person.Age);

// Reflection
using System.Reflection;
var properties = typeof(Person).GetProperties();
foreach (var prop in properties) {
    var value = prop.GetValue(person);
}

// Check property exists
typeof(Person).GetProperty("Name") != null;

// Compare
person.Equals(otherPerson);
person == otherPerson;  // if == operator defined

// ToString
person.ToString();  // override for custom

// GetHashCode
person.GetHashCode();

// Convert to dictionary
var dict = new Dictionary<string, object>();
dict["Name"] = person.Name;
dict["Age"] = person.Age;

// JSON
using System.Text.Json;

var json = JsonSerializer.Serialize(person);
var p = JsonSerializer.Deserialize<Person>(json);

// Anonymous objects
var anon = new { Name = "John", Age = 30 };`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Copy constructor
Person updated = person;
updated.age = 31;

// Copy assignment
Person cloned;
cloned = person;

// Compare (define operator==)
bool operator==(const Person& other) const {
    return name == other.name && age == other.age;
}

// Stream output (for printing)
friend std::ostream& operator<<(std::ostream& os, const Person& p) {
    os << "Person{name: " << p.name << ", age: " << p.age << "}";
    return os;
}

// Structured bindings (C++17)
auto [name, age] = person;

// Reflection (C++20 or use libraries)
// Use libraries like magic_enum or custom solutions

// Convert to tuple
std::make_tuple(person.name, person.age);

// JSON (use external library like nlohmann/json)
#include <nlohmann/json.hpp>

nlohmann::json j = person;
std::string json = j.dump();
Person p = j.get<Person>();`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Manual copy
Person updated;
strcpy(updated.name, person.name);
updated.age = 31;

// Compare (manual function)
int compare_person(const Person* p1, const Person* p2) {
    if (strcmp(p1->name, p2->name) != 0) return -1;
    if (p1->age != p2->age) return -1;
    return 0;
}

// Print struct
void print_person(const Person* p) {
    printf("Person{name: %s, age: %d}\\n", p->name, p->age);
}

// Check if empty
int is_empty_person(const Person* p) {
    return strlen(p->name) == 0 && p->age == 0;
}

// Convert to string
void person_to_string(const Person* p, char* buffer, size_t size) {
    snprintf(buffer, size, "Person{name: %s, age: %d}", p->name, p->age);
}

// JSON (use external library like cJSON)
#include <cjson/cJSON.h>

cJSON* json = cJSON_CreateObject();
cJSON_AddStringToObject(json, "name", person.name);
cJSON_AddNumberToObject(json, "age", person.age);
char* json_string = cJSON_Print(json);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Clone (if implements Cloneable)
Person updated = person.clone();
updated.setAge(31);

// Reflection
import java.lang.reflect.Field;
Field[] fields = Person.class.getDeclaredFields();
for (Field field : fields) {
    field.setAccessible(true);
    Object value = field.get(person);
}

// Compare
person.equals(otherPerson);  // override equals()
person.hashCode();            // override hashCode()

// ToString
person.toString();  // override toString()

// Check if null
person != null;

// Convert to Map
import java.util.HashMap;
Map<String, Object> map = new HashMap<>();
map.put("name", person.getName());
map.put("age", person.getAge());

// Builder pattern
Person.Builder builder = new Person.Builder();
Person p = builder.name("John").age(30).build();

// JSON (use Gson or Jackson)
import com.google.gson.Gson;

Gson gson = new Gson();
String json = gson.toJson(person);
Person p = gson.fromJson(json, Person.class);

// Record methods (Java 14+)
public record Person(String name, int age) {}
person.name();  // accessor
person.equals(other);  // auto-generated`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Hash merge
updated = person.merge(age: 31)
merged = person.merge(city: "NYC")

# Hash clone
cloned = person.clone
cloned = person.dup

# Get keys/values
person.keys      # [:name, :age]
person.values    # ["John", 30]
person.to_a      # [[:name, "John"], [:age, 30]]

# Check key exists
person.key?(:name)     # true
person.has_key?(:name) # true
person.include?(:name) # true

# Delete key
person.delete(:age)    # returns value
person.delete_if { |k, v| k == :age }

# Iterate
person.each { |key, value| puts "#{key}: #{value}" }
person.each_key { |key| puts key }
person.each_value { |value| puts value }

# Check if empty
person.empty?    # false
person.length == 0

# Clear
person.clear

# Compare
person == other_person  # true if same keys/values

# Convert to array
person.to_a

# Select/Filter
person.select { |k, v| v.is_a?(Integer) }

# Transform values
person.transform_values { |v| v.to_s }

# JSON
require 'json'

json_str = person.to_json
person = JSON.parse(json_str)

# Object methods (for class instances)
person.instance_variables  # [:@name, :@age]
person.instance_variable_get(:@name)
person.respond_to?(:greet)  # check method exists`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Struct update
var updated = person
updated.age = 31

// Copy (structs are value types, automatically copied)
let cloned = person

// Compare (if Equatable)
extension Person: Equatable {
    static func == (lhs: Person, rhs: Person) -> Bool {
        lhs.name == rhs.name && lhs.age == rhs.age
    }
}
person == otherPerson

// Hashable
extension Person: Hashable {
    func hash(into hasher: inout Hasher) {
        hasher.combine(name)
        hasher.combine(age)
    }
}

// Codable (for JSON)
extension Person: Codable { }

// Mirror (reflection)
let mirror = Mirror(reflecting: person)
for child in mirror.children {
    print("\(child.label ?? ""): \(child.value)")
}

// Convert to dictionary
let dict = ["name": person.name, "age": String(person.age)]

// Check if empty (custom)
extension Person {
    var isEmpty: Bool {
        name.isEmpty && age == 0
    }
}

// CustomStringConvertible
extension Person: CustomStringConvertible {
    var description: String {
        "Person(name: \\(name), age: \\(age))"
    }
}
print(person)  // uses description

// JSON
import Foundation

let encoder = JSONEncoder()
let data = try encoder.encode(person)
let jsonString = String(data: data, encoding: .utf8)

let decoder = JSONDecoder()
let p = try decoder.decode(Person.self, from: data)`
    }
  ]}
/>

## Puntos Clave

- **Struct vs clase vs diccionario** -- Swift, Rust, Go, Zig y C usan structs como contenedores de datos principales para campos con nombre. JavaScript, Python, PHP y Ruby a menudo usan objetos planos o diccionarios (e.g., `{ name: "John", age: 30 }`) para datos ad-hoc. Java y C# favorecen las clases para datos estructurados. Usa structs cuando necesites esquemas fijos y verificación en tiempo de compilación; usa diccionarios cuando el esquema sea dinámico o estés construyendo configuración o datos tipo JSON.

- **Semántica de valor vs referencia** -- Los structs de Swift y Rust son tipos por valor: `let b = a` copia los datos. Los objetos de Java, C# y JavaScript son tipos por referencia: `b = a` comparte la misma instancia. Los structs de Go son valores pero comúnmente se pasan como punteros (`*Person`) para mutación. La semántica de valor evita mutación compartida accidental; la semántica de referencia reduce las copias. Elige tipos por valor (Swift, Rust) para comportamiento predecible y seguridad en hilos; tipos por referencia cuando necesites estado mutable compartido.

- **Asociación de métodos** -- Rust usa `impl Person { fn greet(&self) {...} }`; Go usa sintaxis de receptor `func (p Person) Greet() string`; Zig embebe funciones dentro de structs. JavaScript y Python adjuntan métodos a clases. C usa funciones externas como `greet(&person)`. El patrón afecta cómo organizas el código: los bloques `impl` co-localizan la lógica con los datos en Rust; Go separa los métodos de las definiciones de tipo. Prefiere lenguajes con sintaxis de métodos al construir modelos de dominio.

- **Alternativas ligeras** -- El `@dataclass` de Python, el `record` de C# y el `record` de Java proporcionan definiciones compactas para contenedores de datos sin código repetitivo. JavaScript y Ruby usan literales de objetos o hashes. Para DTOs, objetos de configuración o payloads de API, prefiere dataclasses o records; para lógica de negocio rica, usa clases completas o structs con métodos.

- **Serialización y reflexión** -- Rust y Go usan etiquetas de struct (`#[derive(Serialize)]`, `` `json:"name"` ``) para JSON. El `dataclass` de Python y `asdict()` facilitan la serialización. C y Zig requieren mapeo manual. Si serializas frecuentemente a JSON u otros formatos, favorece lenguajes con soporte incorporado (Go, Rust con serde, Python, C#); para runtime mínimo, C o Zig pueden ser aceptables.


