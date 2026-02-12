---
sidebar_position: 20
description: "JSON parsing, serialization, and deserialization compared across 12 programming languages"
keywords: [JSON, serialization, deserialization, parsing, data exchange]
---

# JSON & Serialization

JSON is the most common data exchange format. Here's how different languages handle JSON parsing and serialization.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Parsing & Serializing JSON

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Parse JSON string to object
const data = JSON.parse('{"name":"John","age":30}');
console.log(data.name);  // "John"

// Serialize object to JSON string
const json = JSON.stringify({ name: "John", age: 30 });
// '{"name":"John","age":30}'

// Pretty print
const pretty = JSON.stringify(data, null, 2);

// Custom serialization (replacer)
const json2 = JSON.stringify(data, (key, value) => {
    if (key === "age") return undefined;  // Exclude
    return value;
});

// Parse with reviver
const data2 = JSON.parse(json, (key, value) => {
    if (key === "date") return new Date(value);
    return value;
});

// Fetch JSON from API
const response = await fetch('/api/data');
const apiData = await response.json();`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Parse JSON string to array/object
$data = json_decode('{"name":"John","age":30}');
echo $data->name;  // "John"

// As associative array
$arr = json_decode('{"name":"John","age":30}', true);
echo $arr['name'];  // "John"

// Serialize to JSON string
$json = json_encode(['name' => 'John', 'age' => 30]);
// '{"name":"John","age":30}'

// Pretty print
$pretty = json_encode($data, JSON_PRETTY_PRINT);

// Options
$json = json_encode($data,
    JSON_PRETTY_PRINT |
    JSON_UNESCAPED_UNICODE |
    JSON_UNESCAPED_SLASHES
);

// Error handling
$result = json_decode($input);
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_last_error_msg();
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// serde + serde_json (standard)
use serde::{Deserialize, Serialize};
use serde_json;

#[derive(Serialize, Deserialize, Debug)]
struct Person {
    name: String,
    age: u32,
}

// Parse JSON to struct
let json = r#"{"name":"John","age":30}"#;
let person: Person = serde_json::from_str(json)?;
println!("{}", person.name);  // "John"

// Serialize struct to JSON
let json = serde_json::to_string(&person)?;
let pretty = serde_json::to_string_pretty(&person)?;

// Dynamic JSON (serde_json::Value)
let value: serde_json::Value = serde_json::from_str(json)?;
value["name"].as_str();  // Some("John")

// Build JSON dynamically
let data = serde_json::json!({
    "name": "John",
    "age": 30,
    "scores": [85, 92, 78]
});`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `import "encoding/json"

type Person struct {
    Name string \u0060json:"name"\u0060
    Age  int    \u0060json:"age"\u0060
}

// Parse JSON to struct
jsonStr := \u0060{"name":"John","age":30}\u0060
var person Person
json.Unmarshal([]byte(jsonStr), &person)
fmt.Println(person.Name)  // "John"

// Serialize struct to JSON
data, _ := json.Marshal(person)
// {"name":"John","age":30}

// Pretty print
pretty, _ := json.MarshalIndent(person, "", "  ")

// Dynamic JSON (map)
var result map[string]interface{}
json.Unmarshal([]byte(jsonStr), &result)
result["name"].(string)  // "John"

// Streaming JSON
decoder := json.NewDecoder(reader)
decoder.Decode(&person)

encoder := json.NewEncoder(writer)
encoder.Encode(person)`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `import json

# Parse JSON string to dict
data = json.loads('{"name": "John", "age": 30}')
print(data["name"])  # "John"

# Serialize dict to JSON string
json_str = json.dumps({"name": "John", "age": 30})

# Pretty print
pretty = json.dumps(data, indent=2, sort_keys=True)

# Read/write JSON files
with open("data.json", "r") as f:
    data = json.load(f)

with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Custom serialization
class DateEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)

json.dumps(data, cls=DateEncoder)

# Pydantic (typed models)
# from pydantic import BaseModel
# class Person(BaseModel):
#     name: str
#     age: int`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

const Person = struct {
    name: []const u8,
    age: u32,
};

// Parse JSON
const json_str =
    \\\\{"name":"John","age":30}
;

const parsed = try std.json.parseFromSlice(
    Person, allocator, json_str, .{}
);
defer parsed.deinit();
const person = parsed.value;

// Serialize to JSON
var buf = std.ArrayList(u8).init(allocator);
defer buf.deinit();
try std.json.stringify(person, .{}, buf.writer());

// Dynamic JSON parsing
const tree = try std.json.parseFromSlice(
    std.json.Value, allocator, json_str, .{}
);
defer tree.deinit();

const name = tree.value.object.get("name").?.string;`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System.Text.Json;

public record Person(string Name, int Age);

// Parse JSON to object
string json = "{\"name\":\"John\",\"age\":30}";
var person = JsonSerializer.Deserialize<Person>(json,
    new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

// Serialize object to JSON
string output = JsonSerializer.Serialize(person);

// Pretty print
string pretty = JsonSerializer.Serialize(person,
    new JsonSerializerOptions { WriteIndented = true });

// Dynamic JSON (JsonDocument)
using var doc = JsonDocument.Parse(json);
string name = doc.RootElement
    .GetProperty("name").GetString();

// Newtonsoft.Json (popular alternative)
// var person = JsonConvert.DeserializeObject<Person>(json);
// var json = JsonConvert.SerializeObject(person);`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// nlohmann/json (most popular)
#include <nlohmann/json.hpp>
using json = nlohmann::json;

// Parse JSON string
auto data = json::parse(R"({"name":"John","age":30})");
std::string name = data["name"];  // "John"
int age = data["age"];            // 30

// Create JSON
json j;
j["name"] = "John";
j["age"] = 30;
j["scores"] = {85, 92, 78};

// Serialize to string
std::string output = j.dump();      // Compact
std::string pretty = j.dump(2);     // Indented

// Structured binding
struct Person { std::string name; int age; };
NLOHMANN_DEFINE_TYPE_NON_INTRUSIVE(Person, name, age)

Person p = data.get<Person>();
json j2 = p;`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// cJSON (popular C JSON library)
#include <cjson/cJSON.h>

// Parse JSON
const char* json_str = "{\"name\":\"John\",\"age\":30}";
cJSON* root = cJSON_Parse(json_str);

cJSON* name = cJSON_GetObjectItem(root, "name");
printf("%s\\n", name->valuestring);  // "John"

cJSON* age = cJSON_GetObjectItem(root, "age");
printf("%d\\n", age->valueint);      // 30

cJSON_Delete(root);

// Create JSON
cJSON* obj = cJSON_CreateObject();
cJSON_AddStringToObject(obj, "name", "John");
cJSON_AddNumberToObject(obj, "age", 30);

char* output = cJSON_Print(obj);     // Pretty
char* compact = cJSON_PrintUnformatted(obj);
printf("%s\\n", output);

free(output);
free(compact);
cJSON_Delete(obj);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Jackson (most popular)
import com.fasterxml.jackson.databind.ObjectMapper;

ObjectMapper mapper = new ObjectMapper();

// Parse JSON to object
String json = "{\"name\":\"John\",\"age\":30}";
Person person = mapper.readValue(json, Person.class);

// Serialize to JSON
String output = mapper.writeValueAsString(person);
String pretty = mapper.writerWithDefaultPrettyPrinter()
    .writeValueAsString(person);

// Dynamic JSON (JsonNode)
JsonNode node = mapper.readTree(json);
String name = node.get("name").asText();

// Gson (Google alternative)
// Gson gson = new Gson();
// Person p = gson.fromJson(json, Person.class);
// String s = gson.toJson(person);

// Record (Java 16+)
record Person(String name, int age) {}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `require 'json'

# Parse JSON string to hash
data = JSON.parse('{"name":"John","age":30}')
puts data["name"]  # "John"

# Serialize to JSON string
json = JSON.generate({ name: "John", age: 30 })
# or
json = { name: "John", age: 30 }.to_json

# Pretty print
pretty = JSON.pretty_generate(data)

# Read/write JSON files
data = JSON.parse(File.read("data.json"))
File.write("data.json", JSON.pretty_generate(data))

# Parse with symbolize names
data = JSON.parse(json, symbolize_names: true)
data[:name]  # "John"

# Custom serialization
class Person
  def to_json(*args)
    { name: @name, age: @age }.to_json(*args)
  end
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

// Codable protocol (built-in)
struct Person: Codable {
    let name: String
    let age: Int
}

let json = #"{"name":"John","age":30}"#.data(using: .utf8)!

// Parse JSON to struct
let decoder = JSONDecoder()
let person = try decoder.decode(Person.self, from: json)
print(person.name)  // "John"

// Serialize struct to JSON
let encoder = JSONEncoder()
encoder.outputFormatting = .prettyPrinted
let data = try encoder.encode(person)
let jsonString = String(data: data, encoding: .utf8)!

// Custom key mapping
struct User: Codable {
    let firstName: String
    enum CodingKeys: String, CodingKey {
        case firstName = "first_name"
    }
}

// Dynamic JSON
let obj = try JSONSerialization.jsonObject(
    with: json) as! [String: Any]
let name = obj["name"] as! String`
    }
  ]}
/>

## Key Takeaways

- **Built-in vs library support** — JavaScript (`JSON.parse`/`JSON.stringify`), Python (`json` module), PHP (`json_decode`/`json_encode`), and Ruby (`JSON.parse`/`to_json`) include JSON in the standard library. Rust uses the `serde` + `serde_json` crates; Go uses `encoding/json`; C and C++ require external libraries like cJSON or nlohmann/json. For web APIs and config parsing, built-in support is convenient; for embedded or systems work, factor in the dependency and build size of JSON libraries.

- **Typed deserialization** — Rust's serde maps JSON to structs with `#[derive(Deserialize)]`; Go uses struct tags: `type Person struct { Name string \`json:"name"\` }`; Swift's `Codable` and C#'s `System.Text.Json` do the same. When you need to work with unknown structure, use dynamic types: `serde_json::Value`, `map[string]interface{}`, `JsonNode`, or `JsonDocument`. Prefer typed deserialization for internal APIs and configs; use dynamic parsing when the schema is flexible or externally controlled.

- **Derive/Codable patterns** — Rust's `#[derive(Serialize, Deserialize)]`, Swift's `Codable`, and C#'s record types enable automatic serialization with minimal boilerplate. You define the struct and get JSON round-trip for free; custom serialization uses `Serialize`/`Deserialize` implementations or attributes like `#[serde(rename = "first_name")]`. This reduces boilerplate and keeps schema and code in sync. For new projects, prefer languages with strong derive/Codable support; avoid manual marshalling unless you need custom logic.

- **Custom serialization and edge cases** — Python's `JSONEncoder` and JavaScript's `replacer`/`reviver` allow custom handling of dates, BigInt, or other non-JSON types. Go's `encoding/json` requires custom `MarshalJSON`/`UnmarshalJSON` for non-standard types. Rust's serde supports `#[serde(serialize_with = "...")]` for custom logic. When dealing with dates, decimals, or special types, check the library's customization options; JavaScript and Python offer flexible hooks, while Go and Rust require more explicit implementations.
