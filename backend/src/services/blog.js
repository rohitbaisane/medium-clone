const Blog = require('../models/blog');

class blogService {

    async addBlog(blogData) {
        console.log(blogData);
        const blog = await Blog.create(blogData);
        console.log(blog);
        return blog;
    }

    async findAllBlogs() {
        const blogs = await Blog.find({});
        return blogs;
    }
}


module.exports = blogService;