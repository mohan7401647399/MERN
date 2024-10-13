const mongoose = require('mongoose'),
    blog = require('../model/BlogModel')

//  fetch all blog lists

const fetchBlogLists = async (req, res) => {
    let blogLists;
    try {
        blogLists = await blog.find()
    } catch (error) {
        console.log(error)
    }
    if (!blogLists) {
        return res.status(404).json({ message: "No Blogs here" })
    }
    return res.status(200).json({ blogLists })
}


//  add a new Blog

const addNewBlog = async (req, res) => {
    const { title, description } = req.body
    const currentDate = new Date()

    const newBlog = new blog({
        title, description, date: currentDate
    })

    try {
        await newBlog.save()
    } catch (error) {
        console.log(error)
    }
    try {
        const session = await mongoose.startSession()
        session.startTransaction()
        await newBlog.save(session)
        session.commitTransaction()
    } catch (error) {
        return res.send(500).json({ message: error })
    }
    return res.status(200).json({ newBlog })
}


//  delete blog

const deleteBlog = async (req, res) => {
    const id = req.params.id

    try {
        const findBlogId = await blog.findByIdAndDelete(id)
        if (!findBlogId) {
            return res.send(404).json({ message: "Blog not found" })
        }
        return res.status(200).json({ message: 'Blog Successfully deleted' })
    } catch (error) {
        console.log(error)
        return res.send(500).json({ message: "Unable to delete! Please try again later..." })
    }
}


//  update a blog

const updateBlog = async (req, res) => {
    const id = req.params.id

    const { title, description } = req.body
    let currentBlogToUpdate

    try {
        currentBlogToUpdate = await blog.findByIdAndUpdate(id, { title, description })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong while updating! Please try again later" })
    }
    if (!currentBlogToUpdate) {
        return res.status(500).json({ message: "Unable to update" })
    }
    return res.status(200).json({ currentBlogToUpdate })
}

module.exports = { fetchBlogLists, addNewBlog, deleteBlog, updateBlog }