---
sidebar_position: 28
description: "Frameworks de pruebas unitarias, aserciones y mocking comparados en 12 lenguajes de programación"
keywords: [testing, pruebas unitarias, aserciones, mocking, frameworks de pruebas, TDD]
---

# Testing

Las pruebas unitarias son fundamentales para la calidad del software. Así es como los diferentes lenguajes manejan las pruebas con sus frameworks integrados o más populares.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Pruebas Unitarias Básicas

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Jest (most popular)
// npm install --save-dev jest

// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// math.test.js
const { add } = require('./math');

describe('add', () => {
    test('adds two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('handles negative numbers', () => {
        expect(add(-1, 1)).toBe(0);
    });

    test('handles zero', () => {
        expect(add(0, 0)).toBe(0);
    });
});

// Run: npx jest`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// PHPUnit (standard)
// composer require --dev phpunit/phpunit

use PHPUnit\\Framework\\TestCase;

class MathTest extends TestCase
{
    public function testAdd(): void
    {
        $this->assertEquals(3, add(1, 2));
    }

    public function testNegativeNumbers(): void
    {
        $this->assertEquals(0, add(-1, 1));
    }

    public function testZero(): void
    {
        $this->assertEquals(0, add(0, 0));
    }
}

// Run: ./vendor/bin/phpunit`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Built-in test framework
fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(1, 2), 3);
    }

    #[test]
    fn test_negative() {
        assert_eq!(add(-1, 1), 0);
    }

    #[test]
    #[should_panic(expected = "overflow")]
    fn test_overflow() {
        add(i32::MAX, 1);
    }
}

// Run: cargo test`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Built-in testing package
// File: math_test.go
package math

import "testing"

func TestAdd(t *testing.T) {
    result := Add(1, 2)
    if result != 3 {
        t.Errorf("Add(1, 2) = %d; want 3", result)
    }
}

func TestNegative(t *testing.T) {
    result := Add(-1, 1)
    if result != 0 {
        t.Errorf("Add(-1, 1) = %d; want 0", result)
    }
}

// Table-driven tests (Go idiom)
func TestAddTable(t *testing.T) {
    tests := []struct {
        a, b, want int
    }{
        {1, 2, 3},
        {-1, 1, 0},
        {0, 0, 0},
    }
    for _, tt := range tests {
        got := Add(tt.a, tt.b)
        if got != tt.want {
            t.Errorf("Add(%d, %d) = %d; want %d",
                tt.a, tt.b, got, tt.want)
        }
    }
}

// Run: go test ./...`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# pytest (most popular)
# pip install pytest

# test_math.py
def add(a, b):
    return a + b

def test_add():
    assert add(1, 2) == 3

def test_negative():
    assert add(-1, 1) == 0

def test_zero():
    assert add(0, 0) == 0

# unittest (built-in)
import unittest

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(1, 2), 3)

    def test_negative(self):
        self.assertEqual(add(-1, 1), 0)

# Run: pytest
# Run: python -m unittest`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");
const testing = std.testing;

fn add(a: i32, b: i32) i32 {
    return a + b;
}

test "add two numbers" {
    try testing.expectEqual(@as(i32, 3), add(1, 2));
}

test "negative numbers" {
    try testing.expectEqual(@as(i32, 0), add(-1, 1));
}

test "zero" {
    try testing.expectEqual(@as(i32, 0), add(0, 0));
}

// Run: zig build test`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// xUnit (most popular)
// dotnet add package xunit

using Xunit;

public class MathTests
{
    [Fact]
    public void Add_TwoNumbers_ReturnsSum()
    {
        Assert.Equal(3, Math.Add(1, 2));
    }

    [Fact]
    public void Add_NegativeNumbers_ReturnsZero()
    {
        Assert.Equal(0, Math.Add(-1, 1));
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(-1, 1, 0)]
    [InlineData(0, 0, 0)]
    public void Add_Various(int a, int b, int expected)
    {
        Assert.Equal(expected, Math.Add(a, b));
    }
}

// Run: dotnet test`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Google Test (most popular)
// #include <gtest/gtest.h>

TEST(MathTest, AddTwoNumbers) {
    EXPECT_EQ(add(1, 2), 3);
}

TEST(MathTest, NegativeNumbers) {
    EXPECT_EQ(add(-1, 1), 0);
}

TEST(MathTest, Zero) {
    EXPECT_EQ(add(0, 0), 0);
}

// Catch2 (header-only alternative)
// #include <catch2/catch_test_macros.hpp>

TEST_CASE("add works", "[math]") {
    REQUIRE(add(1, 2) == 3);

    SECTION("negative numbers") {
        REQUIRE(add(-1, 1) == 0);
    }
}

// Run: cmake --build . && ctest`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// Unity (popular C test framework)
// or simple assert-based testing

#include <assert.h>
#include <stdio.h>

int add(int a, int b) { return a + b; }

void test_add() {
    assert(add(1, 2) == 3);
    printf("test_add passed\\n");
}

void test_negative() {
    assert(add(-1, 1) == 0);
    printf("test_negative passed\\n");
}

void test_zero() {
    assert(add(0, 0) == 0);
    printf("test_zero passed\\n");
}

int main() {
    test_add();
    test_negative();
    test_zero();
    printf("All tests passed!\\n");
    return 0;
}

// Compile & run: gcc -o tests test_math.c && ./tests`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// JUnit 5 (standard)
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.*;

class MathTest {
    @Test
    void addTwoNumbers() {
        assertEquals(3, Math.add(1, 2));
    }

    @Test
    void negativeNumbers() {
        assertEquals(0, Math.add(-1, 1));
    }

    @ParameterizedTest
    @CsvSource({"1, 2, 3", "-1, 1, 0", "0, 0, 0"})
    void addVarious(int a, int b, int expected) {
        assertEquals(expected, Math.add(a, b));
    }
}

// Run: mvn test
// Run: gradle test`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# RSpec (most popular)
# gem install rspec

# spec/math_spec.rb
require_relative '../math'

RSpec.describe 'add' do
  it 'adds two numbers' do
    expect(add(1, 2)).to eq(3)
  end

  it 'handles negative numbers' do
    expect(add(-1, 1)).to eq(0)
  end

  it 'handles zero' do
    expect(add(0, 0)).to eq(0)
  end
end

# Minitest (built-in)
require 'minitest/autorun'

class TestMath < Minitest::Test
  def test_add
    assert_equal 3, add(1, 2)
  end
end

# Run: rspec
# Run: ruby test_math.rb`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// XCTest (built-in)
import XCTest
@testable import MyModule

class MathTests: XCTestCase {
    func testAdd() {
        XCTAssertEqual(add(1, 2), 3)
    }

    func testNegative() {
        XCTAssertEqual(add(-1, 1), 0)
    }

    func testZero() {
        XCTAssertEqual(add(0, 0), 0)
    }
}

// Swift Testing (Swift 5.9+)
import Testing

@Test func addTwoNumbers() {
    #expect(add(1, 2) == 3)
}

@Test("Parameterized", arguments: [
    (1, 2, 3), (-1, 1, 0), (0, 0, 0)
])
func addVarious(a: Int, b: Int, expected: Int) {
    #expect(add(a, b) == expected)
}

// Run: swift test`
    }
  ]}
/>

## Mocking y Pruebas Avanzadas

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Jest mocking
jest.mock('./api');
const api = require('./api');

api.fetchUser.mockResolvedValue({ name: 'John' });

test('fetches user', async () => {
    const user = await getUser(1);
    expect(api.fetchUser).toHaveBeenCalledWith(1);
    expect(user.name).toBe('John');
});

// Spies
const spy = jest.spyOn(console, 'log');
doSomething();
expect(spy).toHaveBeenCalledWith('expected');

// Async testing
test('async operation', async () => {
    await expect(fetchData()).resolves.toBe('data');
    await expect(failOp()).rejects.toThrow('error');
});`
    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// PHPUnit mocking
class UserServiceTest extends TestCase
{
    public function testGetUser(): void
    {
        $repo = $this->createMock(UserRepository::class);
        $repo->method('find')
             ->willReturn(new User('John'));

        $service = new UserService($repo);
        $user = $service->getUser(1);

        $this->assertEquals('John', $user->getName());
    }

    // Data providers
    /** @dataProvider additionProvider */
    public function testAdd(int $a, int $b, int $expected): void
    {
        $this->assertEquals($expected, add($a, $b));
    }

    public static function additionProvider(): array
    {
        return [[1, 2, 3], [-1, 1, 0], [0, 0, 0]];
    }
}`
    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Integration tests (tests/ directory)
// File: tests/integration_test.rs
use my_crate::add;

#[test]
fn test_add_integration() {
    assert_eq!(add(1, 2), 3);
}

// Mocking with mockall
use mockall::{automock, predicate::*};

#[automock]
trait UserRepo {
    fn find(&self, id: u32) -> Option<User>;
}

#[test]
fn test_get_user() {
    let mut mock = MockUserRepo::new();
    mock.expect_find()
        .with(eq(1))
        .returning(|_| Some(User { name: "John".into() }));

    let user = mock.find(1).unwrap();
    assert_eq!(user.name, "John");
}`
    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Interfaces for mocking
type UserRepo interface {
    Find(id int) (*User, error)
}

type MockUserRepo struct {
    FindFunc func(int) (*User, error)
}

func (m *MockUserRepo) Find(id int) (*User, error) {
    return m.FindFunc(id)
}

func TestGetUser(t *testing.T) {
    mock := &MockUserRepo{
        FindFunc: func(id int) (*User, error) {
            return &User{Name: "John"}, nil
        },
    }

    user, err := mock.Find(1)
    if err != nil {
        t.Fatal(err)
    }
    if user.Name != "John" {
        t.Errorf("got %s; want John", user.Name)
    }
}

// Benchmarks
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(1, 2)
    }
}
// Run: go test -bench=.`
    },
    {
      name: 'Python',
      lang: 'python',
      code: `# pytest with mocking
from unittest.mock import Mock, patch, MagicMock

def test_get_user():
    mock_repo = Mock()
    mock_repo.find.return_value = User("John")

    service = UserService(mock_repo)
    user = service.get_user(1)

    mock_repo.find.assert_called_once_with(1)
    assert user.name == "John"

# Patching
@patch('mymodule.requests.get')
def test_fetch(mock_get):
    mock_get.return_value.json.return_value = {"name": "John"}
    result = fetch_user(1)
    assert result["name"] == "John"

# Fixtures
import pytest

@pytest.fixture
def user():
    return User("John")

def test_user_name(user):
    assert user.name == "John"`
    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `const std = @import("std");
const testing = std.testing;

// Test with allocator
test "arraylist operations" {
    var list = std.ArrayList(i32).init(testing.allocator);
    defer list.deinit();

    try list.append(42);
    try testing.expectEqual(@as(usize, 1), list.items.len);
    try testing.expectEqual(@as(i32, 42), list.items[0]);
}

// Test error cases
test "division by zero returns error" {
    const result = divide(10, 0);
    try testing.expectError(error.DivisionByZero, result);
}

// Test with temporary directory
test "file operations" {
    var tmp = testing.tmpDir(.{});
    defer tmp.cleanup();
    // test file operations in temporary directory
}`
    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// Moq (popular mocking library)
using Moq;

[Fact]
public void GetUser_ReturnsUser()
{
    var mockRepo = new Mock<IUserRepository>();
    mockRepo.Setup(r => r.Find(1))
            .Returns(new User("John"));

    var service = new UserService(mockRepo.Object);
    var user = service.GetUser(1);

    Assert.Equal("John", user.Name);
    mockRepo.Verify(r => r.Find(1), Times.Once);
}

// FluentAssertions
user.Name.Should().Be("John");
list.Should().HaveCount(3);
action.Should().Throw<ArgumentException>();`
    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// Google Mock
class MockUserRepo : public UserRepo {
public:
    MOCK_METHOD(User*, find, (int id), (override));
};

TEST(UserServiceTest, GetUser) {
    MockUserRepo mock;
    EXPECT_CALL(mock, find(1))
        .WillOnce(Return(new User("John")));

    UserService service(&mock);
    auto user = service.getUser(1);

    EXPECT_EQ(user->getName(), "John");
}

// Catch2 sections
TEST_CASE("Vector operations", "[vector]") {
    std::vector<int> v;

    SECTION("push increases size") {
        v.push_back(1);
        REQUIRE(v.size() == 1);
    }

    SECTION("pop decreases size") {
        v.push_back(1);
        v.pop_back();
        REQUIRE(v.empty());
    }
}`
    },
    {
      name: 'C',
      lang: 'c',
      code: `// CMocka framework
#include <cmocka.h>

static void test_add(void **state) {
    (void)state;
    assert_int_equal(add(1, 2), 3);
}

static void test_negative(void **state) {
    (void)state;
    assert_int_equal(add(-1, 1), 0);
}

int main(void) {
    const struct CMUnitTest tests[] = {
        cmocka_unit_test(test_add),
        cmocka_unit_test(test_negative),
    };
    return cmocka_run_group_tests(tests, NULL, NULL);
}

// Function wrapping for mocking
int __wrap_read_file(const char* path) {
    check_expected(path);
    return mock_type(int);
}`
    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Mockito
import static org.mockito.Mockito.*;

@Test
void testGetUser() {
    UserRepo mockRepo = mock(UserRepo.class);
    when(mockRepo.find(1))
        .thenReturn(new User("John"));

    UserService service = new UserService(mockRepo);
    User user = service.getUser(1);

    assertEquals("John", user.getName());
    verify(mockRepo).find(1);
}

// AssertJ (fluent assertions)
assertThat(user.getName()).isEqualTo("John");
assertThat(list).hasSize(3).contains("item");
assertThatThrownBy(() -> divide(1, 0))
    .isInstanceOf(ArithmeticException.class);`
    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# RSpec mocking
RSpec.describe UserService do
  it 'fetches user' do
    repo = double('UserRepo')
    allow(repo).to receive(:find).with(1)
      .and_return(User.new('John'))

    service = UserService.new(repo)
    user = service.get_user(1)

    expect(user.name).to eq('John')
    expect(repo).to have_received(:find).with(1)
  end

  # Shared examples
  shared_examples 'a collection' do
    it { is_expected.to respond_to(:each) }
    it { is_expected.to respond_to(:size) }
  end

  describe Array do
    it_behaves_like 'a collection'
  end
end`
    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// XCTest with protocols for mocking
protocol UserRepository {
    func find(id: Int) -> User?
}

class MockUserRepo: UserRepository {
    var findResult: User?
    var findCallCount = 0

    func find(id: Int) -> User? {
        findCallCount += 1
        return findResult
    }
}

class UserServiceTests: XCTestCase {
    func testGetUser() {
        let mock = MockUserRepo()
        mock.findResult = User(name: "John")

        let service = UserService(repo: mock)
        let user = service.getUser(id: 1)

        XCTAssertEqual(user?.name, "John")
        XCTAssertEqual(mock.findCallCount, 1)
    }

    // Async testing
    func testAsyncFetch() async throws {
        let data = try await fetchData()
        XCTAssertFalse(data.isEmpty)
    }
}`
    }
  ]}
/>

## Puntos Clave

- **Frameworks integrados vs externos** -- Rust, Go y Zig incluyen ejecutores de pruebas integrados; JavaScript, Python, PHP y C++ dependen de herramientas externas (Jest, pytest, PHPUnit, Google Test).
- **Los estilos de aserción difieren** -- Go usa `if got != want { t.Errorf(...) }` manual; xUnit/Jest usan `Assert.Equal`/`expect().toBe`; RSpec y FluentAssertions favorecen el estilo BDD `expect(x).to eq(y)`.
- **Los enfoques de mocking varían** -- El mocking basado en interfaces es común en Go y Swift; Java/C# usan Mockito/Moq; Python usa `unittest.mock`; Rust usa crates como `mockall` con mocks basados en traits.
- **Las pruebas parametrizadas son idiomáticas en algunos ecosistemas** -- Go favorece las pruebas dirigidas por tablas; xUnit usa `[Theory]` e `[InlineData]`; JUnit 5 y Swift Testing tienen `@ParameterizedTest` y `@Test(arguments:)`.
- **Las pruebas de rendimiento están integradas en Go** -- `go test -bench=.` ejecuta benchmarks; otros lenguajes típicamente usan herramientas separadas (pytest-benchmark, criterion para Rust, etc.).
