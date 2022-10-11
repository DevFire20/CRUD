const Post = require('../models/post')

const createPost = async (req, res) => {
    const { title, content } = req.body
    const post = await Post.findOne({ title: title })
    if (post) return res.status(401).json({ message: "Post already exists" })
    try {
        await Post.create({
            title, content, tags
        })
        res.status(201).json({ message: "Post created successfully", Post: post })
    } catch (error) {
        res.status(500).json({ Error: error.message })
    }
}

module.exports = { createPost }