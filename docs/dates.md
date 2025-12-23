# Dates

Date and time manipulation is crucial in most applications. Here's how different languages handle dates, both with built-in features and popular libraries.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Built-in Date Operations

### Current Date and Time

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Current date/time
const now = new Date();
console.log(now);  // 2024-01-15T10:30:00.000Z

// Get components
now.getFullYear();    // 2024
now.getMonth();       // 0 (January, 0-indexed)
now.getDate();        // 15
now.getHours();       // 10
now.getMinutes();     // 30
now.getSeconds();     // 0
now.getDay();         // 1 (Monday, 0=Sunday)`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Current date/time
$now = new DateTime();
echo $now->format('Y-m-d H:i:s');  // 2024-01-15 10:30:00

// Get components
$now->format('Y');  // 2024
$now->format('m');  // 01
$now->format('d');  // 15
$now->format('H');  // 10
$now->format('i');  // 30
$now->format('s');  // 00
$now->format('N');  // 1 (Monday, 1-7)`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use std::time::SystemTime;
use std::time::UNIX_EPOCH;

// Current date/time
let now = SystemTime::now();
let duration = now.duration_since(UNIX_EPOCH).unwrap();
let timestamp = duration.as_secs();

// For formatted dates, use chrono crate
// let dt = chrono::Utc::now();
// dt.year()  // 2024
// dt.month() // 1
// dt.day()   // 15`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `import (
    "time"
)

// Current date/time
now := time.Now()
fmt.Println(now)  // 2024-01-15 10:30:00.123456789 -0300 -03

// Get components
now.Year()    // 2024
now.Month()   // January
int(now.Month())  // 1
now.Day()     // 15
now.Hour()    // 10
now.Minute()  // 30
now.Second()  // 0
now.Weekday() // Monday`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `from datetime import datetime

# Current date/time
now = datetime.now()
print(now)  # 2024-01-15 10:30:00.123456

# Get components
now.year    # 2024
now.month   # 1
now.day     # 15
now.hour    # 10
now.minute  # 30
now.second  # 0
now.weekday()  # 0 (Monday, 0-6)`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// Current timestamp
const timestamp = std.time.timestamp();

// For formatted dates, use std.time or external library
// std.time.epoch is Unix epoch
// Manual formatting required`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System;

// Current date/time
DateTime now = DateTime.Now;
Console.WriteLine(now);  // 1/15/2024 10:30:00 AM

// Get components
now.Year;    // 2024
now.Month;   // 1
now.Day;     // 15
now.Hour;    // 10
now.Minute;  // 30
now.Second;  // 0
now.DayOfWeek;  // Monday`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <chrono>
#include <ctime>
#include <iomanip>
#include <sstream>

// Current date/time
auto now = std::chrono::system_clock::now();
auto time_t = std::chrono::system_clock::to_time_t(now);
std::tm* local_time = std::localtime(&time_t);

// Get components
local_time->tm_year + 1900;  // 2024
local_time->tm_mon + 1;       // 1
local_time->tm_mday;          // 15
local_time->tm_hour;          // 10
local_time->tm_min;           // 30
local_time->tm_sec;           // 0`

    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <time.h>

// Current date/time
time_t now;
time(&now);
struct tm *local_time = localtime(&now);

// Get components
local_time->tm_year + 1900;  // 2024
local_time->tm_mon + 1;      // 1
local_time->tm_mday;         // 15
local_time->tm_hour;         // 10
local_time->tm_min;          // 30
local_time->tm_sec;          // 0`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// Current date/time
LocalDateTime now = LocalDateTime.now();
System.out.println(now);  // 2024-01-15T10:30:00

// Get components
now.getYear();    // 2024
now.getMonthValue();  // 1
now.getDayOfMonth();  // 15
now.getHour();    // 10
now.getMinute();  // 30
now.getSecond();  // 0
now.getDayOfWeek();  // MONDAY`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Current date/time
now = Time.now
puts now  # 2024-01-15 10:30:00 -0300

# Get components
now.year    # 2024
now.month   # 1
now.day     # 15
now.hour    # 10
now.min     # 30
now.sec     # 0
now.wday    # 1 (Monday, 0=Sunday)`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

// Current date/time
let now = Date()
print(now)  // 2024-01-15 10:30:00 +0000

// Get components
let calendar = Calendar.current
let components = calendar.dateComponents([.year, .month, .day, .hour, .minute, .second], from: now)
components.year    // 2024
components.month   // 1
components.day     // 15
components.hour    // 10
components.minute  // 30
components.second  // 0`

    }
  ]}
/>

### Creating Dates

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// From string
const date1 = new Date("2024-01-15");
const date2 = new Date("2024-01-15T10:30:00");

// From components
const date3 = new Date(2024, 0, 15);  // month is 0-indexed
const date4 = new Date(2024, 0, 15, 10, 30, 0);

// From timestamp
const date5 = new Date(1705312200000);  // milliseconds`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// From string
$date1 = new DateTime("2024-01-15");
$date2 = new DateTime("2024-01-15 10:30:00");

// From components
$date3 = DateTime::createFromFormat('Y-m-d', '2024-01-15');
$date4 = new DateTime();
$date4->setDate(2024, 1, 15);
$date4->setTime(10, 30, 0);

// From timestamp
$date5 = new DateTime();
$date5->setTimestamp(1705312200);  // seconds`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use std::time::{SystemTime, UNIX_EPOCH, Duration};

// From timestamp
let timestamp = 1705312200;
let date = UNIX_EPOCH + Duration::from_secs(timestamp);

// With chrono crate:
// use chrono::NaiveDate;
// let date = NaiveDate::from_ymd(2024, 1, 15);
// let datetime = NaiveDate::from_ymd(2024, 1, 15).and_hms(10, 30, 0);`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `import (
    "time"
)

// From string
date1, _ := time.Parse("2006-01-02", "2024-01-15")
date2, _ := time.Parse("2006-01-02 15:04:05", "2024-01-15 10:30:00")

// From components
date3 := time.Date(2024, 1, 15, 0, 0, 0, 0, time.UTC)
date4 := time.Date(2024, 1, 15, 10, 30, 0, 0, time.UTC)

// From timestamp
date5 := time.Unix(1705312200, 0)  // seconds`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `from datetime import datetime, date

# From string
date1 = datetime.strptime("2024-01-15", "%Y-%m-%d")
date2 = datetime.strptime("2024-01-15 10:30:00", "%Y-%m-%d %H:%M:%S")

# From components
date3 = date(2024, 1, 15)
date4 = datetime(2024, 1, 15, 10, 30, 0)

# From timestamp
date5 = datetime.fromtimestamp(1705312200)  # seconds`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// From timestamp
const timestamp: i64 = 1705312200;
const date = std.time.epoch.EpochSeconds{ .secs = @intCast(timestamp) };

// Manual component construction
// Use std.time or external library for parsing`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System;

// From string
DateTime date1 = DateTime.Parse("2024-01-15");
DateTime date2 = DateTime.Parse("2024-01-15 10:30:00");

// From components
DateTime date3 = new DateTime(2024, 1, 15);
DateTime date4 = new DateTime(2024, 1, 15, 10, 30, 0);

// From timestamp
DateTime date5 = DateTimeOffset.FromUnixTimeSeconds(1705312200).DateTime;`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <chrono>
#include <ctime>
#include <sstream>
#include <iomanip>

// From string
std::tm tm = {};
std::istringstream ss("2024-01-15 10:30:00");
ss >> std::get_time(&tm, "%Y-%m-%d %H:%M:%S");
auto time_point = std::chrono::system_clock::from_time_t(std::mktime(&tm));

// From components
std::tm tm = {};
tm.tm_year = 2024 - 1900;
tm.tm_mon = 0;  // January
tm.tm_mday = 15;
tm.tm_hour = 10;
tm.tm_min = 30;
tm.tm_sec = 0;
auto time_point = std::chrono::system_clock::from_time_t(std::mktime(&tm));`

    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <time.h>

// From components
struct tm tm = {0};
tm.tm_year = 2024 - 1900;
tm.tm_mon = 0;  // January
tm.tm_mday = 15;
tm.tm_hour = 10;
tm.tm_min = 30;
tm.tm_sec = 0;
time_t time = mktime(&tm);

// From timestamp
time_t timestamp = 1705312200;
struct tm *local_time = localtime(&timestamp);`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

// From string
LocalDateTime date1 = LocalDateTime.parse("2024-01-15T00:00:00");
LocalDateTime date2 = LocalDateTime.parse("2024-01-15T10:30:00");

// From components
LocalDateTime date3 = LocalDateTime.of(2024, 1, 15, 0, 0, 0);
LocalDateTime date4 = LocalDateTime.of(2024, 1, 15, 10, 30, 0);

// From timestamp
LocalDateTime date5 = LocalDateTime.ofEpochSecond(1705312200, 0, java.time.ZoneOffset.UTC);`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# From string
date1 = Time.parse("2024-01-15")
date2 = Time.parse("2024-01-15 10:30:00")

# From components
date3 = Time.new(2024, 1, 15)
date4 = Time.new(2024, 1, 15, 10, 30, 0)

# From timestamp
date5 = Time.at(1705312200)  # seconds`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

// From string
let formatter = DateFormatter()
formatter.dateFormat = "yyyy-MM-dd"
let date1 = formatter.date(from: "2024-01-15")

formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
let date2 = formatter.date(from: "2024-01-15 10:30:00")

// From components
var components = DateComponents()
components.year = 2024
components.month = 1
components.day = 15
components.hour = 10
components.minute = 30
let date3 = Calendar.current.date(from: components)

// From timestamp
let date4 = Date(timeIntervalSince1970: 1705312200)`

    }
  ]}
/>

### Formatting Dates

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `const date = new Date(2024, 0, 15, 10, 30, 0);

// Basic formatting
date.toISOString();        // "2024-01-15T10:30:00.000Z"
date.toLocaleDateString(); // "1/15/2024" (locale-dependent)
date.toLocaleString();     // "1/15/2024, 10:30:00 AM"

// Custom formatting (manual or use Intl)
const formatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
});
formatter.format(date);  // "01/15/2024, 10:30 AM"`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
$date = new DateTime("2024-01-15 10:30:00");

// Formatting
$date->format('Y-m-d');           // "2024-01-15"
$date->format('Y-m-d H:i:s');     // "2024-01-15 10:30:00"
$date->format('F j, Y');          // "January 15, 2024"
$date->format('D, M j, Y g:i A'); // "Mon, Jan 15, 2024 10:30 AM"`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use std::time::SystemTime;
use std::time::UNIX_EPOCH;

// With chrono crate:
// use chrono::{DateTime, Utc};
// let dt = Utc::now();
// dt.format("%Y-%m-%d").to_string()  // "2024-01-15"
// dt.format("%Y-%m-%d %H:%M:%S").to_string()  // "2024-01-15 10:30:00"

// Manual formatting from timestamp
let timestamp = 1705312200;
// Format manually or use chrono`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `import (
    "time"
    "fmt"
)

date := time.Date(2024, 1, 15, 10, 30, 0, 0, time.UTC)

// Formatting
date.Format("2006-01-02")              // "2024-01-15"
date.Format("2006-01-02 15:04:05")     // "2024-01-15 10:30:00"
date.Format("January 2, 2006")        // "January 15, 2024"
date.Format("Mon, Jan 2, 2006 3:04 PM") // "Mon, Jan 15, 2024 10:30 AM"`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `from datetime import datetime

date = datetime(2024, 1, 15, 10, 30, 0)

# Formatting
date.strftime("%Y-%m-%d")              # "2024-01-15"
date.strftime("%Y-%m-%d %H:%M:%S")     # "2024-01-15 10:30:00"
date.strftime("%B %d, %Y")             # "January 15, 2024"
date.strftime("%a, %b %d, %Y %I:%M %p") # "Mon, Jan 15, 2024 10:30 AM"`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// Manual formatting
// Use std.fmt for formatting timestamps
// Or use external library for date formatting`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System;

DateTime date = new DateTime(2024, 1, 15, 10, 30, 0);

// Formatting
date.ToString("yyyy-MM-dd");              // "2024-01-15"
date.ToString("yyyy-MM-dd HH:mm:ss");     // "2024-01-15 10:30:00"
date.ToString("MMMM d, yyyy");            // "January 15, 2024"
date.ToString("ddd, MMM d, yyyy h:mm tt"); // "Mon, Jan 15, 2024 10:30 AM"`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <chrono>
#include <ctime>
#include <iomanip>
#include <sstream>

std::tm tm = {};
tm.tm_year = 2024 - 1900;
tm.tm_mon = 0;
tm.tm_mday = 15;
tm.tm_hour = 10;
tm.tm_min = 30;
tm.tm_sec = 0;
std::time_t time = std::mktime(&tm);

// Formatting
std::ostringstream oss;
oss << std::put_time(&tm, "%Y-%m-%d");           // "2024-01-15"
oss << std::put_time(&tm, "%Y-%m-%d %H:%M:%S"); // "2024-01-15 10:30:00"`

    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <time.h>
#include <stdio.h>

struct tm tm = {0};
tm.tm_year = 2024 - 1900;
tm.tm_mon = 0;
tm.tm_mday = 15;
tm.tm_hour = 10;
tm.tm_min = 30;
tm.tm_sec = 0;
time_t time = mktime(&tm);

// Formatting
char buffer[80];
strftime(buffer, sizeof(buffer), "%Y-%m-%d", &tm);           // "2024-01-15"
strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", &tm); // "2024-01-15 10:30:00"`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

LocalDateTime date = LocalDateTime.of(2024, 1, 15, 10, 30, 0);

// Formatting
date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));              // "2024-01-15"
date.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));     // "2024-01-15 10:30:00"
date.format(DateTimeFormatter.ofPattern("MMMM d, yyyy"));            // "January 15, 2024"
date.format(DateTimeFormatter.ofPattern("EEE, MMM d, yyyy h:mm a")); // "Mon, Jan 15, 2024 10:30 AM"`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `date = Time.new(2024, 1, 15, 10, 30, 0)

# Formatting
date.strftime("%Y-%m-%d")              # "2024-01-15"
date.strftime("%Y-%m-%d %H:%M:%S")     # "2024-01-15 10:30:00"
date.strftime("%B %d, %Y")             # "January 15, 2024"
date.strftime("%a, %b %d, %Y %I:%M %p") # "Mon, Jan 15, 2024 10:30 AM"`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

let date = Date(timeIntervalSince1970: 1705312200)
let formatter = DateFormatter()

// Formatting
formatter.dateFormat = "yyyy-MM-dd"
formatter.string(from: date)  // "2024-01-15"

formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
formatter.string(from: date)  // "2024-01-15 10:30:00"

formatter.dateFormat = "MMMM d, yyyy"
formatter.string(from: date)  // "January 15, 2024"`

    }
  ]}
/>

### Date Arithmetic

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `const date = new Date(2024, 0, 15);

// Add/subtract days
date.setDate(date.getDate() + 7);  // Add 7 days
date.setDate(date.getDate() - 3);  // Subtract 3 days

// Add/subtract months
date.setMonth(date.getMonth() + 1);  // Add 1 month

// Add/subtract years
date.setFullYear(date.getFullYear() + 1);  // Add 1 year

// Difference in milliseconds
const date1 = new Date(2024, 0, 15);
const date2 = new Date(2024, 0, 20);
const diff = date2 - date1;  // 432000000 ms (5 days)`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
$date = new DateTime("2024-01-15");

// Add/subtract
$date->modify("+7 days");   // Add 7 days
$date->modify("-3 days");   // Subtract 3 days
$date->modify("+1 month"); // Add 1 month
$date->modify("+1 year");  // Add 1 year

// Using DateInterval
$interval = new DateInterval("P7D");  // 7 days
$date->add($interval);
$date->sub($interval);

// Difference
$date1 = new DateTime("2024-01-15");
$date2 = new DateTime("2024-01-20");
$diff = $date1->diff($date2);
echo $diff->days;  // 5`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use std::time::{SystemTime, Duration};

// With chrono crate:
// use chrono::{DateTime, Utc, Duration};
// let mut date = Utc::now();
// date = date + Duration::days(7);   // Add 7 days
// date = date - Duration::days(3);   // Subtract 3 days
// 
// let date1 = Utc::now();
// let date2 = date1 + Duration::days(5);
// let diff = date2 - date1;  // Duration`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `import (
    "time"
)

date := time.Date(2024, 1, 15, 0, 0, 0, 0, time.UTC)

// Add/subtract
date = date.AddDate(0, 0, 7)   // Add 7 days
date = date.AddDate(0, 0, -3)  // Subtract 3 days
date = date.AddDate(0, 1, 0)   // Add 1 month
date = date.AddDate(1, 0, 0)   // Add 1 year

// Using Duration
date = date.Add(7 * 24 * time.Hour)  // Add 7 days

// Difference
date1 := time.Date(2024, 1, 15, 0, 0, 0, 0, time.UTC)
date2 := time.Date(2024, 1, 20, 0, 0, 0, 0, time.UTC)
diff := date2.Sub(date1)  // 120h0m0s (5 days)`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `from datetime import datetime, timedelta

date = datetime(2024, 1, 15)

# Add/subtract
date = date + timedelta(days=7)   # Add 7 days
date = date - timedelta(days=3)   # Subtract 3 days
date = date + timedelta(days=30)  # Add ~1 month
date = date + timedelta(days=365) # Add ~1 year

# Difference
date1 = datetime(2024, 1, 15)
date2 = datetime(2024, 1, 20)
diff = date2 - date1  # timedelta(days=5)`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// Manual arithmetic with timestamps
// const timestamp: i64 = 1705312200;
// const days_to_add: i64 = 7 * 24 * 60 * 60;
// const new_timestamp = timestamp + days_to_add;

// Use external library for better date arithmetic`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `using System;

DateTime date = new DateTime(2024, 1, 15);

// Add/subtract
date = date.AddDays(7);    // Add 7 days
date = date.AddDays(-3);   // Subtract 3 days
date = date.AddMonths(1);  // Add 1 month
date = date.AddYears(1);   // Add 1 year

// Difference
DateTime date1 = new DateTime(2024, 1, 15);
DateTime date2 = new DateTime(2024, 1, 20);
TimeSpan diff = date2 - date1;  // 5.00:00:00 (5 days)`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <chrono>

using namespace std::chrono;

auto date = system_clock::now();

// Add/subtract
date = date + days(7);   // Add 7 days
date = date - days(3);   // Subtract 3 days
date = date + months(1); // Add 1 month
date = date + years(1);  // Add 1 year

// Difference
auto date1 = system_clock::now();
auto date2 = date1 + days(5);
auto diff = date2 - date1;  // 5 days duration`

    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <time.h>

time_t date = time(NULL);

// Add/subtract (in seconds)
date += 7 * 24 * 60 * 60;  // Add 7 days
date -= 3 * 24 * 60 * 60;  // Subtract 3 days

// Difference
time_t date1 = time(NULL);
time_t date2 = date1 + (5 * 24 * 60 * 60);
double diff = difftime(date2, date1);  // 432000.0 seconds (5 days)`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

LocalDateTime date = LocalDateTime.of(2024, 1, 15, 0, 0, 0);

// Add/subtract
date = date.plusDays(7);    // Add 7 days
date = date.minusDays(3);   // Subtract 3 days
date = date.plusMonths(1);  // Add 1 month
date = date.plusYears(1);   // Add 1 year

// Difference
LocalDateTime date1 = LocalDateTime.of(2024, 1, 15, 0, 0, 0);
LocalDateTime date2 = LocalDateTime.of(2024, 1, 20, 0, 0, 0);
long diff = ChronoUnit.DAYS.between(date1, date2);  // 5`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `date = Time.new(2024, 1, 15)

# Add/subtract
date = date + (7 * 24 * 60 * 60)  # Add 7 days
date = date - (3 * 24 * 60 * 60)  # Subtract 3 days

# Using methods
date = date + 86400  # Add 1 day (seconds)

# Difference
date1 = Time.new(2024, 1, 15)
date2 = Time.new(2024, 1, 20)
diff = date2 - date1  # 432000.0 seconds (5 days)`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `import Foundation

var date = Date(timeIntervalSince1970: 1705312200)
let calendar = Calendar.current

// Add/subtract
date = calendar.date(byAdding: .day, value: 7, to: date)!   // Add 7 days
date = calendar.date(byAdding: .day, value: -3, to: date)!  // Subtract 3 days
date = calendar.date(byAdding: .month, value: 1, to: date)!  // Add 1 month
date = calendar.date(byAdding: .year, value: 1, to: date)! // Add 1 year

// Difference
let date1 = Date(timeIntervalSince1970: 1705312200)
let date2 = calendar.date(byAdding: .day, value: 5, to: date1)!
let diff = date2.timeIntervalSince(date1)  // 432000.0 seconds (5 days)`

    }
  ]}
/>

## Popular Libraries

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// date-fns (modern, tree-shakeable)
import { format, addDays, differenceInDays, parseISO } from 'date-fns';

const date = new Date(2024, 0, 15);

// Formatting
format(date, 'yyyy-MM-dd');           // "2024-01-15"
format(date, 'MMMM d, yyyy');         // "January 15, 2024"

// Arithmetic
addDays(date, 7);                     // Add 7 days
differenceInDays(date2, date1);       // Difference in days

// Parsing
parseISO("2024-01-15");               // Date object

// moment.js (legacy, but still popular)
const moment = require('moment');

moment().format('YYYY-MM-DD');        // "2024-01-15"
moment().add(7, 'days');              // Add 7 days
moment().subtract(3, 'days');         // Subtract 3 days
moment(date2).diff(moment(date1), 'days');  // Difference`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Carbon (most popular PHP date library)
use Carbon\\Carbon;

$date = Carbon::now();
$date = Carbon::parse("2024-01-15");

// Formatting
$date->format('Y-m-d');               // "2024-01-15"
$date->toDateString();                 // "2024-01-15"
$date->toDateTimeString();             // "2024-01-15 10:30:00"

// Arithmetic
$date->addDays(7);                     // Add 7 days
$date->subDays(3);                     // Subtract 3 days
$date->addMonths(1);                   // Add 1 month
$date->diffInDays($otherDate);         // Difference in days

// Human readable
$date->diffForHumans();                // "2 hours ago"
$date->format('l, F j, Y');            // "Monday, January 15, 2024"`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// chrono (most popular Rust date library)
use chrono::{DateTime, Utc, NaiveDateTime, NaiveDate};
use chrono::format::ParseError;

// Create dates
let date = Utc::now();
let date = DateTime::parse_from_str("2024-01-15 10:30:00", "%Y-%m-%d %H:%M:%S")?;

// Formatting
date.format("%Y-%m-%d").to_string();   // "2024-01-15"
date.format("%B %d, %Y").to_string();  // "January 15, 2024"

// Arithmetic
let new_date = date + chrono::Duration::days(7);
let diff = date2.signed_duration_since(date1);

// Timezone support
let utc: DateTime<Utc> = Utc::now();
let local = utc.with_timezone(&chrono::Local);`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Go's time package is comprehensive, but for more features:
// github.com/jinzhu/now or github.com/araddon/dateparse

import (
    "time"
    "github.com/jinzhu/now"
)

// now provides convenient methods
now.BeginningOfDay()                   // Start of today
now.EndOfDay()                         // End of today
now.BeginningOfWeek()                  // Start of week
now.EndOfMonth()                       // End of month

// Parsing various formats
dateparse.ParseAny("2024-01-15")      // Parse various date formats
dateparse.ParseLocal("2024-01-15 10:30:00")`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `# python-dateutil (extends datetime)
from dateutil import parser, relativedelta
from dateutil.tz import gettz

# Parsing
date = parser.parse("2024-01-15")
date = parser.parse("January 15, 2024")  # Flexible parsing

# Arithmetic with relativedelta
from datetime import datetime
date = datetime(2024, 1, 15)
date + relativedelta.relativedelta(months=+1)  # Add 1 month
date + relativedelta.relativedelta(years=+1)   # Add 1 year

# Timezone support
tz = gettz("America/New_York")
date = datetime.now(tz)

# Arrow (alternative, simpler API)
import arrow
arrow.now()                            # Current time
arrow.get("2024-01-15")                # Parse
arrow.now().shift(days=+7)             # Add 7 days
arrow.now().humanize()                 # "2 hours ago"`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// Zig doesn't have a standard date library
// Use external libraries or manual implementation
// Most projects use std.time for basic operations`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// NodaTime (better than DateTime for complex scenarios)
using NodaTime;

// Create dates
LocalDate date = new LocalDate(2024, 1, 15);
LocalDateTime dateTime = new LocalDateTime(2024, 1, 15, 10, 30, 0);
ZonedDateTime zoned = SystemClock.Instance.GetCurrentInstant()
    .InZone(DateTimeZoneProviders.Tzdb["America/New_York"]);

// Arithmetic
date = date.PlusDays(7);
date = date.PlusMonths(1);
Period period = Period.Between(date1, date2);

// Formatting
date.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture);

// Humanizer (for human-readable dates)
using Humanizer;
date.Humanize();  // "2 hours ago"`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// date (Howard Hinnant's date library, now in C++20)
#include <date/date.h>
#include <date/tz.h>

using namespace date;

// Create dates
auto date = year_month_day{2024_y / January / 15};
auto dateTime = sys_days{date} + 10h + 30min;

// Arithmetic
date = date + months{1};
date = date + years{1};

// Formatting
std::cout << date << std::endl;  // "2024-01-15"

// Timezone support (requires date/tz.h)
auto zoned = make_zoned("America/New_York", 
    std::chrono::system_clock::now());`

    },
    {
      name: 'C',
      lang: 'c',
      code: `// C doesn't have standard date libraries
// Use POSIX time.h or external libraries like:
// - libical (for iCalendar)
// - cJSON with manual date handling
// Most C projects use time.h for basic operations`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Joda-Time (legacy, but still used)
import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;

DateTime date = new DateTime(2024, 1, 15, 10, 30, 0);

// Formatting
date.toString("yyyy-MM-dd");          // "2024-01-15"

// Arithmetic
date.plusDays(7);                     // Add 7 days
date.plusMonths(1);                   // Add 1 month
Days.daysBetween(date1, date2);       // Difference

// Java 8+ java.time is recommended over Joda-Time
// But Joda-Time is still popular for its simplicity`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# ActiveSupport (from Rails, but can be used standalone)
require 'active_support'
require 'active_support/core_ext'

# Extends Time/Date with many methods
Time.now.beginning_of_day
Time.now.end_of_day
Time.now.beginning_of_week
Time.now.end_of_month

# Human readable
2.hours.ago
3.days.from_now
Time.now + 1.week

# Parsing
Time.zone.parse("2024-01-15")

# Chronic (natural language parsing)
require 'chronic'
Chronic.parse("tomorrow")
Chronic.parse("next week")
Chronic.parse("January 15, 2024")`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// SwiftDate (popular third-party library)
import SwiftDate

// Create dates
let date = "2024-01-15".toDate()!
let date = DateInRegion()

// Formatting
date.toFormat("yyyy-MM-dd")           // "2024-01-15"
date.toString(.custom("MMMM d, yyyy")) // "January 15, 2024"

// Arithmetic
date + 7.days                         // Add 7 days
date + 1.months                       // Add 1 month
(date2 - date1).in(.day)              // Difference in days

// Human readable
date.toRelative(style: .full)         // "2 hours ago"

// Timezone support
let ny = Region(calendar: .gregorian, zone: .americaNewYork, locale: .english)
let dateInNY = DateInRegion(region: ny)`

    }
  ]}
/>

