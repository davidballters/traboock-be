import { Blog } from '../models/blog.model.js'

export const getAll = async (req, res) => {
  const blogs = await Blog.findAll()
  return res.json(blogs)
}