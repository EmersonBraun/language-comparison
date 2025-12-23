# CRUD Operations

CRUD (Create, Read, Update, Delete) operations are fundamental in web development. Here's how to create a minimal HTTP server with all HTTP verbs using the most popular libraries in each language.

import LanguageComparison from '@site/src/components/LanguageComparison';

## Minimal HTTP Server with CRUD

<LanguageComparison
  languages={[
    {
      name: 'JavaScript',
      lang: 'javascript',
      code: `// Express.js
const express = require('express');
const app = express();
app.use(express.json());

// CREATE - POST
app.post('/items', (req, res) => {
  res.status(201).json({ message: 'Item created successfully' });
});

// READ - GET all
app.get('/items', (req, res) => {
  res.json({ message: 'Get all items' });
});

// READ - GET one
app.get('/items/:id', (req, res) => {
  res.json({ message: \`Get item with id: \${req.params.id}\` });
});

// UPDATE - PUT
app.put('/items/:id', (req, res) => {
  res.json({ message: \`Update item with id: \${req.params.id}\` });
});

// DELETE
app.delete('/items/:id', (req, res) => {
  res.status(204).json({ message: \`Delete item with id: \${req.params.id}\` });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});`

    },
    {
      name: 'PHP',
      lang: 'php',
      code: `<?php
// Slim Framework
require 'vendor/autoload.php';

use Slim\\Factory\\AppFactory;
use Psr\\Http\\Message\\ResponseInterface as Response;
use Psr\\Http\\Message\\ServerRequestInterface as Request;

$app = AppFactory::create();
$app->addBodyParsingMiddleware();

// CREATE - POST
$app->post('/items', function (Request $request, Response $response) {
    $response->getBody()->write(json_encode(['message' => 'Item created successfully']));
    return $response->withStatus(201)->withHeader('Content-Type', 'application/json');
});

// READ - GET all
$app->get('/items', function (Request $request, Response $response) {
    $response->getBody()->write(json_encode(['message' => 'Get all items']));
    return $response->withHeader('Content-Type', 'application/json');
});

// READ - GET one
$app->get('/items/{id}', function (Request $request, Response $response, $args) {
    $id = $args['id'];
    $response->getBody()->write(json_encode(['message' => "Get item with id: $id"]));
    return $response->withHeader('Content-Type', 'application/json');
});

// UPDATE - PUT
$app->put('/items/{id}', function (Request $request, Response $response, $args) {
    $id = $args['id'];
    $response->getBody()->write(json_encode(['message' => "Update item with id: $id"]));
    return $response->withHeader('Content-Type', 'application/json');
});

// DELETE
$app->delete('/items/{id}', function (Request $request, Response $response, $args) {
    $id = $args['id'];
    $response->getBody()->write(json_encode(['message' => "Delete item with id: $id"]));
    return $response->withStatus(204)->withHeader('Content-Type', 'application/json');
});

$app->run();`

    },
    {
      name: 'Rust',
      lang: 'rust',
      code: `// Actix-web
use actix_web::{web, App, HttpResponse, HttpServer, Result};

// CREATE - POST
async fn create_item() -> Result<HttpResponse> {
    Ok(HttpResponse::Created().json(serde_json::json!({
        "message": "Item created successfully"
    })))
}

// READ - GET all
async fn get_items() -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "message": "Get all items"
    })))
}

// READ - GET one
async fn get_item(id: web::Path<u32>) -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "message": format!("Get item with id: {}", id)
    })))
}

// UPDATE - PUT
async fn update_item(id: web::Path<u32>) -> Result<HttpResponse> {
    Ok(HttpResponse::Ok().json(serde_json::json!({
        "message": format!("Update item with id: {}", id)
    })))
}

// DELETE
async fn delete_item(id: web::Path<u32>) -> Result<HttpResponse> {
    Ok(HttpResponse::NoContent().json(serde_json::json!({
        "message": format!("Delete item with id: {}", id)
    })))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/items", web::post().to(create_item))
            .route("/items", web::get().to(get_items))
            .route("/items/{id}", web::get().to(get_item))
            .route("/items/{id}", web::put().to(update_item))
            .route("/items/{id}", web::delete().to(delete_item))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}`

    },
    {
      name: 'Go',
      lang: 'go',
      code: `// Gin framework
package main

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

// CREATE - POST
func createItem(c *gin.Context) {
    c.JSON(http.StatusCreated, gin.H{
        "message": "Item created successfully",
    })
}

// READ - GET all
func getItems(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
        "message": "Get all items",
    })
}

// READ - GET one
func getItem(c *gin.Context) {
    id := c.Param("id")
    c.JSON(http.StatusOK, gin.H{
        "message": "Get item with id: " + id,
    })
}

// UPDATE - PUT
func updateItem(c *gin.Context) {
    id := c.Param("id")
    c.JSON(http.StatusOK, gin.H{
        "message": "Update item with id: " + id,
    })
}

// DELETE
func deleteItem(c *gin.Context) {
    id := c.Param("id")
    c.JSON(http.StatusNoContent, gin.H{
        "message": "Delete item with id: " + id,
    })
}

func main() {
    r := gin.Default()
    
    r.POST("/items", createItem)
    r.GET("/items", getItems)
    r.GET("/items/:id", getItem)
    r.PUT("/items/:id", updateItem)
    r.DELETE("/items/:id", deleteItem)
    
    r.Run(":8080")
}`

    },
    {
      name: 'Python',
      lang: 'python',
      code: `# Flask
from flask import Flask, jsonify

app = Flask(__name__)

# CREATE - POST
@app.route('/items', methods=['POST'])
def create_item():
    return jsonify({'message': 'Item created successfully'}), 201

# READ - GET all
@app.route('/items', methods=['GET'])
def get_items():
    return jsonify({'message': 'Get all items'})

# READ - GET one
@app.route('/items/<int:item_id>', methods=['GET'])
def get_item(item_id):
    return jsonify({'message': f'Get item with id: {item_id}'})

# UPDATE - PUT
@app.route('/items/<int:item_id>', methods=['PUT'])
def update_item(item_id):
    return jsonify({'message': f'Update item with id: {item_id}'})

# DELETE
@app.route('/items/<int:item_id>', methods=['DELETE'])
def delete_item(item_id):
    return jsonify({'message': f'Delete item with id: {item_id}'}), 204

if __name__ == '__main__':
    app.run(port=5000)`

    },
    {
      name: 'Zig',
      lang: 'zig',
      code: `// httpz (http.zig) - Express-like framework
const std = @import("std");
const httpz = @import("httpz");

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    const allocator = gpa.allocator();
    defer _ = gpa.deinit();

    var server = try httpz.Server(void).init(allocator, .{ .port = 8080 }, {});
    defer {
        server.stop();
        server.deinit();
    }

    var router = try server.router(.{});
    
    // CREATE - POST
    try router.post("/items", createItem, .{});
    
    // READ - GET all
    try router.get("/items", getItems, .{});
    
    // READ - GET one
    try router.get("/items/:id", getItem, .{});
    
    // UPDATE - PUT
    try router.put("/items/:id", updateItem, .{});
    
    // DELETE
    try router.delete("/items/:id", deleteItem, .{});

    try server.listen();
}

// CREATE - POST
fn createItem(req: *httpz.Request, res: *httpz.Response) !void {
    res.status = 201;
    try res.json(.{ .message = "Item created successfully" }, .{});
}

// READ - GET all
fn getItems(req: *httpz.Request, res: *httpz.Response) !void {
    res.status = 200;
    try res.json(.{ .message = "Get all items" }, .{});
}

// READ - GET one
fn getItem(req: *httpz.Request, res: *httpz.Response) !void {
    const id = req.param("id").?;
    res.status = 200;
    try res.json(.{ .message = try std.fmt.allocPrint(req.arena.allocator(), "Get item with id: {s}", .{id}) }, .{});
}

// UPDATE - PUT
fn updateItem(req: *httpz.Request, res: *httpz.Response) !void {
    const id = req.param("id").?;
    res.status = 200;
    try res.json(.{ .message = try std.fmt.allocPrint(req.arena.allocator(), "Update item with id: {s}", .{id}) }, .{});
}

// DELETE
fn deleteItem(req: *httpz.Request, res: *httpz.Response) !void {
    const id = req.param("id").?;
    res.status = 204;
    try res.json(.{ .message = try std.fmt.allocPrint(req.arena.allocator(), "Delete item with id: {s}", .{id}) }, .{});
}`

    },
    {
      name: 'C#',
      lang: 'csharp',
      code: `// ASP.NET Core Minimal API
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// CREATE - POST
app.MapPost("/items", () => {
    return Results.Created("/items", new { message = "Item created successfully" });
});

// READ - GET all
app.MapGet("/items", () => {
    return Results.Ok(new { message = "Get all items" });
});

// READ - GET one
app.MapGet("/items/{id}", (int id) => {
    return Results.Ok(new { message = $"Get item with id: {id}" });
});

// UPDATE - PUT
app.MapPut("/items/{id}", (int id) => {
    return Results.Ok(new { message = $"Update item with id: {id}" });
});

// DELETE
app.MapDelete("/items/{id}", (int id) => {
    return Results.NoContent();
});

app.Run("http://localhost:5000");`

    },
    {
      name: 'C++',
      lang: 'cpp',
      code: `// cpp-httplib
#include <httplib.h>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

int main() {
    httplib::Server svr;

    // CREATE - POST
    svr.Post("/items", [](const httplib::Request&, httplib::Response& res) {
        json response;
        response["message"] = "Item created successfully";
        res.set_content(response.dump(), "application/json");
        res.status = 201;
    });

    // READ - GET all
    svr.Get("/items", [](const httplib::Request&, httplib::Response& res) {
        json response;
        response["message"] = "Get all items";
        res.set_content(response.dump(), "application/json");
    });

    // READ - GET one
    svr.Get("/items/(\\d+)", [](const httplib::Request& req, httplib::Response& res) {
        std::string id = req.matches[1];
        json response;
        response["message"] = "Get item with id: " + id;
        res.set_content(response.dump(), "application/json");
    });

    // UPDATE - PUT
    svr.Put("/items/(\\d+)", [](const httplib::Request& req, httplib::Response& res) {
        std::string id = req.matches[1];
        json response;
        response["message"] = "Update item with id: " + id;
        res.set_content(response.dump(), "application/json");
    });

    // DELETE
    svr.Delete("/items/(\\d+)", [](const httplib::Request& req, httplib::Response& res) {
        std::string id = req.matches[1];
        json response;
        response["message"] = "Delete item with id: " + id;
        res.set_content(response.dump(), "application/json");
        res.status = 204;
    });

    svr.listen("0.0.0.0", 8080);
    return 0;
}`

    },
    {
      name: 'C',
      lang: 'c',
      code: `// libmicrohttpd
#include <microhttpd.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// HTTP handler (simplified - full implementation requires
// request parsing, JSON handling, routing, etc.)
static int answer_to_connection(void *cls, struct MHD_Connection *connection,
                                const char *url, const char *method,
                                const char *version, const char *upload_data,
                                size_t *upload_data_size, void **con_cls) {
    
    struct MHD_Response *response;
    int ret;
    const char *page;
    
    // Simple routing based on method and URL
    if (strcmp(method, "GET") == 0 && strcmp(url, "/items") == 0) {
        page = "{\"message\": \"Get all items\"}";
    } else if (strcmp(method, "POST") == 0 && strcmp(url, "/items") == 0) {
        page = "{\"message\": \"Item created successfully\"}";
    } else {
        page = "{\"message\": \"CRUD API\"}";
    }
    
    response = MHD_create_response_from_buffer(strlen(page),
                                                (void*)page,
                                                MHD_RESPMEM_PERSISTENT);
    MHD_add_response_header(response, "Content-Type", "application/json");
    ret = MHD_queue_response(connection, MHD_HTTP_OK, response);
    MHD_destroy_response(response);
    
    return ret;
}

int main() {
    struct MHD_Daemon *daemon;
    
    daemon = MHD_start_daemon(MHD_USE_INTERNAL_POLLING_THREAD,
                             8080, NULL, NULL,
                             &answer_to_connection, NULL,
                             MHD_OPTION_END);
    if (NULL == daemon) return 1;
    
    getchar();
    MHD_stop_daemon(daemon);
    return 0;
}

// Note: Full CRUD implementation in C requires extensive
// manual HTTP parsing, JSON handling, and routing logic.`

    },
    {
      name: 'Java',
      lang: 'java',
      code: `// Spring Boot
package com.example.crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
@RestController
@RequestMapping("/items")
public class CrudApplication {
    
    // CREATE - POST
    @PostMapping
    public Map<String, String> createItem() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Item created successfully");
        return response;
    }
    
    // READ - GET all
    @GetMapping
    public Map<String, String> getItems() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Get all items");
        return response;
    }
    
    // READ - GET one
    @GetMapping("/{id}")
    public Map<String, String> getItem(@PathVariable int id) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Get item with id: " + id);
        return response;
    }
    
    // UPDATE - PUT
    @PutMapping("/{id}")
    public Map<String, String> updateItem(@PathVariable int id) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Update item with id: " + id);
        return response;
    }
    
    // DELETE
    @DeleteMapping("/{id}")
    public Map<String, String> deleteItem(@PathVariable int id) {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Delete item with id: " + id);
        return response;
    }
    
    public static void main(String[] args) {
        SpringApplication.run(CrudApplication.class, args);
    }
}`

    },
    {
      name: 'Ruby',
      lang: 'ruby',
      code: `# Sinatra
require 'sinatra'
require 'json'

# CREATE - POST
post '/items' do
  content_type :json
  { message: 'Item created successfully' }.to_json
end

# READ - GET all
get '/items' do
  content_type :json
  { message: 'Get all items' }.to_json
end

# READ - GET one
get '/items/:id' do
  content_type :json
  { message: "Get item with id: #{params[:id]}" }.to_json
end

# UPDATE - PUT
put '/items/:id' do
  content_type :json
  { message: "Update item with id: #{params[:id]}" }.to_json
end

# DELETE
delete '/items/:id' do
  content_type :json
  { message: "Delete item with id: #{params[:id]}" }.to_json
end

# Run: ruby app.rb
# Or: rackup config.ru`

    },
    {
      name: 'Swift',
      lang: 'swift',
      code: `// Vapor
import Vapor

// CREATE - POST
func createItem(req: Request) throws -> [String: String] {
    return ["message": "Item created successfully"]
}

// READ - GET all
func getItems(req: Request) -> [String: String] {
    return ["message": "Get all items"]
}

// READ - GET one
func getItem(req: Request) throws -> [String: String] {
    guard let id = req.parameters.get("id") else {
        throw Abort(.badRequest)
    }
    return ["message": "Get item with id: \\(id)"]
}

// UPDATE - PUT
func updateItem(req: Request) throws -> [String: String] {
    guard let id = req.parameters.get("id") else {
        throw Abort(.badRequest)
    }
    return ["message": "Update item with id: \\(id)"]
}

// DELETE
func deleteItem(req: Request) throws -> HTTPStatus {
    guard let id = req.parameters.get("id") else {
        throw Abort(.badRequest)
    }
    // Return 204 No Content
    return .noContent
}

// Configure routes
func routes(_ app: Application) throws {
    app.post("items", use: createItem)
    app.get("items", use: getItems)
    app.get("items", ":id", use: getItem)
    app.put("items", ":id", use: updateItem)
    app.delete("items", ":id", use: deleteItem)
}

// Run: swift run`

    }
  ]}
/>
