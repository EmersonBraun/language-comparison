---
sidebar_position: 0
---

# Cómo Usar Esta Guía

¡Bienvenido a la Guía de Comparación de Lenguajes! Este recurso ayuda a los desarrolladores a entender cómo se implementan diferentes conceptos de programación en 12 lenguajes populares.

## ¿Para Quién Es Esto?

- **Principiantes** que quieren aprender conceptos de programación y ver cómo difieren entre lenguajes
- **Desarrolladores experimentados** que aprenden un nuevo lenguaje y quieren mapear rápidamente su conocimiento existente
- **Líderes técnicos** que evalúan lenguajes para un nuevo proyecto
- **Estudiantes** que estudian lenguajes de programación comparados

## Lenguajes Soportados

| Lenguaje | Sistema de Tipos | Paradigma | Ejecución |
|----------|-----------------|-----------|-----------|
| **JavaScript** | Dinámico | Multi-paradigma | Interpretado (JIT) |
| **PHP** | Dinámico | Multi-paradigma | Interpretado |
| **Python** | Dinámico | Multi-paradigma | Interpretado |
| **Ruby** | Dinámico | Multi-paradigma | Interpretado |
| **Go** | Estático | Procedural, Concurrente | Compilado |
| **Rust** | Estático | Multi-paradigma | Compilado |
| **C** | Estático | Procedural | Compilado |
| **C++** | Estático | Multi-paradigma | Compilado |
| **C#** | Estático | Multi-paradigma | Compilado (JIT) |
| **Java** | Estático | Orientado a objetos | Compilado (JIT) |
| **Swift** | Estático | Multi-paradigma | Compilado |
| **Zig** | Estático | Procedural | Compilado |

## Ruta de Aprendizaje Sugerida

### 1. Comienza con lo Básico

Empieza con los conceptos fundamentales que comparten todos los lenguajes de programación. Estos construyen el vocabulario que necesitarás para todo lo demás.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Empezando](./getting-started) | Principiante | Resúmenes de lenguajes, hello world |
| [Comentarios y Documentación](./comments-documentation) | Principiante | Cómo comentar y documentar código |
| [Variables y Tipos](./variables-types) | Principiante | Variables, tipos de datos, sistemas de tipos |
| [Operadores](./operators) | Principiante | Operadores aritméticos, de comparación y lógicos |
| [Constantes y Enums](./constants-enums) | Principiante | Valores inmutables y enumeraciones |

### 2. Flujo de Control

Aprende cómo controlar el flujo de ejecución de tus programas.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Condicionales](./conditionals) | Principiante | if/else, switch, ternario |
| [Bucles](./loops) | Principiante | for, while, do-while, iteradores |
| [Pattern Matching](./pattern-matching) | Intermedio | Patrones match/switch, desestructuración |

### 3. Funciones y Closures

Entiende cómo organizar código reutilizable.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Funciones](./functions) | Principiante | Declaraciones, parámetros, retornos |
| [Closures y Lambdas](./closures-lambdas) | Intermedio | Funciones anónimas, capturas, funciones de orden superior |

### 4. Estructuras de Datos

Trabaja con colecciones y datos estructurados.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Arrays](./arrays) | Principiante | Listas, arrays, slices |
| [Strings](./strings) | Principiante | Manipulación de strings, formateo |
| [Objetos y Structs](./objects-structs) | Intermedio | Datos estructurados, propiedades |
| [Maps y Diccionarios](./maps-dictionaries) | Intermedio | Pares clave-valor, hash maps |

### 5. Programación Orientada a Objetos

Aprende cómo los lenguajes abordan los conceptos de POO.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Clases y POO](./classes-oop) | Intermedio | Clases, herencia, interfaces, polimorfismo |
| [Genéricos y Templates](./generics-templates) | Intermedio | Parámetros de tipo, restricciones |

### 6. Biblioteca Estándar

Utilidades comunes disponibles en la mayoría de los lenguajes.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Regex](./regex) | Intermedio | Expresiones regulares, coincidencia de patrones |
| [Fechas](./dates) | Intermedio | Manipulación de fecha/hora |
| [E/S de Archivos](./file-io) | Intermedio | Lectura y escritura de archivos |
| [JSON y Serialización](./json-serialization) | Intermedio | Serialización/deserialización de datos |

### 7. Web y Red

Construye aplicaciones web en diferentes lenguajes.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Operaciones CRUD](./crud) | Intermedio | Servidores HTTP, APIs REST |

### 8. Conceptos Avanzados

Temas más profundos que diferencian a los lenguajes.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Manejo de Errores](./error-handling) | Intermedio | Excepciones, tipos Result, patrones de error |
| [Null Safety y Opcionales](./null-safety) | Intermedio | Tipos opcionales, manejo de null |
| [Concurrencia y Async](./concurrency-async) | Avanzado | Async/await, threads, goroutines |
| [Gestión de Memoria](./memory-management) | Avanzado | GC, ownership, memoria manual |

### 9. Herramientas y Ecosistema

Herramientas esenciales para desarrolladores en cada lenguaje.

| Tema | Dificultad | Descripción |
|------|-----------|-------------|
| [Módulos e Imports](./modules-imports) | Principiante | Organización de código, imports/exports |
| [Gestión de Paquetes](./package-management) | Principiante | Herramientas de gestión de dependencias |
| [Testing](./testing) | Intermedio | Frameworks de testing unitario |

## Consejos para Usar Esta Guía

1. **Usa las pestañas de lenguaje** -- Haz clic en una pestaña de lenguaje y permanecerá seleccionada en todos los ejemplos de la página
2. **Compara lado a lado** -- La interfaz con pestañas te permite cambiar rápidamente entre lenguajes para ver las diferencias
3. **Empieza con lo que conoces** -- Si ya conoces un lenguaje, empieza ahí y compara con el nuevo que estás aprendiendo
4. **Enfócate en los patrones, no en la sintaxis** -- La sintaxis difiere, pero los patrones subyacentes suelen ser similares
5. **Prueba el código** -- Copia los ejemplos y ejecútalos en tu entorno local para crear memoria muscular
