const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    }
},
    { timestamps: true }
)

const Post = ("Post", PostSchema)

module.exports = { Post }