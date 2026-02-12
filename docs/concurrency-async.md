---
sidebar_position: 24
description: "Concurrency models -- async/await, threads, goroutines, and actors across 12 languages"
keywords: [concurrency, async, await, threads, goroutines, actors, parallel]
---

# Concurrency & Async

Concurrency models are one of the biggest differentiators between programming languages. Here's how different languages handle asynchronous programming, threads, and concurrent execution.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Basic Async / Concurrent Execution

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Promises
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("data"), 1000);
    });
};

// Async/await
async function main() {
    const result = await fetchData();
    console.log(result);
}

// Promise.all (parallel)
const [a, b] = await Promise.all([
    fetchData(),
    fetchData(),
]);

// Promise.race (first to complete)
const fastest = await Promise.race([
    fetchData(),
    fetchData(),
]);`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Fibers (PHP 8.1+)
$fiber = new Fiber(function (): void {
    $value = Fiber::suspend('fiber started');
    echo "Fiber resumed with: " . $value;
});

$result = $fiber->start();      // "fiber started"
$fiber->resume('hello');        // "Fiber resumed with: hello"

// Parallel execution with pcntl_fork
$pid = pcntl_fork();
if ($pid == 0) {
    // Child process
    echo "Child process\\n";
    exit(0);
} else {
    // Parent process
    pcntl_wait($status);
    echo "Parent process\\n";
}

// ReactPHP (event loop)
// composer require react/event-loop
$loop = React\\EventLoop\\Loop::get();
$loop->addTimer(1.0, function () {
    echo "Timer fired!\\n";
});
$loop->run();`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Async/await with tokio
use tokio;

async fn fetch_data() -> String {
    tokio::time::sleep(
        tokio::time::Duration::from_secs(1)
    ).await;
    "data".to_string()
}

#[tokio::main]
async fn main() {
    let result = fetch_data().await;
    println!("{}", result);
}

// Parallel execution with join!
let (a, b) = tokio::join!(
    fetch_data(),
    fetch_data(),
);

// Spawning tasks
let handle = tokio::spawn(async {
    fetch_data().await
});
let result = handle.await.unwrap();`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Goroutines (lightweight threads)
go func() {
    fmt.Println("Hello from goroutine")
}()

// Channels for communication
ch := make(chan string)

go func() {
    ch <- "hello"  // Send
}()

msg := <-ch  // Receive
fmt.Println(msg)

// Select (multiplexing channels)
select {
case msg := <-ch1:
    fmt.Println("From ch1:", msg)
case msg := <-ch2:
    fmt.Println("From ch2:", msg)
case <-time.After(time.Second):
    fmt.Println("Timeout")
}

// WaitGroup for synchronization
var wg sync.WaitGroup
for i := 0; i < 5; i++ {
    wg.Add(1)
    go func(id int) {
        defer wg.Done()
        fmt.Println("Worker", id)
    }(i)
}
wg.Wait()`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `import asyncio

# Async/await
async def fetch_data():
    await asyncio.sleep(1)
    return "data"

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())

# Parallel execution with gather
async def main():
    a, b = await asyncio.gather(
        fetch_data(),
        fetch_data(),
    )

# Threading
import threading

def worker():
    print("Worker thread")

thread = threading.Thread(target=worker)
thread.start()
thread.join()

# Multiprocessing
from multiprocessing import Process

def worker():
    print("Worker process")

p = Process(target=worker)
p.start()
p.join()`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// Threads
fn worker(id: usize) void {
    std.debug.print("Worker {}\\n", .{id});
}

pub fn main() !void {
    // Spawn threads
    var threads: [5]std.Thread = undefined;
    for (&threads, 0..) |*t, i| {
        t.* = try std.Thread.spawn(.{}, worker, .{i});
    }

    // Join all threads
    for (threads) |t| {
        t.join();
    }
}

// Async I/O with io_uring (Linux)
// Zig provides low-level async through evented I/O
// using std.event and std.io frameworks

// Mutex for synchronization
var mutex = std.Thread.Mutex{};
mutex.lock();
defer mutex.unlock();
// critical section`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Async/await
async Task<string> FetchDataAsync()
{
    await Task.Delay(1000);
    return "data";
}

async Task Main()
{
    string result = await FetchDataAsync();
    Console.WriteLine(result);
}

// Parallel execution
var (a, b) = await (
    FetchDataAsync(),
    FetchDataAsync()
);

// Task.WhenAll
var results = await Task.WhenAll(
    FetchDataAsync(),
    FetchDataAsync()
);

// Parallel.ForEach
Parallel.ForEach(items, item =>
{
    Process(item);
});

// Threads
var thread = new Thread(() =>
{
    Console.WriteLine("Worker thread");
});
thread.Start();
thread.Join();`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <thread>
#include <future>
#include <mutex>

// Threads
std::thread t([]() {
    std::cout << "Worker thread" << std::endl;
});
t.join();

// Async/future
auto future = std::async(std::launch::async, []() {
    std::this_thread::sleep_for(
        std::chrono::seconds(1)
    );
    return std::string("data");
});
std::string result = future.get();

// Mutex
std::mutex mtx;
{
    std::lock_guard<std::mutex> lock(mtx);
    // critical section
}

// Condition variables
std::condition_variable cv;
std::unique_lock<std::mutex> lk(mtx);
cv.wait(lk, []{ return ready; });`
    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <pthread.h>

// POSIX threads
void* worker(void* arg) {
    int id = *(int*)arg;
    printf("Worker %d\\n", id);
    return NULL;
}

int main() {
    pthread_t threads[5];
    int ids[5];

    for (int i = 0; i < 5; i++) {
        ids[i] = i;
        pthread_create(&threads[i], NULL,
                       worker, &ids[i]);
    }

    for (int i = 0; i < 5; i++) {
        pthread_join(threads[i], NULL);
    }

    return 0;
}

// Mutex
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_lock(&mutex);
// critical section
pthread_mutex_unlock(&mutex);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// CompletableFuture (async)
CompletableFuture<String> future =
    CompletableFuture.supplyAsync(() -> {
        Thread.sleep(1000);
        return "data";
    });

String result = future.get();

// Parallel streams
List<Integer> results = list.parallelStream()
    .map(x -> x * 2)
    .collect(Collectors.toList());

// Virtual threads (Java 21+)
Thread.startVirtualThread(() -> {
    System.out.println("Virtual thread");
});

// ExecutorService
ExecutorService executor =
    Executors.newFixedThreadPool(4);
Future<String> f = executor.submit(() -> "result");
executor.shutdown();

// Threads
Thread thread = new Thread(() -> {
    System.out.println("Worker");
});
thread.start();
thread.join();`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Threads
thread = Thread.new do
  puts "Worker thread"
end
thread.join

# Multiple threads
threads = 5.times.map do |i|
  Thread.new(i) do |id|
    puts "Worker #{id}"
  end
end
threads.each(&:join)

# Mutex
mutex = Mutex.new
mutex.synchronize do
  # critical section
end

# Fibers (cooperative concurrency)
fiber = Fiber.new do
  Fiber.yield "first"
  Fiber.yield "second"
  "third"
end

puts fiber.resume  # "first"
puts fiber.resume  # "second"

# Ractor (Ruby 3.0+ true parallelism)
ractor = Ractor.new do
  Ractor.yield "hello from ractor"
end
puts ractor.take`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Structured concurrency (Swift 5.5+)
func fetchData() async -> String {
    try? await Task.sleep(nanoseconds: 1_000_000_000)
    return "data"
}

// Async/await
Task {
    let result = await fetchData()
    print(result)
}

// Parallel execution with async let
async let a = fetchData()
async let b = fetchData()
let results = await (a, b)

// TaskGroup
await withTaskGroup(of: String.self) { group in
    for i in 0..<5 {
        group.addTask {
            return await fetchData()
        }
    }
    for await result in group {
        print(result)
    }
}

// Actors (thread-safe state)
actor Counter {
    private var count = 0
    func increment() { count += 1 }
    func getCount() -> Int { count }
}`
    }
  ]}
/>

## Thread Safety & Synchronization

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// JavaScript is single-threaded (event loop)
// No shared memory issues in main thread

// Web Workers (browser) / Worker Threads (Node.js)
const { Worker } = require('worker_threads');

const worker = new Worker('./worker.js');
worker.postMessage({ data: 'hello' });
worker.on('message', (msg) => {
    console.log('From worker:', msg);
});

// SharedArrayBuffer (shared memory)
const buffer = new SharedArrayBuffer(1024);
const view = new Int32Array(buffer);
Atomics.add(view, 0, 1);  // Atomic operation`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// PHP is typically single-threaded per request
// Use extensions for true threading

// Shared memory with shmop
$shm = shmop_open(123, "c", 0644, 100);
shmop_write($shm, "data", 0);
$data = shmop_read($shm, 0, 4);
shmop_delete($shm);

// Semaphores
$sem = sem_get(1234);
sem_acquire($sem);
// critical section
sem_release($sem);`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `use std::sync::{Arc, Mutex, RwLock};

// Mutex (mutual exclusion)
let counter = Arc::new(Mutex::new(0));

let handles: Vec<_> = (0..5).map(|_| {
    let counter = Arc::clone(&counter);
    std::thread::spawn(move || {
        let mut num = counter.lock().unwrap();
        *num += 1;
    })
}).collect();

for handle in handles {
    handle.join().unwrap();
}

// RwLock (multiple readers, one writer)
let data = Arc::new(RwLock::new(vec![1, 2, 3]));
let read = data.read().unwrap();
// Channels
use std::sync::mpsc;
let (tx, rx) = mpsc::channel();
tx.send("hello").unwrap();
let msg = rx.recv().unwrap();`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `import "sync"

// Mutex
var mu sync.Mutex
mu.Lock()
// critical section
mu.Unlock()

// RWMutex
var rw sync.RWMutex
rw.RLock()   // Read lock
rw.RUnlock()
rw.Lock()    // Write lock
rw.Unlock()

// Atomic operations
import "sync/atomic"
var counter int64
atomic.AddInt64(&counter, 1)
val := atomic.LoadInt64(&counter)

// Once (run exactly once)
var once sync.Once
once.Do(func() {
    fmt.Println("Only once")
})`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `import threading

# Lock
lock = threading.Lock()
with lock:
    # critical section
    pass

# RLock (reentrant)
rlock = threading.RLock()

# Semaphore
sem = threading.Semaphore(3)
with sem:
    # max 3 concurrent
    pass

# Event
event = threading.Event()
event.set()    # Signal
event.wait()   # Wait for signal
event.clear()  # Reset

# Queue (thread-safe)
from queue import Queue
q = Queue()
q.put("item")
item = q.get()`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");

// Mutex
var mutex = std.Thread.Mutex{};
mutex.lock();
defer mutex.unlock();
// critical section

// Atomic operations
var counter = std.atomic.Value(u32).init(0);
_ = counter.fetchAdd(1, .seq_cst);
const val = counter.load(.seq_cst);

// ResetEvent (signaling)
var event = std.Thread.ResetEvent{};
event.set();   // Signal
event.wait();  // Wait`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Lock
private readonly object _lock = new();

lock (_lock)
{
    // critical section
}

// SemaphoreSlim
var sem = new SemaphoreSlim(3);
await sem.WaitAsync();
try { /* work */ }
finally { sem.Release(); }

// Channel (producer-consumer)
var channel = Channel.CreateUnbounded<string>();
await channel.Writer.WriteAsync("item");
var item = await channel.Reader.ReadAsync();

// Interlocked (atomic)
int counter = 0;
Interlocked.Increment(ref counter);`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `#include <mutex>
#include <atomic>
#include <shared_mutex>

// Mutex with lock_guard
std::mutex mtx;
{
    std::lock_guard<std::mutex> lock(mtx);
    // critical section
}

// shared_mutex (read-write lock)
std::shared_mutex rw_mtx;
{
    std::shared_lock lock(rw_mtx);  // Read
}
{
    std::unique_lock lock(rw_mtx);  // Write
}

// Atomic
std::atomic<int> counter{0};
counter.fetch_add(1);
int val = counter.load();`
    },
    {
      name: 'C',
      lang: 'c',
      code: `#include <pthread.h>
#include <stdatomic.h>

// Mutex
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_lock(&mutex);
// critical section
pthread_mutex_unlock(&mutex);

// Read-write lock
pthread_rwlock_t rwlock = PTHREAD_RWLOCK_INITIALIZER;
pthread_rwlock_rdlock(&rwlock);  // Read
pthread_rwlock_unlock(&rwlock);
pthread_rwlock_wrlock(&rwlock);  // Write
pthread_rwlock_unlock(&rwlock);

// Atomic (C11)
atomic_int counter = 0;
atomic_fetch_add(&counter, 1);
int val = atomic_load(&counter);`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// synchronized
synchronized (this) {
    // critical section
}

// ReentrantLock
ReentrantLock lock = new ReentrantLock();
lock.lock();
try { /* work */ }
finally { lock.unlock(); }

// AtomicInteger
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet();
int val = counter.get();

// ConcurrentHashMap
ConcurrentHashMap<String, Integer> map =
    new ConcurrentHashMap<>();
map.put("key", 1);

// BlockingQueue
BlockingQueue<String> queue =
    new LinkedBlockingQueue<>();
queue.put("item");
String item = queue.take();`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Mutex
mutex = Mutex.new
mutex.synchronize do
  # critical section
end

# Queue (thread-safe)
require 'thread'
queue = Queue.new
queue << "item"
item = queue.pop

# ConditionVariable
cv = ConditionVariable.new
mutex.synchronize do
  cv.wait(mutex)  # Wait
end
mutex.synchronize do
  cv.signal        # Wake one
  cv.broadcast     # Wake all
end

# Concurrent::Ruby gem
# gem install concurrent-ruby
require 'concurrent'
future = Concurrent::Future.execute { 42 }
puts future.value`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Actors (built-in thread safety)
actor BankAccount {
    private var balance: Double = 0

    func deposit(_ amount: Double) {
        balance += amount
    }

    func getBalance() -> Double {
        return balance
    }
}

let account = BankAccount()
await account.deposit(100)
let balance = await account.getBalance()

// DispatchQueue
DispatchQueue.global().async {
    // Background work
    DispatchQueue.main.async {
        // Update UI
    }
}

// NSLock
let lock = NSLock()
lock.lock()
// critical section
lock.unlock()`
    }
  ]}
/>

## Key Takeaways

- **Concurrency models vary widely** -- Go uses goroutines with channels (CSP style): `go func() { ch <- "hello" }` and `msg := <-ch`. JavaScript, Python, Rust, C#, and Swift use async/await: `async def fetch_data()` in Python, `async fn fetch_data()` in Rust with tokio, `async Task<string> FetchDataAsync()` in C#. C, C++, and Java use traditional OS threads with `pthread_create`, `std::thread`, or `Thread.start()`, plus mutexes for synchronization. Goroutines are lightweight (millions possible); threads are heavier. Async/await suits I/O-bound work; threads suit CPU-bound parallelism. Choose Go for simple concurrency; choose async/await for I/O-heavy servers; choose threads when you need true parallelism and control.

- **Channel-based communication is first-class in Go** -- Go's built-in channels and `select` make producer-consumer patterns idiomatic: `ch := make(chan string)`, `ch <- "msg"`, `msg := <-ch`, and `select { case msg := <-ch1: ... case msg := <-ch2: ... }`. Rust offers `std::sync::mpsc::channel()` and C# has `Channel.CreateUnbounded<T>()`, but they are library features. Go's design encourages "share memory by communicating" rather than mutexes. If you build pipelines, worker pools, or event-driven systems, Go's channels are the most ergonomic; Rust and C# provide similar power with more setup.

- **Go and Rust excel at concurrency** -- Go's goroutines are lightweight (2KB stacks, multiplexed onto OS threads) and easy to spawn: `go worker(id)`. Rust's ownership model prevents data races at compile time: the compiler rejects sharing mutable state across threads without synchronization. For example, `Arc<Mutex<i32>>` in Rust ensures safe shared access. Go relies on channels and discipline; Rust enforces safety statically. Choose Go when you want simple, fast concurrency with minimal friction; choose Rust when you need maximum safety and performance without a garbage collector.

- **Swift introduces actors** -- Actors provide built-in thread-safe shared state by serializing access: `actor Counter { private var count = 0; func increment() { count += 1 } }` -- all methods run serially, so no data races. You call with `await account.deposit(100)`. This replaces manual `Mutex`/`Lock` patterns. Swift's actors integrate with async/await and structured concurrency. If you build concurrent systems in Swift (e.g., iOS/macOS), prefer actors over manual locking; for other languages, use mutexes or channel-based designs.

- **JavaScript is single-threaded** -- The event loop handles async via callbacks and Promises: `await fetch('/api')` does not block the thread; it yields until the response arrives. True parallelism requires Web Workers (browser) or Worker Threads (Node.js) with `postMessage` for communication. CPU-heavy work (hashing, image processing) blocks the main thread; offload it to workers. For I/O-bound Node.js servers, async/await is sufficient; for CPU-bound tasks, add workers or consider a multi-threaded language like Go or Rust.
