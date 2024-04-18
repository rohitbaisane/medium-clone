const BlogService = require('../services/blog');
const blogService = new BlogService();

const addBlog = async (req, res) => {

    console.log(req.body);
    const blog = await blogService.addBlog({
        title: req.body.title,
        description: req.body.description,
    });

    return res.status(200).json(blog);
}


const findAllBlogs = async (req, res) => {

    const blogs = await blogService.findAllBlogs();

    return res.status(200).json(blogs);
}


module.exports = {
    addBlog,
    findAllBlogs,
}