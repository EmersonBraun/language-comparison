# Classes & OOP

Object-Oriented Programming concepts vary across languages. Here's how classes, inheritance, interfaces, and polymorphism work in different languages.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Class Definition and Instantiation

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// ES6 Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
}

// Instantiation
const person = new Person("John", 30);

// Inheritance
class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
    
    study() {
        return \`\${this.name} is studying\`;
    }
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Class definition
class Person {
    private $name;
    private $age;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    public function greet() {
        return "Hello, I'm " . $this->name;
    }
}

// Instantiation
$person = new Person("John", 30);

// Inheritance
class Student extends Person {
    private $school;
    
    public function __construct($name, $age, $school) {
        parent::__construct($name, $age);
        $this->school = $school;
    }
    
    public function study() {
        return $this->name . " is studying";
    }
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Structs with impl blocks
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Person {
        Person { name, age }
    }
    
    fn greet(&self) -> String {
        format!("Hello, I'm {}", self.name)
    }
}

// Traits (similar to interfaces)
trait Greetable {
    fn greet(&self) -> String;
}

impl Greetable for Person {
    fn greet(&self) -> String {
        format!("Hello, I'm {}", self.name)
    }
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Structs with methods
type Person struct {
    name string
    age  int
}

func NewPerson(name string, age int) *Person {
    return &Person{name: name, age: age}
}

func (p *Person) Greet() string {
    return fmt.Sprintf("Hello, I'm %s", p.name)
}

// Interfaces
type Greetable interface {
    Greet() string
}

// Embedding (composition)
type Student struct {
    Person
    school string
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Class definition
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I'm {self.name}"

# Instantiation
person = Person("John", 30)

# Inheritance
class Student(Person):
    def __init__(self, name, age, school):
        super().__init__(name, age)
        self.school = school
    
    def study(self):
        return f"{self.name} is studying"`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Structs with methods
const Person = struct {
    name: []const u8,
    age: u32,
    
    pub fn init(name: []const u8, age: u32) Person {
        return Person{
            .name = name,
            .age = age,
        };
    }
    
    pub fn greet(self: Person) []const u8 {
        return "Hello, I'm " ++ self.name;
    }
};

// Interfaces (using function pointers)
const Greetable = struct {
    greet: fn (*const anyopaque) []const u8,
};`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Class definition
public class Person
{
    private string name;
    private int age;
    
    public Person(string name, int age)
    {
        this.name = name;
        this.age = age;
    }
    
    public virtual string Greet()
    {
        return $\"Hello, I'm {name}\";
    }
}

// Instantiation
var person = new Person("John", 30);

// Inheritance
public class Student : Person
{
    private string school;
    
    public Student(string name, int age, string school) 
        : base(name, age)
    {
        this.school = school;
    }
    
    public override string Greet()
    {
        return base.Greet() + $" and I study at {school}";
    }
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Class definition
class Person {
private:
    std::string name;
    int age;
    
public:
    Person(const std::string& name, int age) 
        : name(name), age(age) {}
    
    virtual std::string greet() const {
        return "Hello, I'm " + name;
    }
    
    virtual ~Person() = default;
};

// Instantiation
Person person("John", 30);

// Inheritance
class Student : public Person {
private:
    std::string school;
    
public:
    Student(const std::string& name, int age, 
            const std::string& school)
        : Person(name, age), school(school) {}
    
    std::string greet() const override {
        return Person::greet() + " and I study at " + school;
    }
};`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Struct with function pointers (OOP-like)
typedef struct {
    char name[50];
    int age;
    void (*greet)(struct Person*);
} Person;

void person_greet(Person* self) {
    printf("Hello, I'm %s\\n", self->name);
}

Person* person_new(const char* name, int age) {
    Person* p = malloc(sizeof(Person));
    strcpy(p->name, name);
    p->age = age;
    p->greet = person_greet;
    return p;
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Class definition
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String greet() {
        return "Hello, I'm " + name;
    }
}

// Instantiation
Person person = new Person("John", 30);

// Inheritance
public class Student extends Person {
    private String school;
    
    public Student(String name, int age, String school) {
        super(name, age);
        this.school = school;
    }
    
    @Override
    public String greet() {
        return super.greet() + " and I study at " + school;
    }
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Class definition
class Person
    def initialize(name, age)
        @name = name
        @age = age
    end
    
    def greet
        "Hello, I'm #{@name}"
    end
end

# Instantiation
person = Person.new("John", 30)

# Inheritance
class Student < Person
    def initialize(name, age, school)
        super(name, age)
        @school = school
    end
    
    def study
        "#{@name} is studying"
    end
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Class definition
class Person {
    private var name: String
    private var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
    
    func greet() -> String {
        "Hello, I'm \\(name)"
    }
}

// Instantiation
let person = Person(name: "John", age: 30)

// Inheritance
class Student: Person {
    private var school: String
    
    init(name: String, age: Int, school: String) {
        self.school = school
        super.init(name: name, age: age)
    }
    
    override func greet() -> String {
        super.greet() + " and I study at \\(school)"
    }
}`
    }
  ]}
/>

## Interfaces and Polymorphism

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// No native interfaces, use duck typing
class Dog {
    makeSound() {
        return "Woof!";
    }
}

class Cat {
    makeSound() {
        return "Meow!";
    }
}

// Polymorphism
function animalSound(animal) {
    return animal.makeSound();
}

// TypeScript interfaces
interface Animal {
    makeSound(): string;
}`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Interfaces
interface Animal {
    public function makeSound(): string;
}

class Dog implements Animal {
    public function makeSound(): string {
        return "Woof!";
    }
}

class Cat implements Animal {
    public function makeSound(): string {
        return "Meow!";
    }
}

// Polymorphism
function animalSound(Animal $animal): string {
    return $animal->makeSound();
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Traits (interfaces)
trait Animal {
    fn make_sound(&self) -> String;
}

struct Dog;
impl Animal for Dog {
    fn make_sound(&self) -> String {
        "Woof!".to_string()
    }
}

struct Cat;
impl Animal for Cat {
    fn make_sound(&self) -> String {
        "Meow!".to_string()
    }
}

// Polymorphism
fn animal_sound(animal: &dyn Animal) -> String {
    animal.make_sound()
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Interfaces
type Animal interface {
    MakeSound() string
}

type Dog struct{}
func (d Dog) MakeSound() string {
    return "Woof!"
}

type Cat struct{}
func (c Cat) MakeSound() string {
    return "Meow!"
}

// Polymorphism
func AnimalSound(a Animal) string {
    return a.MakeSound()
}`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Duck typing (no explicit interfaces)
class Dog:
    def make_sound(self):
        return "Woof!"

class Cat:
    def make_sound(self):
        return "Meow!"

# Polymorphism
def animal_sound(animal):
    return animal.make_sound()

# ABC (Abstract Base Classes)
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def make_sound(self):
        pass`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Function pointers (interface-like)
const Animal = struct {
    make_sound: fn (*const anyopaque) []const u8,
};

const Dog = struct {
    pub fn make_sound(self: *const Dog) []const u8 {
        return "Woof!";
    }
};

// Polymorphism through function pointers
fn animal_sound(animal: Animal) []const u8 {
    return animal.make_sound(animal.self);
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Interfaces
public interface IAnimal
{
    string MakeSound();
}

public class Dog : IAnimal
{
    public string MakeSound() => "Woof!";
}

public class Cat : IAnimal
{
    public string MakeSound() => "Meow!";
}

// Polymorphism
public static string AnimalSound(IAnimal animal)
{
    return animal.MakeSound();
}`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Abstract classes
class Animal {
public:
    virtual std::string makeSound() = 0;
    virtual ~Animal() = default;
};

class Dog : public Animal {
public:
    std::string makeSound() override {
        return "Woof!";
    }
};

class Cat : public Animal {
public:
    std::string makeSound() override {
        return "Meow!";
    }
};

// Polymorphism
std::string animalSound(Animal* animal) {
    return animal->makeSound();
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Function pointers in structs
typedef struct {
    void* self;
    char* (*makeSound)(void*);
} Animal;

char* dog_makeSound(void* self) {
    return "Woof!";
}

char* cat_makeSound(void* self) {
    return "Meow!";
}

// Polymorphism
char* animalSound(Animal* animal) {
    return animal->makeSound(animal->self);
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Interfaces
public interface Animal {
    String makeSound();
}

public class Dog implements Animal {
    @Override
    public String makeSound() {
        return "Woof!";
    }
}

public class Cat implements Animal {
    @Override
    public String makeSound() {
        return "Meow!";
    }
}

// Polymorphism
public static String animalSound(Animal animal) {
    return animal.makeSound();
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Modules as interfaces
module Animal
    def make_sound
        raise NotImplementedError
    end
end

class Dog
    include Animal
    
    def make_sound
        "Woof!"
    end
end

class Cat
    include Animal
    
    def make_sound
        "Meow!"
    end
end

# Polymorphism
def animal_sound(animal)
    animal.make_sound
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Protocols (interfaces)
protocol Animal {
    func makeSound() -> String
}

class Dog: Animal {
    func makeSound() -> String {
        "Woof!"
    }
}

class Cat: Animal {
    func makeSound() -> String {
        "Meow!"
    }
}

// Polymorphism
func animalSound(_ animal: Animal) -> String {
    animal.makeSound()
}`
    }
  ]}
/>


