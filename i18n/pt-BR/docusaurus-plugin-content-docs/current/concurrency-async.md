---
sidebar_position: 24
description: "Modelos de concorrência -- async/await, threads, goroutines e atores em 12 linguagens"
keywords: [concorrência, async, await, threads, goroutines, atores, paralelo]
---

# Concorrência & Async

Os modelos de concorrência são um dos maiores diferenciadores entre linguagens de programação. Veja como diferentes linguagens lidam com programação assíncrona, threads e execução concorrente.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Execução Básica Async / Concorrente

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

## Segurança de Threads & Sincronização

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

## Principais Conclusões

- **Modelos de concorrência variam amplamente** -- Go usa goroutines com channels (estilo CSP): `go func() { ch <- "hello" }` e `msg := <-ch`. JavaScript, Python, Rust, C# e Swift usam async/await: `async def fetch_data()` em Python, `async fn fetch_data()` em Rust com tokio, `async Task<string> FetchDataAsync()` em C#. C, C++ e Java usam threads tradicionais do SO com `pthread_create`, `std::thread` ou `Thread.start()`, além de mutexes para sincronização. Goroutines são leves (milhões possíveis); threads são mais pesadas. Async/await é adequado para trabalho I/O-bound; threads são adequadas para paralelismo CPU-bound. Escolha Go para concorrência simples; escolha async/await para servidores pesados em I/O; escolha threads quando precisar de paralelismo real e controle.

- **Comunicação baseada em channels é nativa em Go** -- Os channels embutidos do Go e o `select` tornam padrões produtor-consumidor idiomáticos: `ch := make(chan string)`, `ch <- "msg"`, `msg := <-ch` e `select { case msg := <-ch1: ... case msg := <-ch2: ... }`. Rust oferece `std::sync::mpsc::channel()` e C# tem `Channel.CreateUnbounded<T>()`, mas são recursos de biblioteca. O design do Go encoraja "compartilhar memória comunicando" em vez de usar mutexes. Se você constrói pipelines, pools de workers ou sistemas orientados a eventos, os channels do Go são os mais ergonômicos; Rust e C# fornecem poder similar com mais configuração.

- **Go e Rust se destacam em concorrência** -- As goroutines do Go são leves (pilhas de 2KB, multiplexadas em threads do SO) e fáceis de criar: `go worker(id)`. O modelo de ownership do Rust previne data races em tempo de compilação: o compilador rejeita compartilhamento de estado mutável entre threads sem sincronização. Por exemplo, `Arc<Mutex<i32>>` em Rust garante acesso compartilhado seguro. Go depende de channels e disciplina; Rust garante segurança estaticamente. Escolha Go quando quiser concorrência simples e rápida com fricção mínima; escolha Rust quando precisar de máxima segurança e performance sem coletor de lixo.

- **Swift introduz atores** -- Atores fornecem estado compartilhado thread-safe embutido ao serializar o acesso: `actor Counter { private var count = 0; func increment() { count += 1 } }` -- todos os métodos executam serialmente, então não há data races. Você chama com `await account.deposit(100)`. Isso substitui padrões manuais de `Mutex`/`Lock`. Os atores do Swift se integram com async/await e concorrência estruturada. Se você constrói sistemas concorrentes em Swift (ex.: iOS/macOS), prefira atores em vez de locking manual; para outras linguagens, use mutexes ou designs baseados em channels.

- **JavaScript é single-threaded** -- O event loop lida com async via callbacks e Promises: `await fetch('/api')` não bloqueia a thread; ela cede até a resposta chegar. Paralelismo real requer Web Workers (navegador) ou Worker Threads (Node.js) com `postMessage` para comunicação. Trabalho pesado de CPU (hashing, processamento de imagem) bloqueia a thread principal; delegue-o para workers. Para servidores Node.js I/O-bound, async/await é suficiente; para tarefas CPU-bound, adicione workers ou considere uma linguagem multi-threaded como Go ou Rust.
