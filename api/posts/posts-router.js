// implement your posts router here
const express = require('express')
const Posts = require ("./posts-model")
const router = express.Router()


router.get('/', (req, res) => {
    Posts.find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        console.log(err)
        res.status(500)({
            message: "The posts information could not be retrieved"
        })
    })
})

router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
    .then(posts => {
        if(posts) {res.status(200).json(posts)
        }else{
            res.status(404).json({message: "The post with the specified ID does not exist" })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500)({
            message: 'Error retrieving the posts'
        })
    })
})
 

router.post('/'), (req, res) => {
    const {title,contents} = req.body
    if(!title || !contents){
        res.status(400).json({ message: "Please provide title and contents for the post"})
    }else{
        Posts.insert({title, contents})
        .then(post => { if(post) {res.status(201).json(post)}
    })
        .catch(err=>{ console.log(err)
            res.status(500).json({ message: "There was an error while saving the post to the database"})
        })

}}


module.exports = router











module.exports = router