const mongoose = require('mongoose');
const Blog = mongoose.model('Blog');

const createBlog = async (req, res) => {
  const { body } = req;
  const newBlog = new Blog(body);
  await newBlog.save();
  return res.status(200).json(newBlog);
}
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  return res.status(200).json(blogs);
}

module.exports = {
  createBlog,
  getBlogs
}