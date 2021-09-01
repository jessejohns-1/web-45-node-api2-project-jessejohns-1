const express = require("express");

const PostsRouter = require("./posts/posts-router");

const server = express();

server.use(express.json());

server.use("/api/posts", PostsRouter);

server.get("/", (req, res) => {
  res.send(`
    
    <h2>Hi i'm the server and i contain everything you need!</h2> 
    <p>I like jazz music</p>
    
    `);
});

module.exports = server;