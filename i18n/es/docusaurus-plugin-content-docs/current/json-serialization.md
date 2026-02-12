---
sidebar_position: 20
description: "Parseo, serialización y deserialización de JSON comparados en 12 lenguajes de programación"
keywords: [JSON, serialización, deserialización, parseo, intercambio de datos]
---

# JSON y Serialización

JSON es el formato de intercambio de datos más común. Así es como los diferentes lenguajes manejan el parseo y la serialización de JSON.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Parseo y Serialización de JSON

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

## Puntos Clave

- **Soporte incorporado vs bibliotecas** — JavaScript (`JSON.parse`/`JSON.stringify`), Python (módulo `json`), PHP (`json_decode`/`json_encode`) y Ruby (`JSON.parse`/`to_json`) incluyen JSON en la biblioteca estándar. Rust usa los crates `serde` + `serde_json`; Go usa `encoding/json`; C y C++ requieren bibliotecas externas como cJSON o nlohmann/json. Para APIs web y parseo de configuración, el soporte incorporado es conveniente; para trabajo embebido o de sistemas, ten en cuenta la dependencia y el tamaño del binario de las bibliotecas JSON.

- **Deserialización tipada** — El serde de Rust mapea JSON a structs con `#[derive(Deserialize)]`; Go usa etiquetas de struct: `type Person struct { Name string \`json:"name"\` }`; el `Codable` de Swift y el `System.Text.Json` de C# hacen lo mismo. Cuando necesitas trabajar con estructura desconocida, usa tipos dinámicos: `serde_json::Value`, `map[string]interface{}`, `JsonNode` o `JsonDocument`. Prefiere deserialización tipada para APIs internas y configuraciones; usa parseo dinámico cuando el esquema es flexible o controlado externamente.

- **Patrones derive/Codable** — El `#[derive(Serialize, Deserialize)]` de Rust, el `Codable` de Swift y los tipos record de C# habilitan serialización automática con mínimo código repetitivo. Defines el struct y obtienes ida y vuelta JSON gratis; la serialización personalizada usa implementaciones de `Serialize`/`Deserialize` o atributos como `#[serde(rename = "first_name")]`. Esto reduce el código repetitivo y mantiene el esquema y el código sincronizados. Para proyectos nuevos, prefiere lenguajes con fuerte soporte derive/Codable; evita el marshalling manual a menos que necesites lógica personalizada.

- **Serialización personalizada y casos especiales** — El `JSONEncoder` de Python y el `replacer`/`reviver` de JavaScript permiten manejo personalizado de fechas, BigInt u otros tipos no-JSON. El `encoding/json` de Go requiere `MarshalJSON`/`UnmarshalJSON` personalizados para tipos no estándar. El serde de Rust soporta `#[serde(serialize_with = "...")]` para lógica personalizada. Cuando trabajes con fechas, decimales o tipos especiales, revisa las opciones de personalización de la biblioteca; JavaScript y Python ofrecen hooks flexibles, mientras que Go y Rust requieren implementaciones más explícitas.
