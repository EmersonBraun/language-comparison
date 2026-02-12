---
sidebar_position: 26
description: "Module systems, imports, exports, and code organization across 12 programming languages"
keywords: [modules, imports, exports, namespaces, packages, code organization]
---

# Modules & Imports

Every language has its own way of organizing code into modules and importing functionality. Here's how different languages handle code organization.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Importing Modules

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// ES Modules (modern)
import { readFile } from 'fs';
import express from 'express';
import * as path from 'path';
import { useState as useS } from 'react';  // alias

// Default import
import MyComponent from './MyComponent';

// Dynamic import
const module = await import('./module.js');

// CommonJS (Node.js legacy)
const fs = require('fs');
const { join } = require('path');`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Namespaces
namespace App\\Controllers;

use App\\Models\\User;
use App\\Services\\Auth as AuthService;  // alias
use function App\\Helpers\\format_date;
use const App\\Config\\DB_HOST;

// Autoloading (Composer PSR-4)
// composer.json: "autoload": { "psr-4": { "App\\\\": "src/" } }
require_once 'vendor/autoload.php';

// Manual include
require_once 'config.php';
include 'helpers.php';`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Use declarations
use std::collections::HashMap;
use std::io::{self, Read, Write};
use std::fs;

// Alias
use std::collections::HashMap as Map;

// Re-export
pub use crate::models::User;

// Module declaration
mod models;        // from models.rs or models/mod.rs
mod utils;

// Nested modules
mod database {
    pub fn connect() { /* ... */ }
}

// External crate (from Cargo.toml)
use serde::{Serialize, Deserialize};
use tokio::fs::File;`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `package main

// Single import
import "fmt"

// Multiple imports
import (
    "fmt"
    "os"
    "strings"
    "net/http"

    // External packages
    "github.com/gin-gonic/gin"

    // Alias
    log "github.com/sirupsen/logrus"

    // Blank import (side effects only)
    _ "github.com/lib/pq"
)

// Dot import (not recommended)
import . "fmt"
Println("no prefix needed")`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Import module
import os
import json

# Import specific items
from os.path import join, exists
from collections import defaultdict

# Alias
import numpy as np
from datetime import datetime as dt

# Import everything (not recommended)
from os.path import *

# Relative imports (within package)
from . import utils
from ..models import User
from .helpers import format_date

# Conditional import
try:
    import ujson as json
except ImportError:
    import json`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// Import specific items
const Allocator = std.mem.Allocator;
const ArrayList = std.ArrayList;

// Import another file
const utils = @import("utils.zig");
const result = utils.helper();

// Import from package (build.zig dependency)
const json = @import("json");

// Public declarations for export
pub fn publicFunction() void { }
fn privateFunction() void { }  // file-private

// Comptime imports
const config = @import("config.zig");
const mode = config.build_mode;`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Using directives
using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;

// Alias
using Dict = System.Collections.Generic.Dictionary<string, int>;
using Console = System.Console;

// Static import
using static System.Math;
double r = Sqrt(16);  // No prefix needed

// Global using (C# 10+, project-wide)
global using System.Collections.Generic;

// Namespace declaration
namespace MyApp.Models;

public class User { }

// File-scoped namespace (C# 10+)
namespace MyApp.Services;`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Include headers
#include <iostream>
#include <vector>
#include <string>

// Include project headers
#include "myheader.h"
#include "models/user.h"

// Namespaces
using namespace std;  // (not recommended)
using std::cout;
using std::string;

// Namespace alias
namespace fs = std::filesystem;

// Modules (C++20)
import <iostream>;
import mymodule;

// Define a module
export module mymodule;
export void myFunction() { }`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Include standard headers
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Include project headers
#include "myheader.h"
#include "utils/helpers.h"

// Header guard pattern
#ifndef MY_HEADER_H
#define MY_HEADER_H

void my_function(void);

#endif

// Pragma once (non-standard but widely supported)
#pragma once

// Forward declarations
struct MyStruct;
void process(struct MyStruct* s);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Import classes
import java.util.ArrayList;
import java.util.HashMap;
import java.io.File;

// Import all from package
import java.util.*;

// Static imports
import static java.lang.Math.sqrt;
import static java.lang.Math.*;

// Package declaration
package com.example.models;

public class User {
    // Class implementation
}

// Module system (Java 9+)
// module-info.java
module com.example.app {
    requires java.sql;
    exports com.example.models;
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Require (load file once)
require 'json'
require 'net/http'
require 'date'

# Require relative file
require_relative 'models/user'
require_relative '../config/database'

# Load (always reload)
load 'helpers.rb'

# Modules as namespaces
module MyApp
  module Models
    class User
      # ...
    end
  end
end

# Include module
include Comparable
extend ClassMethods

# Gems (external libraries)
require 'bundler/setup'
require 'sinatra'`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Import module
import Foundation
import UIKit
import SwiftUI

// Import specific symbols
import struct Foundation.Date
import func Foundation.NSLog
import class UIKit.UIViewController

// Conditional import
#if canImport(UIKit)
import UIKit
#elseif canImport(AppKit)
import AppKit
#endif

// Access control for exports
public class User { }      // Available externally
internal class Helper { }  // Module-only (default)
private class Secret { }   // File-only

// Module declaration
// Swift Package Manager: Package.swift
// .target(name: "MyModule", dependencies: [])`
    }
  ]}
/>

## Exporting / Creating Modules

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// ES Module exports
// Named exports
export function greet(name) { return "Hello " + name; }
export const PI = 3.14;
export class User { }

// Default export
export default class App { }

// Re-export
export { greet } from './utils.js';
export * from './helpers.js';

// CommonJS exports
module.exports = { greet, PI };
module.exports.greet = greet;

// package.json
// { "type": "module" }  // Enable ES modules`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// File: src/Models/User.php
namespace App\\Models;

class User {
    public string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }
}

// File: src/Helpers/functions.php
namespace App\\Helpers;

function format_date(\\DateTime $date): string {
    return $date->format('Y-m-d');
}

// composer.json PSR-4 autoloading maps
// namespace prefix to directory:
// "App\\\\": "src/"
// So App\\Models\\User -> src/Models/User.php`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// File: src/lib.rs (library root)
pub mod models;
pub mod utils;

pub fn public_function() { }

// File: src/models/mod.rs
pub mod user;
pub mod post;

// File: src/models/user.rs
pub struct User {
    pub name: String,
    pub email: String,
}

impl User {
    pub fn new(name: String, email: String) -> Self {
        User { name, email }
    }
}

// Cargo.toml
// [lib]
// name = "mylib"`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// File: models/user.go
package models

// Exported (uppercase = public)
type User struct {
    Name  string
    Email string
}

func NewUser(name, email string) *User {
    return &User{Name: name, Email: email}
}

// unexported (lowercase = private to package)
func helper() string {
    return "internal"
}

// go.mod
// module github.com/user/myproject
// go 1.21`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# File: mypackage/__init__.py
from .models import User
from .utils import helper

__all__ = ['User', 'helper']  # Controls * imports

# File: mypackage/models.py
class User:
    def __init__(self, name: str):
        self.name = name

# File: mypackage/utils.py
def helper():
    return "help"

# Private convention (underscore prefix)
def _internal_helper():
    return "private"

# setup.py / pyproject.toml for distribution`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// File: src/user.zig
const std = @import("std");

pub const User = struct {
    name: []const u8,
    email: []const u8,

    pub fn init(name: []const u8, email: []const u8) User {
        return .{ .name = name, .email = email };
    }
};

// Private (no pub keyword)
fn internalHelper() void { }

// File: src/main.zig
const user_mod = @import("user.zig");
const User = user_mod.User;

// build.zig for project configuration
// and dependency management`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// File: Models/User.cs
namespace MyApp.Models;

public class User
{
    public string Name { get; set; }
    public string Email { get; set; }

    public User(string name, string email)
    {
        Name = name;
        Email = email;
    }
}

// Access modifiers control visibility
public class PublicClass { }      // Anywhere
internal class InternalClass { }  // Same assembly
// .csproj file defines the project/assembly`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// File: user.h (header)
#pragma once
#include <string>

namespace myapp {

class User {
public:
    User(const std::string& name);
    std::string getName() const;

private:
    std::string name_;
};

}  // namespace myapp

// File: user.cpp (implementation)
#include "user.h"

namespace myapp {

User::User(const std::string& name) : name_(name) {}
std::string User::getName() const { return name_; }

}  // namespace myapp`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// File: user.h (header / interface)
#ifndef USER_H
#define USER_H

typedef struct {
    char name[100];
    char email[100];
} User;

User* user_create(const char* name, const char* email);
void user_free(User* user);
const char* user_get_name(const User* user);

#endif

// File: user.c (implementation)
#include "user.h"
#include <stdlib.h>
#include <string.h>

User* user_create(const char* name, const char* email) {
    User* u = malloc(sizeof(User));
    strncpy(u->name, name, 99);
    strncpy(u->email, email, 99);
    return u;
}

// static = file-private
static void internal_helper(void) { }`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// File: com/example/models/User.java
package com.example.models;

public class User {
    private String name;
    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() { return name; }
}

// Access modifiers
public class PublicClass { }     // Anywhere
class PackageClass { }           // Same package
// protected = same package + subclasses
// private = same class only

// module-info.java (Java 9+)
module com.example.app {
    exports com.example.models;
    requires java.sql;
}`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# File: lib/my_gem/user.rb
module MyGem
  class User
    attr_accessor :name, :email

    def initialize(name, email)
      @name = name
      @email = email
    end
  end
end

# File: lib/my_gem.rb (entry point)
require_relative 'my_gem/user'
require_relative 'my_gem/utils'

module MyGem
  VERSION = '1.0.0'
end

# Gemspec for gem distribution
# my_gem.gemspec`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// File: Sources/MyModule/User.swift
public struct User {
    public let name: String
    public let email: String

    public init(name: String, email: String) {
        self.name = name
        self.email = email
    }
}

// Access levels
public class PublicType { }   // Other modules
internal class Default { }    // Same module
fileprivate class FilePvt { } // Same file
private class Private { }     // Same scope

// Package.swift (Swift Package Manager)
// .target(name: "MyModule",
//         dependencies: ["Dependency"])`
    }
  ]}
/>

## Key Takeaways

- **Module systems range from simple to strict** -- C uses `#include` (textual inclusion of headers), JavaScript and Python allow flexible `import`/`from` syntax, while Java 9+ (`module-info.java`) and Rust (`Cargo.toml` + `mod` declarations) require explicit module manifests. The stricter approach prevents accidental coupling and makes dependencies traceable at build time. Choose C/JavaScript/Python if you want quick iteration and minimal ceremony; choose Java/Rust if you need strong encapsulation and reproducible builds.

- **Visibility is controlled differently** -- Go uses naming convention: `type User` is exported, `type user` is not. Rust and Swift use keywords: `pub fn` vs `fn`, `public class` vs `internal class`. Java and C# offer fine-grained control with `public`, `private`, `protected`, and package/internal scopes. The naming approach (Go) keeps code minimal but can surprise newcomers; explicit modifiers (Java, C#) make intent clear. Prefer explicit modifiers when building large libraries; Go's convention works well for smaller, cohesive codebases.

- **File-to-module mapping differs** -- Python maps packages to directories via `__init__.py` (e.g., `mypackage/models.py` → `from mypackage.models import User`). Rust maps `mod models` to `models.rs` or `models/mod.rs`. Go ties packages to directories: `package models` in `models/user.go`. C and C++ have no built-in mapping—you manually `#include "path/to/header.h"`. Directory-as-module (Python, Go) reduces boilerplate; explicit `mod` (Rust) gives more control over what's exposed. For greenfield projects, prefer directory-based mapping; for legacy C/C++ codebases, header paths are the norm.

- **Conditional and dynamic imports vary** -- JavaScript supports dynamic `import('./module.js')` for code-splitting and lazy loading. Python uses `try: import ujson except ImportError: import json` for optional dependencies. Swift uses `#if canImport(UIKit)` for platform-specific code (iOS vs macOS). These patterns matter when targeting multiple platforms or when dependencies are optional. Use dynamic imports when bundles must stay small; use conditional imports when you need platform-specific implementations.

- **Re-exports enable cleaner APIs** -- Rust's `pub use crate::models::User` re-exports from a submodule. JavaScript's `export { greet } from './utils.js'` and `export * from './helpers.js'` let you aggregate exports. Python's `__all__ = ['User', 'helper']` controls what `from package import *` exposes. Re-exports let you restructure internals without breaking consumers. Use them when building a public API surface—e.g., a library that exposes a few key types from nested modules—so consumers import from one place instead of deep paths.

