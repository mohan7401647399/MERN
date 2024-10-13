const express = require('express'),
    blogRouter = express.Router()


const { fetchBlogLists, addNewBlog, updateBlog, deleteBlog } = require('../controller/BlogController')

blogRouter.get("/", fetchBlogLists)
    .post("/add", addNewBlog)
    .put("/update/:id", updateBlog)
    .delete("/delete/:id", deleteBlog)

module.exports = blogRouter