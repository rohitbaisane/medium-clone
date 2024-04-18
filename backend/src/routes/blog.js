const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');


router.get('/blog', blogController.findAllBlogs);

router.post('/blog', blogController.addBlog);


module.exports = router;