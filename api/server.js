// implement your server here
const express = require('express')

// require your posts router and connect it here
const PostsRouter = require('./posts/posts-router')

const server = express()

server.use(express.json())

server.use('/api/posts', PostsRouter)

server.get("/", (req, res) => {
    res.send(`
    
    <h2>Hi i'm tom</h2> 
    <p>I like jazz music</p>
    
    `)
})


module.exports = server